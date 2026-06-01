import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  TrendingUp,
  Building2,
  Landmark,
  Briefcase,
  FileSearch,
  Users,
  CheckCircle2,
  Clock,
  Brain,
  Target,
  Layers
} from "lucide-react"

const customerSegments = [
  {
    id: "hedge-funds",
    icon: TrendingUp,
    title: "Hedge Funds",
    subtitle: "Long/Short, Macro, Multi-Strategy",
    description: "From fundamental equity research to macro thematic analysis, hedge funds use ThesisGrid to systematize their research process and build institutional memory.",
    challenges: [
      "Managing research across multiple strategies",
      "Tracking evolving investment theses",
      "Capturing analyst insights before turnover",
      "Coordinating across portfolio managers",
    ],
    solutions: [
      "Unified research platform across strategies",
      "Thesis workspace with version control",
      "Institutional knowledge hub",
      "Team collaboration workflows",
    ],
  },
  {
    id: "asset-managers",
    icon: Building2,
    title: "Asset Managers",
    subtitle: "Traditional & Systematic",
    description: "Asset managers leverage ThesisGrid to scale research capabilities, maintain consistency across large coverage universes, and improve research productivity.",
    challenges: [
      "Scaling research across large coverage",
      "Maintaining research consistency",
      "Efficient earnings season processing",
      "Knowledge sharing across teams",
    ],
    solutions: [
      "AI-powered research summarization",
      "Standardized research frameworks",
      "Automated earnings processing",
      "Cross-team knowledge discovery",
    ],
  },
  {
    id: "investment-banks",
    icon: Landmark,
    title: "Investment Banks",
    subtitle: "Research & Advisory",
    description: "Investment banking teams use ThesisGrid to accelerate research production, improve client deliverables, and maintain competitive intelligence.",
    challenges: [
      "Research production speed",
      "Client deliverable quality",
      "Competitive intelligence tracking",
      "Cross-sector theme identification",
    ],
    solutions: [
      "Accelerated research workflows",
      "Automated memo generation",
      "Narrative tracking engine",
      "Theme identification across sectors",
    ],
  },
  {
    id: "pe-vc",
    icon: Briefcase,
    title: "PE / VC Firms",
    subtitle: "Growth & Buyout",
    description: "Private equity and venture capital firms use ThesisGrid to accelerate due diligence, track portfolio companies, and build sector expertise.",
    challenges: [
      "Due diligence speed and coverage",
      "Portfolio company monitoring",
      "Sector expertise development",
      "Deal sourcing intelligence",
    ],
    solutions: [
      "Accelerated due diligence",
      "Automated portfolio tracking",
      "Industry knowledge building",
      "Competitive landscape mapping",
    ],
  },
  {
    id: "research-firms",
    icon: FileSearch,
    title: "Research Firms",
    subtitle: "Independent Research",
    description: "Independent research firms use ThesisGrid to scale their research production, maintain quality, and deliver differentiated insights to clients.",
    challenges: [
      "Research production efficiency",
      "Differentiated insight generation",
      "Client delivery workflows",
      "Research quality consistency",
    ],
    solutions: [
      "Automated research extraction",
      "Narrative intelligence engine",
      "Streamlined client deliverables",
      "Quality assurance workflows",
    ],
  },
]

export default function CustomersPage() {
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
                <Users className="h-3.5 w-3.5" />
                Customers
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Built for institutional investors
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                ThesisGrid serves the world&apos;s most sophisticated investment organizations, 
                from hedge funds to asset managers to investment banks.
              </p>
            </div>

            {/* Quick nav */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {customerSegments.map((segment) => (
                <a 
                  key={segment.id}
                  href={`#${segment.id}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                >
                  <segment.icon className="h-4 w-4" />
                  {segment.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Customer segments */}
        {customerSegments.map((segment, index) => (
          <section 
            key={segment.id}
            id={segment.id}
            className={`py-24 ${index % 2 === 0 ? "bg-secondary/30 border-t border-border" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <segment.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl tracking-tight text-foreground">
                        {segment.title}
                      </h2>
                      <p className="text-sm text-primary">{segment.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {segment.description}
                  </p>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className={`grid gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Challenges */}
                  <div className="rounded-lg border border-border bg-card p-5">
                    <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      Common Challenges
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {segment.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-5">
                    <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      How ThesisGrid Helps
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {segment.solutions.map((solution) => (
                        <li key={solution} className="flex items-start gap-3 text-sm text-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Trust indicators */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Trusted by Leading Institutions
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                ThesisGrid is deployed at some of the world&apos;s most sophisticated 
                investment organizations.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Brain, value: "$500B+", label: "Assets under management", description: "Across our client base" },
                { icon: Users, value: "1,000+", label: "Research professionals", description: "Using ThesisGrid daily" },
                { icon: Target, value: "50+", label: "Institutional clients", description: "Hedge funds & asset managers" },
                { icon: Layers, value: "10M+", label: "Documents processed", description: "Annually on platform" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
                  <stat.icon className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-4 text-3xl font-semibold text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Join leading institutions
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                See how ThesisGrid can transform your research infrastructure.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">About Us</Link>
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
