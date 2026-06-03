import { DESIGN_ASSETS } from '../assets/designAssets'
import { FEATURES } from '../data/features'

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-heading" className="relative">
      <h2 className="sr-only" id="features-heading">
        Highlights
      </h2>
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 w-[min(420px,70vw)] -translate-y-1/2 opacity-70 sm:opacity-100"
        src={DESIGN_ASSETS.supportBg}
      />
      <div className="relative z-10 grid grid-cols-1 gap-3 rounded-[10px] bg-surface p-4 shadow-[0px_34px_44px_-20px_rgba(185,206,234,0.25)] sm:p-6 md:grid-cols-3 md:gap-6">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="grid grid-cols-[56px_1fr] items-start gap-4 rounded-[10px] p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0px_10px_20px_rgba(20,52,203,0.12)] sm:grid-cols-[64px_1fr] sm:gap-6"
          >
            <img alt={`${feature.title} icon`} className="h-14 w-14 sm:h-16 sm:w-16" src={feature.icon} />
            <div>
              <h3 className="text-[16px] font-semibold text-brand">{feature.title}</h3>
              <p className="mt-[10px] text-[15px] font-medium text-ink-muted sm:text-[16px]">{feature.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
