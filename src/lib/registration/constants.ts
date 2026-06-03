import type { FormValues } from '../../types/registration'

export const REGISTRATION_STORAGE_KEY = 'technical-assignment-registration'

export const initialFormValues: FormValues = {
  name: '',
  company: '',
  email: '',
}
