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

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
    )
  }, [])

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!editedContact.name || !editedContact.email || !editedContact.email) {
      return false
    }

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(editedContact),
        headers: { 'Content-Type': 'application/json' },
      })
      dispatch(resetEditedContact())

      const json = await res.json()
      console.log(json)
    } catch (e) {
      console.log(e.message)
    }
  }, [])

  const resetContact = useCallback(() => {
    dispatch(resetEditedContact())
  }, [])

  return {
    handleChange,
    handleSubmit,
    resetContact,
  }
}
