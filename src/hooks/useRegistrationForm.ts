import { FormEvent, useEffect, useMemo, useState } from 'react'
import { initialFormValues, REGISTRATION_STORAGE_KEY } from '../lib/registration/constants'
import { validateRegistration } from '../lib/registration/validate'
import type { FormErrors, FormValues } from '../types/registration'

export function useRegistrationForm() {
  const [values, setValues] = useState<FormValues>(initialFormValues)
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(REGISTRATION_STORAGE_KEY)
      if (!stored) return

      setValues(JSON.parse(stored) as FormValues)
      setIsSubmitted(true)
    } catch {
      setSubmitMessage('Unable to read previous form submission.')
    }
  }, [])

  const errors = useMemo(() => validateRegistration(values), [values])

  const visibleErrors: FormErrors = {
    name: touched.name ? errors.name : undefined,
    company: touched.company ? errors.company : undefined,
    email: touched.email ? errors.email : undefined,
  }

  const isFormValid = Object.keys(errors).length === 0

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitted) return

    setTouched({ name: true, company: true, email: true })

    if (!isFormValid) {
      setSubmitMessage('Please fix the highlighted fields and submit again.')
      return
    }

    try {
      localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(values))
      setIsSubmitted(true)
      setSubmitMessage('')
    } catch {
      setSubmitMessage('Submission failed because local storage is unavailable.')
    }
  }

  const markTouched = (field: keyof FormValues) => {
    setTouched((previous) => ({ ...previous, [field]: true }))
  }

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
  }

  return {
    values,
    visibleErrors,
    isSubmitted,
    submitMessage,
    handleSubmit,
    markTouched,
    updateField,
  }
}
