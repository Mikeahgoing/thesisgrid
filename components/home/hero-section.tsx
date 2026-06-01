import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Cpu, BarChart3, Layers } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center pt-24 pb-16 text-center lg:pt-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Institutional-Grade AI Infrastructure
          </div>

          {/* Headline - using serif font for distinctive look */}
          <h1 className="mt-8 max-w-4xl font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
            AI-native research infrastructure for institutional investors
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Transform unstructured financial information into structured intelligence, 
            collaborative workflows, and decision-ready investment insight.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/product">View Platform</Link>
            </Button>
          </div>
        </div>

        {/* Data Pipeline Visualization */}
        <div className="relative mt-8 pb-24">
          <div className="mx-auto max-w-5xl">
            {/* Pipeline visual */}
            <div className="rounded-lg border border-border bg-card/30 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {/* Raw Data */}
                <div className="group relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                    <Database className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="mt-4 text-sm font-medium text-foreground">Raw Data</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">
                    Earnings, filings, news
                  </span>
                  {/* Connector line - hidden on mobile */}
                  <div className="absolute right-0 top-8 hidden h-px w-1/2 translate-x-full bg-gradient-to-r from-border to-transparent md:block" />
                </div>

                {/* AI Processing */}
                <div className="group relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/15">
                    <Cpu className="h-7 w-7 text-primary" />
                  </div>
                  <span className="mt-4 text-sm font-medium text-foreground">AI Processing</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">
                    Extract & structure
                  </span>
                  <div className="absolute right-0 top-8 hidden h-px w-1/2 translate-x-full bg-gradient-to-r from-primary/20 to-transparent md:block" />
                  <div className="absolute left-0 top-8 hidden h-px w-1/2 -translate-x-full bg-gradient-to-l from-border to-transparent md:block" />
                </div>

                {/* Structured Insight */}
                <div className="group relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/15">
                    <BarChart3 className="h-7 w-7 text-accent" />
                  </div>
                  <span className="mt-4 text-sm font-medium text-foreground">Structured Insight</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">
                    Knowledge & narratives
                  </span>
                  <div className="absolute right-0 top-8 hidden h-px w-1/2 translate-x-full bg-gradient-to-r from-accent/20 to-transparent md:block" />
                  <div className="absolute left-0 top-8 hidden h-px w-1/2 -translate-x-full bg-gradient-to-l from-primary/20 to-transparent md:block" />
                </div>

                {/* Decision Layer */}
                <div className="group relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                    <Layers className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="mt-4 text-sm font-medium text-foreground">Decision Layer</span>
                  <span className="mt-1 text-xs text-muted-foreground text-center">
                    Thesis & actions
                  </span>
                  <div className="absolute left-0 top-8 hidden h-px w-1/2 -translate-x-full bg-gradient-to-l from-accent/20 to-transparent md:block" />
                </div>
              </div>

              {/* Data sources ticker */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-6">
                {["SEC Filings", "Earnings Calls", "Research Notes", "News & Events", "Alt Data"].map((source) => (
                  <span key={source} className="rounded-sm border border-border bg-secondary/30 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
