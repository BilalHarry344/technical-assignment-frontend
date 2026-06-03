import { DESIGN_ASSETS } from '../assets/designAssets'
import { TESTIMONIALS } from '../data/testimonials'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,582px)_1fr] lg:gap-10"
      id="about"
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[55%] top-[-5%] hidden w-[620px] max-w-[52vw] -translate-x-1/2 md:block"
        src={DESIGN_ASSETS.heroSectionCenter}
      />

      <div className="relative z-10">
        <h1
          className="mb-6 text-[32px] font-bold leading-[1.06] text-black sm:mb-8 sm:text-[40px] md:mb-16 md:text-[48px]"
          id="hero-heading"
        >
          Lorem ipsum{' '}
          <span className="relative inline-block text-brand">
            dolor
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-2 left-0 w-full select-none"
              src={DESIGN_ASSETS.dolorUnderline}
            />
          </span>{' '}
          sit amet yo <span aria-hidden="true">👋</span>
        </h1>

        <div className="testimonials-scroll">
          <ul
            aria-label="User testimonials"
            className="testimonials-scroll-list transparent-scrollbar space-y-4 px-4"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <li
                key={`${testimonial.name}-${index}`}
                className="grid min-h-[115px] grid-cols-[64px_1fr] gap-6 rounded-[10px] bg-surface p-6 shadow-[0px_24px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_30px_18px_rgba(20,52,203,0.16)]"
              >
                <img
                  alt={`Profile photo of ${testimonial.name}`}
                  className="h-16 w-16 rounded-full object-cover"
                  src={testimonial.image}
                />
                <div>
                  <strong className="mb-[10px] block text-[16px] font-medium text-black">{testimonial.name}</strong>
                  <p className="text-[16px] font-medium leading-normal text-ink-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra
                    sit.
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="testimonials-scroll-fade" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <img
          alt="Hero illustration showing people using digital payment services"
          className="h-auto w-full max-w-[618px] object-contain"
          src={DESIGN_ASSETS.hero}
        />
      </div>
    </section>
  )
}
