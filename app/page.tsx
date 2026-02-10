import { HeroSection } from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { StickyCTA } from "@/components/landing/sticky-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
      <StickyCTA />
    </>
  );
}
