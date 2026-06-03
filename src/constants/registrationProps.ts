import type { FormEvent } from 'react'
import type { FormErrors, FormValues } from '../types/registration'

export type RegistrationSuccessProps = {
  name: string
}

export type RegistrationSectionProps = {
  values: FormValues
  visibleErrors: FormErrors
  submitMessage: string
  isSubmitted: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onBlur: (field: keyof FormValues) => void
  onChange: (field: keyof FormValues, value: string) => void
}
