import { useEffect, useMemo, useRef, useState } from 'react'
import { DESIGN_ASSETS } from '../assets/designAssets'
import { TRUSTED_BRANDS, TRUSTED_SLIDER_VISIBLE_COUNT } from '../data/trustedBrands'

export function TrustedBySection() {
  const sliderItems = useMemo(() => [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS], [])
  const maxStartIndex = sliderItems.length - TRUSTED_SLIDER_VISIBLE_COUNT
  const totalStartPositions = maxStartIndex + 1

  const [activeStartIndex, setActiveStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [stepPx, setStepPx] = useState(0)

  useEffect(() => {
    if (isPaused) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    const intervalId = window.setInterval(() => {
      setActiveStartIndex((previous) => (previous + 1) % totalStartPositions)
    }, 2600)

    return () => window.clearInterval(intervalId)
  }, [isPaused, totalStartPositions])

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return

    const updateStep = (width: number) => {
      setStepPx(width / TRUSTED_SLIDER_VISIBLE_COUNT)
    }

    updateStep(element.getBoundingClientRect().width)

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width
      if (width) updateStep(width)
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const goToPrevious = () => {
    setActiveStartIndex((previous) => (previous - 1 + totalStartPositions) % totalStartPositions)
  }

  const goToNext = () => {
    setActiveStartIndex((previous) => (previous + 1) % totalStartPositions)
  }

  const centerIndex = activeStartIndex + 1

  return (
    <section aria-labelledby="trusted-heading" className="relative px-1 text-center sm:px-0">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[70%] top-[-50%] hidden w-[560px] max-w-[54vw] -translate-x-1/2 md:block"
        src={DESIGN_ASSETS.trustedBackground}
      />
      <div className="relative z-10 inline-block">
        <h2 className="text-[28px] font-extrabold leading-normal text-black sm:text-[36px]" id="trusted-heading">
          Trusted by
        </h2>
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[38px] w-[min(220px,70vw)] -translate-x-1/2 sm:top-[44px] sm:w-auto"
          src={DESIGN_ASSETS.trustedUnderline}
        />
      </div>
      <p className="relative z-10 mx-auto mt-4 max-w-[441px] px-2 text-[15px] font-medium leading-normal text-ink-muted sm:px-0 sm:text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
      </p>

      <div
        aria-label="Partner logos carousel"
        aria-roledescription="carousel"
        className="relative z-10 mt-6 flex items-center justify-center gap-4 md:justify-between md:gap-8"
      >
        <button
          aria-label="Previous logos"
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center text-[28px] leading-none text-accent transition-colors duration-300 hover:text-brand"
          onClick={goToPrevious}
          type="button"
        >
          ‹
        </button>

        <div className="flex flex-col items-center gap-3">
          <div ref={viewportRef} className="w-full min-w-0 max-w-[1000px] overflow-hidden">
            <ul
              aria-live="off"
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeStartIndex * stepPx}px)` }}
            >
              {sliderItems.map((item, index) => {
                const isInWindow = index >= activeStartIndex && index < activeStartIndex + TRUSTED_SLIDER_VISIBLE_COUNT
                const isActive = index === centerIndex && isInWindow

                return (
                  <li key={`${item.alt}-${index}`} className="flex w-1/3 flex-none items-center justify-center">
                    <img
                      alt={isInWindow ? item.alt : ''}
                      aria-hidden={!isInWindow}
                      className={`block h-auto max-h-10 w-auto max-w-[90%] sm:max-h-none sm:max-w-none ${
                        isInWindow ? (isActive ? 'opacity-100' : 'opacity-60') : 'opacity-0'
                      }`}
                      src={item.src}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <button
          aria-label="Next logos"
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center text-[28px] leading-none text-accent transition-colors duration-300 hover:text-brand"
          onClick={goToNext}
          type="button"
        >
          ›
        </button>
      </div>

      <button
        aria-pressed={isPaused}
        className="min-h-11 rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand"
        onClick={() => setIsPaused((paused) => !paused)}
        type="button"
      >
        {isPaused ? 'Play carousel' : 'Pause carousel'}
      </button>
    </section>
  )
}
