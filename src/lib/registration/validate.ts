import type { FormErrors, FormValues } from '../../types/registration'

export function validateRegistration(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const name = values.name.trim()
  const company = values.company.trim()
  const email = values.email.trim()

  if (!name) {
    errors.name = 'Name is required.'
  } else if (!/^[A-Za-z ]{2,}$/.test(name)) {
    errors.name = 'Enter at least 2 letters using alphabetic characters.'
  }

  if (!company) {
    errors.company = 'Company is required.'
  } else if (company.length < 2) {
    errors.company = 'Company must have at least 2 characters.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}
