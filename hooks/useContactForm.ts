import { useCallback, FormEvent, ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEditedContact,
  resetEditedContact,
  selectContact,
} from '../slices/uiSlice'

export const useContactForm = () => {
  const dispatch = useDispatch()
  const editedContact = useSelector(selectContact)

  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const handleInputChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      await dispatch(
        setEditedContact({
          ...editedContact,
          [e.target.name]: e.target.value,
        })
      )
      if (e.target.name === 'email') {
        if (re.test(String(e.target.value).toLowerCase())) {
          setIsErrorEmail(false)
        } else {
          setIsErrorEmail(true)
        }
      }
    },
    [editedContact]
  )
  const handleTextAreaChange = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      await dispatch(
        setEditedContact({
          ...editedContact,
          [e.target.name]: e.target.value,
        })
      )
    },
    [editedContact]
  )
  const validateEmail = useCallback(() => {
    return re.test(String(editedContact.email).toLowerCase())
  }, [editedContact])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!editedContact.name || !editedContact.email || !editedContact.email) {
        return
      }

      if (validateEmail) {
        alert('無効なメールアドレスが入力されています。')
        setIsErrorEmail(true)
        return
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
    isErrorEmail,
  }
}
