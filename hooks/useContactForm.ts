import { useCallback, FormEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEditedContact,
  resetEditedContact,
  selectContact,
} from '../slices/uiSlice'

export const useContactForm = () => {
  const dispatch = useDispatch()
  const editedContact = useSelector(selectContact)

  const handleInputChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
      )
    },
    [editedContact]
  )
  const handleTextAreaChange = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
      )
    },
    [editedContact]
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!editedContact.name || !editedContact.email || !editedContact.email) {
        return false
      }

      try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          body: JSON.stringify({
            ...editedContact,
            subject: 'お問い合わせ',
            honeypot: '',
            replyTo: '@',
            accessKey: process.env.NEXT_PUBLIC_STATICFORMS_TOKEN,
          }),
          headers: { 'Content-Type': 'application/json' },
        })

        const json = await res.json()
        if (json.success) {
          dispatch(resetEditedContact())
          alert('メールの送信完了しました。ありがとうございます。')
        }
      } catch (e) {
        alert(e.message)
      }
    },
    [editedContact]
  )

  return {
    editedContact,
    handleInputChange,
    handleTextAreaChange,
    handleSubmit,
  }
}
