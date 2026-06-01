import { Sparkles, ArrowRight, Check } from "lucide-react"

const transformations = [
  {
    from: "Fragmented documents",
    to: "Unified knowledge graph",
  },
  {
    from: "Manual extraction",
    to: "Automated structuring",
  },
  {
    from: "Siloed research",
    to: "Collaborative workflows",
  },
  {
    from: "Lost institutional memory",
    to: "Compounding intelligence",
  },
  {
    from: "Unclear decision logic",
    to: "Traceable thesis tracking",
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            The Solution
          </div>
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            From fragmented information to structured research intelligence
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            ThesisGrid transforms how institutional investors process, structure, and act on 
            financial information through AI-native infrastructure.
          </p>
        </div>

        {/* Transformation grid */}
        <div className="mt-16 grid gap-3 lg:gap-4">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 lg:p-5"
            >
              {/* From */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground lg:text-base">
                    {item.from}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>

              {/* To */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground lg:text-base">
                    {item.to}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3">
            <span className="font-mono text-xs text-primary">RESULT</span>
            <span className="text-sm font-medium text-foreground">
              Research that compounds, decisions that are traceable
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
