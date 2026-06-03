import { contactButtonClass } from '../constants/ui'

export function Footer() {
  return (
    <footer
      className="mt-16 border-t border-line-footer py-6 sm:mt-20 md:mt-[100px] md:py-8"
      id="contact"
    >
      <div className="sr-only" id="careers">
        Careers
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="text-center text-xs text-ink-muted md:text-left">Copyright © 2026 i2c inc. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-center gap-3 text-[15px] text-ink-muted sm:gap-4 sm:text-[16px] md:justify-end md:gap-8">
          <li>
            <a className="transition-colors duration-300 hover:text-brand" href="#">
              FAQs
            </a>
          </li>
          <li>
            <a className="transition-colors duration-300 hover:text-brand" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="transition-colors duration-300 hover:text-brand" href="#">
              Other
            </a>
          </li>
          <li>
            <a className={`${contactButtonClass} inline-block`} href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
