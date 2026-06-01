import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  Target,
  Eye,
  Sparkles,
  Brain,
  Workflow,
  TrendingUp,
  FileSearch
} from "lucide-react"

const coreBeliefs = [
  {
    icon: Brain,
    title: "Information is not scarce — understanding is",
    description: "The challenge isn't finding data. It's transforming overwhelming volumes of information into structured, actionable understanding that drives better decisions.",
  },
  {
    icon: Workflow,
    title: "Workflows > Tools",
    description: "Point solutions create friction. Integrated workflows that match how investment professionals actually work create compounding value over time.",
  },
  {
    icon: TrendingUp,
    title: "Knowledge must compound",
    description: "Research shouldn't disappear when projects end or people leave. Institutional memory should grow stronger over time, not weaker.",
  },
  {
    icon: FileSearch,
    title: "Decisions must be traceable",
    description: "Every investment decision has a logic. That logic should be captured, reviewable, and auditable — for learning, compliance, and accountability.",
  },
]

const timeline = [
  {
    year: "Founded",
    title: "ThesisGrid Capital established",
    description: "Founded by investment professionals and AI researchers who saw the gap between available AI capabilities and institutional research needs.",
  },
  {
    year: "Platform",
    title: "Core platform launched",
    description: "First institutional deployment of the integrated research infrastructure platform with early hedge fund partners.",
  },
  {
    year: "Growth",
    title: "Expansion across segments",
    description: "Extended platform capabilities to serve asset managers, investment banks, and PE/VC firms with segment-specific workflows.",
  },
  {
    year: "Today",
    title: "Leading AI research infrastructure",
    description: "Serving 50+ institutional clients with $500B+ in combined AUM, processing millions of documents annually.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                About ThesisGrid
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Building the research operating system for the AI era
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                We&apos;re creating the infrastructure that transforms how institutional investors 
                process information, build knowledge, and make decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Mission */}
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Transform fragmented financial information into structured, intelligent, 
                  and decision-ready systems that empower institutional investors to make 
                  better decisions, faster.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                  Our Vision
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Become the core research operating system for institutional investors 
                  in the AI era — the infrastructure layer that powers how the world&apos;s 
                  capital is allocated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                What We Believe
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Our product philosophy is grounded in principles that guide every decision 
                we make about what to build and how.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {coreBeliefs.map((belief) => (
                <div 
                  key={belief.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <belief.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                From founding to becoming the leading AI research infrastructure for 
                institutional investors.
              </p>
            </div>

            <div className="mt-16">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 hidden h-full w-px bg-border lg:block" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="relative flex gap-8">
                      {/* Timeline dot */}
                      <div className="hidden lg:block">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                          <span className="text-xs font-semibold text-primary">{item.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 rounded-lg border border-border bg-card p-6">
                        <div className="mb-2 text-xs font-semibold text-primary lg:hidden">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Built by Practitioners
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                ThesisGrid was founded by a team that combines deep investment industry 
                experience with cutting-edge AI research. We&apos;ve sat in the seats of our 
                users — as analysts, portfolio managers, and research directors — and we 
                build the tools we wished we had.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team includes former hedge fund analysts, asset management technologists, 
                and AI researchers from leading institutions. This blend of domain expertise 
                and technical capability is what allows us to build infrastructure that 
                actually works in institutional environments.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Join us in building the future of research
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Whether as a customer, partner, or team member — we&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/product">Explore Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
