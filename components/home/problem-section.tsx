import { AlertTriangle, Layers, Clock, Brain, Users, FileSearch, Mail, FileText, Database, Table2, MessageSquare, Folder, BarChart3, Search, Bell, CheckCircle2, TrendingUp, PieChart, ListChecks } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Fragmented Research",
    description: "Critical insights scattered across emails, documents, and siloed tools with no unified view.",
  },
  {
    icon: Clock,
    title: "Manual Workflows",
    description: "Hours spent on repetitive extraction, summarization, and formatting tasks.",
  },
  {
    icon: Brain,
    title: "Weak Knowledge Retention",
    description: "Institutional knowledge lost when analysts leave or research isn't properly archived.",
  },
  {
    icon: Users,
    title: "Poor Collaboration",
    description: "Teams working in isolation without visibility into overlapping research efforts.",
  },
  {
    icon: FileSearch,
    title: "No Decision Tracking",
    description: "Investment decisions made without traceable logic or historical context.",
  },
]

// Chaos side items - scattered tools and data sources
const chaosItems = [
  { icon: Mail, label: "Emails", rotation: -3, x: 0, y: 0 },
  { icon: FileText, label: "PDFs", rotation: 5, x: 1, y: 0 },
  { icon: Table2, label: "Spreadsheets", rotation: -2, x: 0, y: 1 },
  { icon: MessageSquare, label: "Slack", rotation: 4, x: 1, y: 1 },
  { icon: Folder, label: "Shared Drives", rotation: -4, x: 0, y: 2 },
  { icon: Database, label: "Databases", rotation: 2, x: 1, y: 2 },
]

// Order side items - unified dashboard elements
const orderItems = [
  { icon: Search, label: "Unified Search" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Bell, label: "Alerts" },
  { icon: ListChecks, label: "Tasks" },
  { icon: TrendingUp, label: "Insights" },
  { icon: PieChart, label: "Reports" },
]

export function ProblemSection() {
  return (
    <section className="relative border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-sm text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" />
            The Problem
          </div>
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Information overload is crushing research productivity
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Modern investment teams face an exponentially growing data landscape with outdated tools 
            that create friction instead of insight.
          </p>
        </div>

        {/* Visual: Chaos to Order */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Chaos side */}
          <div className="relative rounded-lg border border-destructive/20 bg-gradient-to-br from-destructive/5 to-transparent p-8">
            <div className="absolute -top-3 left-6 rounded-sm bg-destructive/20 px-3 py-1 font-mono text-xs text-destructive">
              Current State
            </div>
            <div className="grid grid-cols-2 gap-4">
              {chaosItems.map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center justify-center gap-2 rounded-md border border-destructive/20 bg-background/80 p-4 shadow-sm"
                  style={{ 
                    transform: `rotate(${item.rotation}deg)`,
                  }}
                >
                  <item.icon className="h-6 w-6 text-destructive/60" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            {/* Connection lines showing disconnection */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-destructive/30" />
              <span className="text-xs text-destructive/60">?</span>
              <div className="h-px w-8 bg-destructive/30" />
              <span className="text-xs text-destructive/60">?</span>
              <div className="h-px w-8 bg-destructive/30" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Disconnected systems, manual processes, lost insights
            </p>
          </div>

          {/* Order side */}
          <div className="relative rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8">
            <div className="absolute -top-3 left-6 rounded-sm bg-primary/20 px-3 py-1 font-mono text-xs text-primary">
              With ThesisGrid
            </div>
            {/* Unified dashboard mockup */}
            <div className="rounded-md border border-primary/20 bg-background/80 p-4 shadow-sm">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-foreground">Research Hub</span>
                </div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <div className="h-2 w-2 rounded-full bg-muted" />
                </div>
              </div>
              {/* Dashboard grid */}
              <div className="grid grid-cols-3 gap-3">
                {orderItems.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center justify-center gap-1.5 rounded-sm border border-primary/10 bg-primary/5 p-3"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-[10px] text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              {/* Status bar */}
              <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                <span>All systems connected</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Unified, structured, actionable research intelligence
            </p>
          </div>
        </div>

        {/* Problem list */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="group rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30"
            >
              <problem.icon className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
