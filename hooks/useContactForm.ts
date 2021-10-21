import { useState, useCallback, FormEvent, ChangeEvent } from 'react'
import { EditContact } from '../types/types'

export const useContactForm = () => {
  const initializeForm: EditContact = {
    name: '',
    email: '',
    subject: 'お問い合わせ',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: process.env.NEXT_PUBLIC_STATICFORMS_TOKEN,
  }

  const [contact, setContact] = useState<EditContact>(initializeForm)

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!contact.name || !contact.email || !contact.email) {
        return false
      }

      try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          body: JSON.stringify(contact),
          headers: { 'Content-Type': 'application/json' },
        })
        const json = await res.json()
        console.log(json)
      } catch (e) {
        console.log(e.message)
      }
    },
    [contact]
  )

  const resetContact = useCallback(() => {
    setContact(initializeForm)
  }, [])

  return {
    contact,
    handleChange,
    handleSubmit,
    resetContact,
  }
}
