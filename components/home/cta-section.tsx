import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Building2,
    label: "Enterprise Ready",
    description: "SOC 2, private deployment options",
  },
  {
    icon: Shield,
    label: "Secure by Design",
    description: "Your data never leaves your control",
  },
  {
    icon: Zap,
    label: "Rapid Deployment",
    description: "Weeks to value, not months",
  },
]

export function CTASection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 lg:p-12">
          {/* Grid background */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Build your AI-native research system
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Join leading institutional investors who are transforming their research 
              infrastructure with ThesisGrid.
            </p>

            {/* Features */}
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-foreground">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link href="/product">Explore Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
