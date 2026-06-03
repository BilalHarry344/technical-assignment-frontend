import { DESIGN_ASSETS } from './assets/designAssets'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { RegistrationSection } from './components/RegistrationSection'
import { TrustedBySection } from './components/TrustedBySection'
import { useRegistrationForm } from './hooks/useRegistrationForm'

function App() {
  const registration = useRegistrationForm()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page text-ink">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="pointer-events-none absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-[8%] hidden w-[520px] max-w-[55vw] opacity-95 md:block"
          src={DESIGN_ASSETS.bottomSupport}
        />
      </div>

      <div className="relative mx-auto w-[min(1200px,92vw)]">
        <Header />
        <main className="space-y-16 pb-10 sm:space-y-20 lg:space-y-[100px]" id="main-content" tabIndex={-1}>
          <HeroSection />
          <FeaturesSection />
          <TrustedBySection />
          <RegistrationSection
            values={registration.values}
            isSubmitted={registration.isSubmitted}
            submitMessage={registration.submitMessage}
            visibleErrors={registration.visibleErrors}
            onSubmit={registration.handleSubmit}
            onBlur={registration.markTouched}
            onChange={registration.updateField}
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
