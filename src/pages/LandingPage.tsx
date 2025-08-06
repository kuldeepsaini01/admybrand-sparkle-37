import { useScrollReveal } from "@/hooks/useScrollReveal"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { DemoSection } from "@/components/sections/DemoSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function LandingPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}