export type FormValues = {
  name: string
  company: string
  email: string
}

export type FormErrors = Partial<Record<keyof FormValues, string>>
