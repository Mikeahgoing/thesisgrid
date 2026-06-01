import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { ModulesSection } from "@/components/home/modules-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { NarrativeSection } from "@/components/home/narrative-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <WorkflowSection />
        <NarrativeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
