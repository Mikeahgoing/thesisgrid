import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MessageSquare, 
  TrendingUp, 
  Target, 
  FileText, 
  Database,
  ArrowRight,
  Check,
  Sparkles,
  Search,
  AlertCircle,
  GitCompare,
  LineChart,
  Gauge,
  BookOpen,
  History,
  GitBranch,
  Users,
  FileCheck,
  Scale,
  Network,
  Clock,
  Link2
} from "lucide-react"

const modules = [
  {
    id: "research-copilot",
    icon: MessageSquare,
    name: "Research Copilot",
    tagline: "Your AI-powered research assistant",
    description: "Summarize, extract, and synthesize research across your entire knowledge base with contextual understanding of financial documents.",
    capabilities: [
      {
        icon: Search,
        title: "Intelligent Summarization",
        description: "Automatically summarize earnings calls, SEC filings, and research notes with key highlights extraction.",
      },
      {
        icon: LineChart,
        title: "Earnings Call Analysis",
        description: "Extract management tone, guidance changes, and key metrics from earnings transcripts.",
      },
      {
        icon: AlertCircle,
        title: "Risk Extraction",
        description: "Identify and categorize risk factors across filings and disclosures.",
      },
      {
        icon: GitCompare,
        title: "Cross-Document Comparison",
        description: "Compare language and metrics changes across time periods and peer groups.",
      },
    ],
  },
  {
    id: "narrative-engine",
    icon: TrendingUp,
    name: "Narrative Engine",
    tagline: "Track the stories moving markets",
    description: "Monitor how market narratives evolve, sentiment shifts occur, and where expectations diverge from fundamental reality.",
    capabilities: [
      {
        icon: BookOpen,
        title: "Narrative Tracking",
        description: "Follow how themes and stories develop across earnings calls, analyst reports, and news flow.",
      },
      {
        icon: Gauge,
        title: "Sentiment Analysis",
        description: "Quantify management tone and analyst sentiment with historical context.",
      },
      {
        icon: Scale,
        title: "Expectation Gap Detection",
        description: "Identify disconnects between market pricing and fundamental developments.",
      },
      {
        icon: Network,
        title: "Theme Evolution",
        description: "Track how macro themes connect to sector and company-level narratives.",
      },
    ],
  },
  {
    id: "thesis-workspace",
    icon: Target,
    name: "Thesis Workspace",
    tagline: "Structured investment thesis management",
    description: "A collaborative environment to develop, track, and evolve investment theses with full version control and audit trails.",
    capabilities: [
      {
        icon: Target,
        title: "Assumption Tracking",
        description: "Define and monitor the key assumptions underlying each investment thesis.",
      },
      {
        icon: AlertCircle,
        title: "Trigger Monitoring",
        description: "Set up alerts for events that validate or invalidate thesis components.",
      },
      {
        icon: GitBranch,
        title: "Version Control",
        description: "Full history of thesis evolution with diff views and contributor attribution.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Real-time collaboration with comments, reviews, and approval workflows.",
      },
    ],
  },
  {
    id: "memo-generator",
    icon: FileText,
    name: "Investment Memo Generator",
    tagline: "Committee-ready documentation",
    description: "Automatically draft comprehensive investment memos with structured frameworks, risk checklists, and bull/bear cases.",
    capabilities: [
      {
        icon: FileCheck,
        title: "Auto Memo Drafting",
        description: "Generate first drafts from thesis workspace data and research copilot outputs.",
      },
      {
        icon: Scale,
        title: "Bull/Bear Framework",
        description: "Structured presentation of both sides with weighted probability assessments.",
      },
      {
        icon: AlertCircle,
        title: "Risk Checklists",
        description: "Standardized risk assessment with customizable frameworks per strategy.",
      },
      {
        icon: FileText,
        title: "Committee Ready",
        description: "Formatted outputs ready for investment committee presentation.",
      },
    ],
  },
  {
    id: "knowledge-hub",
    icon: Database,
    name: "Institutional Knowledge Hub",
    tagline: "Your research memory that compounds",
    description: "Capture, index, and connect all research across your organization to build institutional memory that persists and compounds.",
    capabilities: [
      {
        icon: Network,
        title: "Knowledge Graph",
        description: "Automatically link entities, themes, and insights across all research.",
      },
      {
        icon: Search,
        title: "Research Indexing",
        description: "Full-text search with semantic understanding across all internal research.",
      },
      {
        icon: History,
        title: "Historical Tracking",
        description: "Track how views and positions have evolved over time with full context.",
      },
      {
        icon: Link2,
        title: "Cross-Team Insights",
        description: "Surface relevant research from across teams based on current work.",
      },
    ],
  },
]

export default function ProductPage() {
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
                Platform Overview
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Five modules. One integrated platform.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Each module is powerful on its own, but together they create a complete 
                AI-native research infrastructure that transforms how you work.
              </p>
            </div>

            {/* Quick nav */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {modules.map((module) => (
                <a 
                  key={module.id}
                  href={`#${module.id}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                >
                  <module.icon className="h-4 w-4" />
                  {module.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Module sections */}
        {modules.map((module, index) => (
          <section 
            key={module.id}
            id={module.id}
            className={`py-24 ${index % 2 === 0 ? "bg-secondary/30 border-t border-border" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                    <module.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground">
                    {module.name}
                  </h2>
                  <p className="mt-2 text-lg text-primary">{module.tagline}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {module.description}
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

                {/* Capabilities grid */}
                <div className={`grid gap-4 sm:grid-cols-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {module.capabilities.map((capability) => (
                    <div 
                      key={capability.title}
                      className="rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <capability.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-foreground">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Integration section */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Better Together
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                While each module delivers value independently, the real power emerges 
                when they work together as an integrated system.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  from: "Research Copilot",
                  to: "Thesis Workspace",
                  benefit: "Extracted insights flow directly into thesis development",
                },
                {
                  from: "Narrative Engine",
                  to: "Memo Generator",
                  benefit: "Market context automatically enriches investment memos",
                },
                {
                  from: "Thesis Workspace",
                  to: "Knowledge Hub",
                  benefit: "Every thesis decision becomes searchable institutional memory",
                },
                {
                  from: "Knowledge Hub",
                  to: "Research Copilot",
                  benefit: "Historical context enhances current research",
                },
                {
                  from: "Memo Generator",
                  to: "Thesis Workspace",
                  benefit: "Committee feedback loops back into thesis refinement",
                },
                {
                  from: "All Modules",
                  to: "Full Traceability",
                  benefit: "Every insight, decision, and output is fully auditable",
                },
              ].map((integration, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary">{integration.from}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    <span className="text-accent">{integration.to}</span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {integration.benefit}
                  </p>
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
                Ready to transform your research?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                See how ThesisGrid can integrate with your existing workflow and 
                accelerate your research capabilities.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/solutions">View Use Cases</Link>
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
