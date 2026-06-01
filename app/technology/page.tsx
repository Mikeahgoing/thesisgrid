import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight,
  Brain,
  FileText,
  Network,
  Search,
  Shield,
  Cpu,
  Database,
  Lock,
  Eye,
  GitBranch,
  CheckCircle2,
  Layers,
  Zap,
  Server,
  AlertTriangle,
  TrendingUp,
  FileSearch,
  Link2
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Purpose-built LLMs fine-tuned on financial documents, earnings calls, and investment research for domain-specific understanding.",
    details: [
      "Financial domain pre-training",
      "Earnings call specialization",
      "Multi-document reasoning",
      "Continuous learning",
    ],
  },
  {
    icon: FileText,
    title: "Natural Language Processing",
    description: "Advanced NLP pipelines optimized for financial language, including entity recognition, relationship extraction, and sentiment analysis.",
    details: [
      "Financial entity recognition",
      "Relationship extraction",
      "Sentiment quantification",
      "Language change detection",
    ],
  },
  {
    icon: Search,
    title: "Knowledge Retrieval",
    description: "Semantic search and retrieval systems that understand financial context and surface relevant information across your entire knowledge base.",
    details: [
      "Semantic similarity search",
      "Contextual ranking",
      "Cross-document linking",
      "Temporal awareness",
    ],
  },
  {
    icon: Network,
    title: "Event Extraction",
    description: "Automated identification and structuring of material events from unstructured text into actionable, queryable data.",
    details: [
      "Material event detection",
      "Guidance extraction",
      "Risk factor parsing",
      "Competitive mentions",
    ],
  },
  {
    icon: Database,
    title: "Financial Semantic Understanding",
    description: "Deep understanding of financial concepts, metrics, and relationships that goes beyond surface-level text analysis.",
    details: [
      "Metric normalization",
      "Peer comparison",
      "Industry context",
      "Temporal analysis",
    ],
  },
]

const outputCapabilities = [
  {
    icon: Layers,
    title: "Structured Events",
    description: "Raw text transformed into structured, queryable events with metadata and context.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Tags",
    description: "Automated risk identification and categorization across all document types.",
  },
  {
    icon: TrendingUp,
    title: "Narrative Shifts",
    description: "Tracked changes in themes, sentiment, and messaging over time.",
  },
  {
    icon: FileSearch,
    title: "Research Indexing",
    description: "Full-text and semantic indexing across all internal research.",
  },
  {
    icon: Link2,
    title: "Traceable Insights",
    description: "Every output linked back to source documents with full audit trail.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Complete history of all changes, decisions, and outputs.",
  },
]

const trustPillars = [
  {
    icon: Eye,
    title: "Auditable",
    description: "Every insight can be traced back to its source documents. Full audit trails for compliance and review.",
    points: [
      "Source document linking",
      "Processing logs",
      "Decision trails",
      "Export capabilities",
    ],
  },
  {
    icon: GitBranch,
    title: "Traceable",
    description: "Track how conclusions were reached and how they evolve over time with complete version history.",
    points: [
      "Reasoning chains",
      "Version history",
      "Change attribution",
      "Temporal tracking",
    ],
  },
  {
    icon: Layers,
    title: "Structured",
    description: "Unstructured information transformed into consistent, queryable formats that integrate with your workflows.",
    points: [
      "Consistent schemas",
      "API access",
      "Export formats",
      "Integration ready",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Verifiable",
    description: "Outputs designed to be checked and validated by humans. AI augments, not replaces, human judgment.",
    points: [
      "Confidence scores",
      "Alternative views",
      "Human review flows",
      "Feedback loops",
    ],
  },
]

export default function TechnologyPage() {
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
                <Cpu className="h-3.5 w-3.5" />
                Technology
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                AI infrastructure built for institutional finance
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Purpose-built technology stack designed for the unique requirements of 
                institutional investment research: accuracy, traceability, and integration.
              </p>
            </div>
          </div>
        </section>

        {/* Core Technology Stack */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Core Technology Stack
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Five foundational capabilities that power every module in the ThesisGrid platform.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {coreCapabilities.map((capability, index) => (
                <div 
                  key={capability.title}
                  className={`rounded-xl border border-border bg-card p-6 ${
                    index === coreCapabilities.length - 1 ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      <capability.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {capability.details.map((detail) => (
                          <div 
                            key={detail}
                            className="flex items-center gap-2 rounded border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Output Capabilities */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Output Capabilities
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                What the platform produces: structured, actionable, and fully integrated outputs.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outputCapabilities.map((capability) => (
                <div 
                  key={capability.title}
                  className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
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
        </section>

        {/* Trust & Verification */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                <Shield className="h-3.5 w-3.5" />
                Trust & Verification
              </div>
              <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Built for institutional trust
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                In institutional finance, trust is non-negotiable. Every aspect of ThesisGrid 
                is designed with auditability, traceability, and verification in mind.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {trustPillars.map((pillar) => (
                <div 
                  key={pillar.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                      <pillar.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure & Security */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                Enterprise Infrastructure
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Deployed in environments that meet institutional requirements for security, 
                compliance, and performance.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Lock,
                  title: "Security First",
                  items: ["SOC 2 Type II", "Encryption at rest & transit", "SSO integration", "Audit logging"],
                },
                {
                  icon: Server,
                  title: "Deployment Options",
                  items: ["Cloud hosted", "Private cloud", "On-premises", "Hybrid configurations"],
                },
                {
                  icon: Zap,
                  title: "Performance",
                  items: ["Real-time processing", "Scalable architecture", "High availability", "Global deployment"],
                },
              ].map((section) => (
                <div key={section.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
                Learn more about our technology
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Schedule a technical deep-dive with our team to understand how ThesisGrid 
                can integrate with your existing infrastructure.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Technical Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/customers">View Customers</Link>
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
