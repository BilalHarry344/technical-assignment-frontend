import { DESIGN_ASSETS } from '../assets/designAssets'
import type { RegistrationSectionProps } from '../constants/registrationProps'
import { registrationFormCardClass, registrationInputClass } from '../constants/ui'
import { RegistrationSuccess } from './RegistrationSuccess'

export function RegistrationSection({
  values,
  visibleErrors,
  submitMessage,
  isSubmitted,
  onSubmit,
  onBlur,
  onChange,
}: RegistrationSectionProps) {
  return (
    <section
      aria-labelledby="registration-heading"
      className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,505px)_minmax(0,537px)] lg:justify-between lg:gap-10"
      id="registration"
    >
      <div className="flex justify-center lg:justify-start">
        <img
          alt="Illustration accompanying the registration form"
          className="h-auto w-full max-w-[505px] object-contain"
          src={DESIGN_ASSETS.formArt}
        />
      </div>

      {isSubmitted ? (
        <RegistrationSuccess name={values.name} />
      ) : (
        <form
          aria-describedby={submitMessage ? 'form-error' : undefined}
          aria-label="Registration form"
          className={registrationFormCardClass}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="text-[26px] font-extrabold leading-normal text-black md:text-[36px]" id="registration-heading">
            Registration
          </h2>
          <p className="mb-8 mt-6 max-w-[441px] text-[15px] font-medium text-ink-muted sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
          </p>

          <label className="block text-[16px] font-medium text-black" htmlFor="name">
            Name <span aria-hidden="true" className="text-danger">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            aria-describedby={visibleErrors.name ? 'name-error' : undefined}
            aria-invalid={Boolean(visibleErrors.name)}
            aria-required="true"
            autoComplete="name"
            className={registrationInputClass}
            id="name"
            name="name"
            onBlur={() => onBlur('name')}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="Enter your name"
            type="text"
            value={values.name}
          />
          {visibleErrors.name && (
            <p className="mt-1 text-xs font-medium text-danger" id="name-error" role="alert">
              {visibleErrors.name}
            </p>
          )}

          <label className="mt-5 block text-[16px] font-medium text-black" htmlFor="company">
            Company <span aria-hidden="true" className="text-danger">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            aria-describedby={visibleErrors.company ? 'company-error' : undefined}
            aria-invalid={Boolean(visibleErrors.company)}
            aria-required="true"
            autoComplete="organization"
            className={registrationInputClass}
            id="company"
            name="company"
            onBlur={() => onBlur('company')}
            onChange={(event) => onChange('company', event.target.value)}
            placeholder="Enter your company name"
            type="text"
            value={values.company}
          />
          {visibleErrors.company && (
            <p className="mt-1 text-xs font-medium text-danger" id="company-error" role="alert">
              {visibleErrors.company}
            </p>
          )}

          <label className="mt-5 block text-[16px] font-medium text-black" htmlFor="email">
            Email address <span aria-hidden="true" className="text-danger">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            aria-describedby={visibleErrors.email ? 'email-error' : undefined}
            aria-invalid={Boolean(visibleErrors.email)}
            aria-required="true"
            autoComplete="email"
            className={registrationInputClass}
            id="email"
            name="email"
            onBlur={() => onBlur('email')}
            onChange={(event) => onChange('email', event.target.value)}
            placeholder="Enter your email address"
            type="email"
            value={values.email}
          />
          {visibleErrors.email && (
            <p className="mt-1 text-xs font-medium text-danger" id="email-error" role="alert">
              {visibleErrors.email}
            </p>
          )}

          <button
            className="mt-12 w-full rounded-full border border-brand bg-brand px-8 py-3 text-[16px] font-bold text-white shadow-[0px_10px_17px_rgba(20,52,203,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0px_12px_20px_rgba(20,52,203,0.55)]"
            type="submit"
          >
            Register
          </button>
          {submitMessage && (
            <p className="mt-3 text-sm font-semibold text-danger" id="form-error" role="alert">
              {submitMessage}
            </p>
          )}
        </form>
      )}
    </section>
  )
}
