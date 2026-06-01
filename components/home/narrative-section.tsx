import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react"

const narrativeCapabilities = [
  {
    title: "Market Narratives",
    description: "Track how stories evolve across earnings calls, analyst reports, and news flow.",
    visual: "narrative",
  },
  {
    title: "Tone Shifts",
    description: "Detect changes in management sentiment and analyst positioning over time.",
    visual: "tone",
  },
  {
    title: "Expectation Gaps",
    description: "Identify disconnects between market pricing and fundamental developments.",
    visual: "gap",
  },
  {
    title: "Macro Themes",
    description: "Connect sector-level developments to broader economic and policy themes.",
    visual: "macro",
  },
]

function NarrativeVisual() {
  return (
    <div className="flex flex-col gap-3">
      {["AI Infrastructure", "Supply Chain Risk", "Margin Pressure"].map((theme, i) => (
        <div key={theme} className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="flex-1 text-xs text-foreground">{theme}</span>
          <div 
            className="h-1.5 rounded-full bg-primary/30" 
            style={{ width: `${80 - i * 20}%` }}
          >
            <div 
              className="h-full rounded-full bg-primary transition-all" 
              style={{ width: `${90 - i * 15}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function ToneVisual() {
  const dataPoints = [
    { icon: TrendingUp, label: "Q1", sentiment: "positive" },
    { icon: Minus, label: "Q2", sentiment: "neutral" },
    { icon: TrendingDown, label: "Q3", sentiment: "negative" },
    { icon: TrendingUp, label: "Q4", sentiment: "positive" },
  ]
  
  return (
    <div className="flex items-end justify-between gap-2">
      {dataPoints.map((point, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <point.icon className={`h-4 w-4 ${
            point.sentiment === "positive" ? "text-emerald-400" :
            point.sentiment === "negative" ? "text-red-400" : "text-muted-foreground"
          }`} />
          <span className="font-mono text-xs text-muted-foreground">{point.label}</span>
        </div>
      ))}
    </div>
  )
}

function GapVisual() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <div className="font-mono text-xs text-muted-foreground mb-1">Market</div>
        <div className="h-6 rounded-sm bg-primary/20 flex items-center px-2">
          <span className="font-mono text-xs text-primary">$142</span>
        </div>
      </div>
      <Activity className="h-5 w-5 text-accent shrink-0" />
      <div className="flex-1">
        <div className="font-mono text-xs text-muted-foreground mb-1">Thesis</div>
        <div className="h-6 rounded-sm bg-accent/20 flex items-center px-2">
          <span className="font-mono text-xs text-accent">$168</span>
        </div>
      </div>
    </div>
  )
}

function MacroVisual() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {["Rates", "USD", "Oil", "VIX"].map((item, i) => (
        <div key={item} className="flex items-center gap-2 rounded-sm border border-border bg-secondary/30 px-2 py-1">
          <div className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? "bg-emerald-400" : "bg-red-400"}`} />
          <span className="font-mono text-xs text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
  )
}

export function NarrativeSection() {
  return (
    <section className="relative border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
            <TrendingUp className="h-3.5 w-3.5" />
            Narrative Intelligence
          </div>
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Understand the stories moving markets
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Go beyond data points to understand how narratives evolve, sentiment shifts, 
            and where expectations diverge from reality.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {narrativeCapabilities.map((capability) => (
            <div 
              key={capability.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30"
            >
              <h3 className="font-serif text-lg text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
              
              {/* Visual representation */}
              <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
                {capability.visual === "narrative" && <NarrativeVisual />}
                {capability.visual === "tone" && <ToneVisual />}
                {capability.visual === "gap" && <GapVisual />}
                {capability.visual === "macro" && <MacroVisual />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
