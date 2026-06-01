"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { 
  MessageSquare, 
  TrendingUp, 
  Target, 
  FileText, 
  Database,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const modules = [
  {
    id: "copilot",
    icon: MessageSquare,
    name: "Research Copilot",
    description: "AI-powered research assistant that summarizes, extracts, and synthesizes across your entire knowledge base.",
    features: [
      "Earnings call analysis",
      "SEC filing extraction",
      "Cross-document synthesis",
      "Risk identification",
    ],
  },
  {
    id: "narrative",
    icon: TrendingUp,
    name: "Narrative Engine",
    description: "Track market narratives, sentiment shifts, and expectation gaps across sectors and themes.",
    features: [
      "Narrative tracking",
      "Sentiment analysis",
      "Expectation vs reality",
      "Theme evolution",
    ],
  },
  {
    id: "thesis",
    icon: Target,
    name: "Thesis Workspace",
    description: "Structured environment to develop, track, and evolve investment theses with full version control.",
    features: [
      "Assumption tracking",
      "Trigger monitoring",
      "Version history",
      "Team collaboration",
    ],
  },
  {
    id: "memo",
    icon: FileText,
    name: "Memo Generator",
    description: "Automatically draft investment memos with structured bull/bear cases and risk checklists.",
    features: [
      "Auto memo drafting",
      "Bull/bear framework",
      "Risk checklists",
      "Committee ready",
    ],
  },
  {
    id: "knowledge",
    icon: Database,
    name: "Knowledge Hub",
    description: "Institutional memory that captures, indexes, and connects all research across your organization.",
    features: [
      "Knowledge graph",
      "Research indexing",
      "Historical tracking",
      "Team insights",
    ],
  },
]

export function ModulesSection() {
  const [activeModule, setActiveModule] = useState(modules[0])

  return (
    <section className="relative border-t border-border bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Platform Modules
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Five integrated modules that work together to transform your research workflow 
            from end to end.
          </p>
        </div>

        {/* Module selector & detail */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Module list */}
          <div className="flex flex-col gap-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all duration-300",
                  activeModule.id === module.id
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                  activeModule.id === module.id
                    ? "bg-primary/15"
                    : "bg-secondary"
                )}>
                  <module.icon className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    activeModule.id === module.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )} />
                </div>
                <span className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  activeModule.id === module.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}>
                  {module.name}
                </span>
              </button>
            ))}
          </div>

          {/* Module detail */}
          <div className="rounded-lg border border-border bg-card p-6 lg:col-span-2 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <activeModule.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {activeModule.name}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {activeModule.description}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeModule.features.map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/product">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
