import { FileInput, Cpu, Boxes, Target, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: FileInput,
    label: "Ingest",
    description: "Connect data sources",
    detail: "Earnings, filings, research, news",
  },
  {
    icon: Cpu,
    label: "Extract",
    description: "AI-powered extraction",
    detail: "Events, entities, metrics",
  },
  {
    icon: Boxes,
    label: "Structure",
    description: "Organize knowledge",
    detail: "Graph, index, link",
  },
  {
    icon: Target,
    label: "Thesis",
    description: "Build conviction",
    detail: "Track assumptions, triggers",
  },
  {
    icon: CheckCircle2,
    label: "Decide",
    description: "Action with clarity",
    detail: "Traceable, auditable",
  },
]

export function WorkflowSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            End-to-End Research Workflow
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A complete pipeline from raw data ingestion to decision-ready output, 
            fully integrated and traceable.
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step.label} className="group relative">
                  {/* Step card */}
                  <div className="flex flex-col items-center rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30">
                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Label */}
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      {step.label}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 text-xs text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <div className="mt-4 rounded-sm border border-border bg-secondary/30 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                      {step.detail}
                    </div>
                  </div>

                  {/* Arrow connector - mobile */}
                  {index < steps.length - 1 && (
                    <div className="my-4 flex justify-center lg:hidden">
                      <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { value: "100%", label: "Traceable decisions" },
            { value: "10x", label: "Faster research cycles" },
            { value: "Zero", label: "Knowledge loss" },
            { value: "Full", label: "Team visibility" },
          ].map((metric) => (
            <div 
              key={metric.label}
              className="rounded-lg border border-border bg-card p-4 text-center"
            >
              <div className="font-serif text-2xl text-primary">{metric.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
