import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  Calendar,
  Users,
  Search,
  Globe,
  Layers,
  FileInput,
  Cpu,
  FileOutput,
  Sparkles,
  Clock,
  CheckCircle2,
  BarChart3
} from "lucide-react"

const useCases = [
  {
    id: "earnings",
    icon: Calendar,
    title: "Earnings Season Analysis",
    subtitle: "Process 100s of earnings calls in hours, not weeks",
    description: "When earnings season hits, your team faces an overwhelming flood of transcripts, presentations, and filings. ThesisGrid processes everything in real-time, extracting the signals that matter.",
    input: {
      items: ["Earnings transcripts", "Management presentations", "Guidance documents", "Analyst Q&A"],
    },
    process: {
      items: ["Tone analysis", "Metric extraction", "Guidance comparison", "Peer benchmarking"],
    },
    output: {
      items: ["Prioritized alerts", "Summary dashboards", "Thesis updates", "Research notes"],
    },
    benefits: [
      "Process entire earnings season in real-time",
      "Automatically flag material changes",
      "Compare guidance vs consensus",
      "Track management tone shifts",
    ],
  },
  {
    id: "committee",
    icon: Users,
    title: "Investment Committee Preparation",
    subtitle: "From research to committee-ready in minutes",
    description: "Investment committees require comprehensive, well-structured presentations. ThesisGrid automates the heavy lifting of memo preparation while maintaining the rigor your committee expects.",
    input: {
      items: ["Research notes", "Thesis workspace", "Market data", "Historical context"],
    },
    process: {
      items: ["Memo structuring", "Risk assessment", "Bull/bear framing", "Supporting evidence"],
    },
    output: {
      items: ["Investment memo", "Risk checklist", "Presentation deck", "Q&A preparation"],
    },
    benefits: [
      "Generate first draft memos automatically",
      "Standardized risk assessment frameworks",
      "Full audit trail for compliance",
      "Consistent presentation quality",
    ],
  },
  {
    id: "diligence",
    icon: Search,
    title: "Due Diligence (PE/VC)",
    subtitle: "Comprehensive diligence at unprecedented speed",
    description: "Private market transactions require deep, fast research across fragmented information. ThesisGrid accelerates diligence while ensuring nothing critical is missed.",
    input: {
      items: ["Data room documents", "Public filings", "Industry research", "Expert transcripts"],
    },
    process: {
      items: ["Document extraction", "Risk identification", "Market sizing", "Competitive mapping"],
    },
    output: {
      items: ["Diligence report", "Risk matrix", "Key questions", "Thesis framework"],
    },
    benefits: [
      "Accelerate data room review 10x",
      "Systematic risk identification",
      "Consistent diligence frameworks",
      "Knowledge capture for future deals",
    ],
  },
  {
    id: "macro",
    icon: Globe,
    title: "Macro Narrative Tracking",
    subtitle: "Connect the dots across global themes",
    description: "Macro factors drive markets, but connecting policy changes, economic data, and company impacts is complex. ThesisGrid maps these relationships automatically.",
    input: {
      items: ["Central bank communications", "Economic releases", "Policy announcements", "Earnings mentions"],
    },
    process: {
      items: ["Theme extraction", "Impact mapping", "Sentiment tracking", "Relationship graphing"],
    },
    output: {
      items: ["Theme dashboards", "Impact assessments", "Alert triggers", "Research context"],
    },
    benefits: [
      "Track macro themes across sources",
      "Map company-level impacts",
      "Historical pattern recognition",
      "Early warning indicators",
    ],
  },
  {
    id: "industry",
    icon: Layers,
    title: "Industry Deep Dive Research",
    subtitle: "Build comprehensive sector expertise",
    description: "Industry research requires synthesizing information across competitors, suppliers, customers, and regulators. ThesisGrid structures this complexity into actionable intelligence.",
    input: {
      items: ["Company filings", "Industry reports", "Trade publications", "Expert interviews"],
    },
    process: {
      items: ["Competitive mapping", "Value chain analysis", "Trend identification", "Risk assessment"],
    },
    output: {
      items: ["Industry model", "Competitive matrix", "Trend analysis", "Investment themes"],
    },
    benefits: [
      "Comprehensive competitive mapping",
      "Automated peer tracking",
      "Trend identification across sources",
      "Institutional knowledge building",
    ],
  },
]

function WorkflowStep({ 
  icon: Icon, 
  label, 
  items 
}: { 
  icon: React.ComponentType<{ className?: string }>
  label: string
  items: string[]
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Use Cases
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Solutions for every research workflow
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                See how ThesisGrid transforms specific research workflows from time-consuming 
                manual processes into structured, efficient systems.
              </p>
            </div>

            {/* Quick nav */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {useCases.map((useCase) => (
                <a 
                  key={useCase.id}
                  href={`#${useCase.id}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
                >
                  <useCase.icon className="h-4 w-4" />
                  {useCase.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Use case sections */}
        {useCases.map((useCase, index) => (
          <section 
            key={useCase.id}
            id={useCase.id}
            className={`py-24 ${index % 2 === 0 ? "bg-secondary/30 border-t border-border" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <useCase.icon className="h-7 w-7 text-accent" />
                </div>
                <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground">
                  {useCase.title}
                </h2>
                <p className="mt-2 text-lg text-accent">{useCase.subtitle}</p>
                <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Workflow visualization */}
              <div className="mt-16">
                <div className="grid gap-4 lg:grid-cols-3">
                  <WorkflowStep 
                    icon={FileInput} 
                    label="Input" 
                    items={useCase.input.items} 
                  />
                  <div className="relative">
                    {/* Arrow connectors */}
                    <div className="absolute -left-6 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-border to-primary/30 lg:block" />
                    <div className="absolute -right-6 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-primary/30 to-border lg:block" />
                    <WorkflowStep 
                      icon={Cpu} 
                      label="ThesisGrid Processing" 
                      items={useCase.process.items} 
                    />
                  </div>
                  <WorkflowStep 
                    icon={FileOutput} 
                    label="Output" 
                    items={useCase.output.items} 
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {useCase.benefits.map((benefit) => (
                  <div 
                    key={benefit}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Results section */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Measurable Impact
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Our clients see significant improvements across key research metrics.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, value: "10x", label: "Faster research cycles", description: "From days to hours" },
                { icon: BarChart3, value: "100%", label: "Traceable decisions", description: "Full audit trail" },
                { icon: Users, value: "5x", label: "Team collaboration", description: "Shared knowledge base" },
                { icon: CheckCircle2, value: "Zero", label: "Knowledge loss", description: "Institutional memory" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-card p-6 text-center">
                  <metric.icon className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-4 text-3xl font-semibold text-primary">{metric.value}</div>
                  <div className="mt-2 text-sm font-medium text-foreground">{metric.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{metric.description}</div>
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
                See ThesisGrid in action
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Schedule a demo to see how ThesisGrid can transform your specific 
                research workflows.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/technology">View Technology</Link>
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
