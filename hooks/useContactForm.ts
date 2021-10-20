import { useState, useCallback, FormEvent, ChangeEvent } from 'react'

export const useContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    kana: '',
    email: '',
    subject: 'お問い合わせ',
    message: '',
    accessKey: process.env.NEXT_PUBLIC_STATICFORMS_TOKEN,
  })

  const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

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

  return {
    contact,
    handleChange,
    handleSubmit,
  }
}
