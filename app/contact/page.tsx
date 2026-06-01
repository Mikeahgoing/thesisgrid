"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { 
  Mail,
  Building2,
  Shield,
  Server,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Zap
} from "lucide-react"

const inquiryTypes = [
  { value: "demo", label: "Request a Demo" },
  { value: "enterprise", label: "Enterprise Inquiry" },
  { value: "private", label: "Private Deployment" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
]

const firmTypes = [
  { value: "hedge-fund", label: "Hedge Fund" },
  { value: "asset-manager", label: "Asset Manager" },
  { value: "investment-bank", label: "Investment Bank" },
  { value: "pe-vc", label: "PE / VC Firm" },
  { value: "research-firm", label: "Research Firm" },
  { value: "other", label: "Other" },
]

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work with specialists who understand institutional needs.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "From demo to deployment in weeks, not months.",
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
                <Mail className="h-3.5 w-3.5" />
                Contact
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Get in touch
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Ready to transform your research infrastructure? Let&apos;s discuss how 
                ThesisGrid can work for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-secondary/30 border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <h2 className="font-serif text-2xl tracking-tight text-foreground">
                  Why ThesisGrid?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Join leading institutional investors who are transforming their research 
                  capabilities with AI-native infrastructure.
                </p>

                <div className="mt-8 space-y-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Inquiry types */}
                <div className="mt-12 rounded-lg border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    Inquiry Types
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Enterprise Inquiry</span>
                        <p className="text-xs text-muted-foreground">For organizations ready to deploy</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Server className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Private Deployment</span>
                        <p className="text-xs text-muted-foreground">On-premises or private cloud options</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Security Review</span>
                        <p className="text-xs text-muted-foreground">Compliance and security documentation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">
                        Thank you for your inquiry
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        We&apos;ll be in touch within 24 hours to discuss your needs.
                      </p>
                      <Button 
                        className="mt-6" 
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit another inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <h2 className="text-xl font-semibold text-foreground">
                        Request Information
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Fill out the form below and we&apos;ll get back to you shortly.
                      </p>

                      <FieldGroup className="mt-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field>
                            <FieldLabel>First Name</FieldLabel>
                            <Input 
                              required
                              placeholder="John"
                            />
                          </Field>
                          <Field>
                            <FieldLabel>Last Name</FieldLabel>
                            <Input 
                              required
                              placeholder="Smith"
                            />
                          </Field>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field>
                            <FieldLabel>Work Email</FieldLabel>
                            <Input 
                              type="email"
                              required
                              placeholder="john@firm.com"
                            />
                          </Field>
                          <Field>
                            <FieldLabel>Phone (Optional)</FieldLabel>
                            <Input 
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                            />
                          </Field>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field>
                            <FieldLabel>Company</FieldLabel>
                            <Input 
                              required
                              placeholder="Firm Name"
                            />
                          </Field>
                          <Field>
                            <FieldLabel>Title</FieldLabel>
                            <Input 
                              required
                              placeholder="Portfolio Manager"
                            />
                          </Field>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field>
                            <FieldLabel>Firm Type</FieldLabel>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select firm type" />
                              </SelectTrigger>
                              <SelectContent>
                                {firmTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel>Inquiry Type</FieldLabel>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                {inquiryTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel>Message (Optional)</FieldLabel>
                          <Textarea 
                            placeholder="Tell us about your research workflow and what you're looking to improve..."
                            rows={4}
                          />
                        </Field>
                      </FieldGroup>

                      <div className="mt-8 flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          By submitting, you agree to our <a href="/privacy" className="text-primary hover:underline">privacy policy</a>.
                        </p>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Options */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Other Ways to Connect
              </h2>
              <p className="mt-4 text-muted-foreground">
                Prefer a different channel? We&apos;re here to help however works best for you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "General Inquiries",
                  email: "info@thesisgridcapital.com",
                  description: "For general questions about ThesisGrid",
                },
                {
                  title: "Enterprise Sales",
                  email: "enterprise@thesisgridcapital.com",
                  description: "For enterprise deployment discussions",
                },
                {
                  title: "Technical Support",
                  email: "support@thesisgridcapital.com",
                  description: "For existing customers needing support",
                },
              ].map((contact) => (
                <div 
                  key={contact.title}
                  className="rounded-lg border border-border bg-card p-5 text-center"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {contact.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary">
                    {contact.email}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
