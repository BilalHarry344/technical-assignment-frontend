import type { RegistrationSuccessProps } from '../constants/registrationProps'
import { registrationCardClass } from '../constants/ui'

function formatDisplayName(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return 'there'

  return trimmed.toLowerCase().replace(/\b\w/g, (character) => character.toUpperCase())
}

export function RegistrationSuccess({ name }: RegistrationSuccessProps) {
  const displayName = formatDisplayName(name)

  return (
    <div
      aria-labelledby="registration-success-heading"
      className={`${registrationCardClass} flex flex-col items-center justify-center`}
      role="status"
    >
      <div className="max-w-[441px]">
        <h2
          className="text-[26px] font-extrabold leading-normal text-success md:text-[36px]"
          id="registration-success-heading"
        >
          Registration
        </h2>
        <p className="mt-6 text-[15px] font-medium leading-normal text-ink-muted sm:text-[16px]">
          Hi {displayName}, thanks for registering. Somebody will contact you soon.
        </p>
      </div>
    </div>
  )
}
