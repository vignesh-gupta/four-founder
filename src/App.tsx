import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProductsSection } from "@/components/sections/products-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { ExportCapabilitiesSection } from "@/components/sections/export-capabilities-section"
import { InquiryFormSection } from "@/components/sections/inquiry-form-section"
import { FooterSection } from "@/components/sections/footer-section"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ExportCapabilitiesSection />
      <InquiryFormSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  )
}

export default App
