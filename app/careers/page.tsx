"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { 
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Zap,
  Brain,
  ChevronDown,
  ChevronUp,
  Upload,
  Code,
  TrendingUp,
  BarChart3,
  LineChart,
  Handshake,
  Megaphone,
  Lightbulb
} from "lucide-react"

// Job positions data
const jobPositions = [
  {
    id: "quantitative-analyst-intern",
    title: "Quantitative Analyst Intern",
    location: "New York, NY",
    type: "Internship",
    department: "Research & Analytics",
    icon: LineChart,
    shortDescription: "Join our research team to develop quantitative frameworks and signal generation systems for institutional investors.",
    about: `ThesisGrid Capital is an AI-native investment research and decision infrastructure company built for institutional investors. We focus on combining large language models, retrieval systems, financial semantic understanding, knowledge infrastructure, narrative intelligence, and research workflow systems to transform massive amounts of unstructured financial information into structured, traceable, and actionable investment intelligence.`,
    summary: `We are looking for a highly analytical and research-driven Quantitative Analyst Intern to join ThesisGrid Capital. You will work closely with researchers, engineers, product teams, and investment professionals to develop quantitative frameworks, research pipelines, and signal generation systems.`,
    responsibilities: [
      "Conduct quantitative research on financial markets, macroeconomic trends, and investment themes",
      "Analyze structured and unstructured financial data including earnings calls, SEC filings, and market news",
      "Build and maintain research pipelines and analytical frameworks for signal generation",
      "Apply statistical methods, machine learning, and NLP techniques to analyze market sentiment",
      "Prepare research summaries and quantitative reports for analysts and portfolio managers",
      "Utilize Python, SQL, and data science libraries for quantitative analysis and modeling"
    ],
    qualifications: [
      "Bachelor's or Master's degree in Quantitative Finance, Data Science, Statistics, Economics, Computer Science, or related field",
      "Strong knowledge of data analysis, statistics, and financial research methodologies",
      "Proficiency in Python, SQL, Excel, and data analysis libraries (pandas, NumPy, scikit-learn)",
      "Familiarity with financial markets, investment research, and quantitative modeling",
      "Experience or interest in machine learning, NLP, or financial text analysis is a plus",
      "Excellent analytical thinking and problem-solving skills"
    ],
    benefits: [
      "Work at the intersection of AI innovation and institutional finance",
      "Gain practical experience with cutting-edge AI/ML technologies",
      "Collaborate with industry experts and experienced professionals",
      "Competitive compensation and growth opportunities"
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    location: "New York, NY",
    type: "Full-time",
    department: "Data & Analytics",
    icon: BarChart3,
    shortDescription: "Transform complex financial data into actionable insights that drive investment decisions.",
    about: `ThesisGrid Capital is an AI-native investment research and decision infrastructure company built for institutional investors. We leverage advanced analytics and AI to transform financial data into actionable intelligence.`,
    summary: `We are seeking a detail-oriented Data Analyst to join our team. You will be responsible for collecting, processing, and analyzing large datasets to support our AI-powered investment research platform.`,
    responsibilities: [
      "Collect, clean, and validate financial datasets from multiple sources",
      "Develop and maintain data pipelines for automated data processing",
      "Create dashboards and visualizations to communicate insights to stakeholders",
      "Perform statistical analysis to identify trends and patterns in financial data",
      "Collaborate with engineering teams to improve data infrastructure",
      "Document data processes and maintain data quality standards"
    ],
    qualifications: [
      "Bachelor's degree in Statistics, Mathematics, Economics, Computer Science, or related field",
      "2+ years of experience in data analysis or related role",
      "Proficiency in SQL, Python, and data visualization tools (Tableau, Power BI)",
      "Strong understanding of statistical methods and data analysis techniques",
      "Experience with financial data and markets is preferred",
      "Excellent attention to detail and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements"
    ]
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    location: "New York, NY",
    type: "Full-time",
    department: "Engineering",
    icon: Brain,
    shortDescription: "Build and deploy production ML systems that power our AI-driven investment research platform.",
    about: `ThesisGrid Capital is building the next-generation AI operating system for institutional research teams. Our engineering team is at the forefront of applying machine learning to financial intelligence.`,
    summary: `We are looking for an experienced Machine Learning Engineer to design, build, and deploy production ML systems. You will work on cutting-edge NLP, LLM, and retrieval systems that power our investment research platform.`,
    responsibilities: [
      "Design and implement production-grade ML pipelines and infrastructure",
      "Develop and fine-tune NLP models for financial text understanding",
      "Build retrieval and ranking systems for investment research",
      "Optimize model performance, latency, and scalability",
      "Collaborate with research scientists to productionize experimental models",
      "Implement MLOps best practices including monitoring, testing, and CI/CD"
    ],
    qualifications: [
      "Master's or Ph.D. in Computer Science, Machine Learning, or related field",
      "3+ years of experience building production ML systems",
      "Strong proficiency in Python and ML frameworks (PyTorch, TensorFlow)",
      "Experience with NLP, LLMs, and transformer architectures",
      "Familiarity with cloud platforms (AWS, GCP) and containerization (Docker, Kubernetes)",
      "Experience with vector databases and retrieval systems is a plus"
    ],
    benefits: [
      "Competitive compensation with significant equity",
      "Work on cutting-edge AI/ML technologies",
      "Comprehensive benefits package",
      "Professional development opportunities"
    ]
  },
  {
    id: "software-development-engineer",
    title: "Software Development Engineer",
    location: "New York, NY",
    type: "Full-time",
    department: "Engineering",
    icon: Code,
    shortDescription: "Build scalable, high-performance software systems that power institutional investment research.",
    about: `ThesisGrid Capital is an AI-native investment research platform. Our engineering team builds robust, scalable systems that process and analyze vast amounts of financial data in real-time.`,
    summary: `We are seeking a talented Software Development Engineer to join our engineering team. You will design and build core platform infrastructure, APIs, and user-facing applications that serve institutional investors.`,
    responsibilities: [
      "Design and implement scalable backend services and APIs",
      "Build responsive, performant frontend applications",
      "Develop data processing pipelines for financial information",
      "Ensure code quality through testing, code reviews, and best practices",
      "Collaborate with product and design teams to deliver exceptional user experiences",
      "Participate in system architecture decisions and technical planning"
    ],
    qualifications: [
      "Bachelor's or Master's degree in Computer Science or related field",
      "3+ years of professional software development experience",
      "Strong proficiency in Python, TypeScript/JavaScript, and SQL",
      "Experience with modern web frameworks (React, Next.js) and backend technologies",
      "Familiarity with cloud services (AWS, GCP) and DevOps practices",
      "Strong problem-solving skills and attention to detail"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health benefits",
      "Flexible work environment",
      "Learning and development budget"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    location: "New York, NY",
    type: "Full-time",
    department: "Research & Analytics",
    icon: TrendingUp,
    shortDescription: "Apply advanced analytics and machine learning to extract insights from complex financial datasets.",
    about: `ThesisGrid Capital combines AI, data science, and financial expertise to build next-generation investment research tools. Our data science team drives innovation in financial intelligence.`,
    summary: `We are looking for a Data Scientist to join our research team. You will apply advanced statistical and machine learning techniques to solve complex problems in investment research and financial analysis.`,
    responsibilities: [
      "Develop predictive models and algorithms for financial analysis",
      "Conduct research on novel approaches to financial text analysis and NLP",
      "Design experiments and A/B tests to validate hypotheses",
      "Build feature engineering pipelines for ML models",
      "Collaborate with engineers to deploy models to production",
      "Present findings and insights to technical and non-technical stakeholders"
    ],
    qualifications: [
      "Master's or Ph.D. in Statistics, Computer Science, Mathematics, or related quantitative field",
      "3+ years of experience in data science or quantitative research",
      "Strong foundation in statistics, machine learning, and experimental design",
      "Proficiency in Python and data science tools (scikit-learn, pandas, NumPy)",
      "Experience with NLP and text analysis is highly preferred",
      "Strong communication and presentation skills"
    ],
    benefits: [
      "Competitive compensation package",
      "Opportunity to work on impactful research",
      "Collaborative and intellectually stimulating environment",
      "Comprehensive benefits and perks"
    ]
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    location: "New York, NY",
    type: "Full-time",
    department: "Product & Strategy",
    icon: Lightbulb,
    shortDescription: "Bridge the gap between business needs and technical solutions to drive product strategy.",
    about: `ThesisGrid Capital is transforming how institutional investors conduct research. Our product team works closely with clients to understand their needs and deliver solutions that create real value.`,
    summary: `We are seeking a Business Analyst to join our product team. You will work with clients, product managers, and engineers to define requirements, analyze workflows, and drive product improvements.`,
    responsibilities: [
      "Gather and document business requirements from stakeholders and clients",
      "Analyze existing workflows and identify opportunities for improvement",
      "Create detailed specifications and user stories for development teams",
      "Conduct competitive analysis and market research",
      "Support product launches and gather user feedback",
      "Track KPIs and create reports on product performance"
    ],
    qualifications: [
      "Bachelor's degree in Business, Finance, Economics, or related field",
      "2+ years of experience as a Business Analyst or similar role",
      "Strong analytical and problem-solving skills",
      "Excellent written and verbal communication abilities",
      "Experience with agile methodologies and product development",
      "Background in financial services or fintech is a plus"
    ],
    benefits: [
      "Competitive salary and bonus",
      "Health, dental, and vision coverage",
      "Professional growth opportunities",
      "Collaborative team environment"
    ]
  },
  {
    id: "sales",
    title: "Sales Representative",
    location: "New York, NY",
    type: "Full-time",
    department: "Sales",
    icon: Megaphone,
    shortDescription: "Drive revenue growth by connecting institutional investors with our AI-powered research platform.",
    about: `ThesisGrid Capital serves institutional investors including hedge funds, asset managers, and investment banks. Our sales team builds relationships and drives adoption of our innovative platform.`,
    summary: `We are looking for a driven Sales Representative to join our growing sales team. You will be responsible for prospecting, qualifying leads, and closing deals with institutional clients.`,
    responsibilities: [
      "Identify and qualify potential institutional clients",
      "Conduct product demonstrations and presentations",
      "Manage the full sales cycle from prospecting to closing",
      "Build and maintain strong client relationships",
      "Collaborate with product and marketing teams on go-to-market strategies",
      "Meet and exceed quarterly and annual sales targets"
    ],
    qualifications: [
      "Bachelor's degree in Business, Finance, or related field",
      "2+ years of B2B sales experience, preferably in fintech or financial services",
      "Proven track record of meeting or exceeding sales targets",
      "Strong presentation and negotiation skills",
      "Understanding of institutional investment processes",
      "Self-motivated with excellent time management"
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Uncapped earning potential",
      "Comprehensive benefits package",
      "Career advancement opportunities"
    ]
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Business Development",
    icon: Handshake,
    shortDescription: "Identify strategic partnerships and new market opportunities to accelerate company growth.",
    about: `ThesisGrid Capital is rapidly expanding our presence in institutional investment research. Our business development team identifies strategic opportunities to grow our market reach and impact.`,
    summary: `We are seeking a Business Development Manager to identify and pursue strategic partnerships, new market opportunities, and growth initiatives. You will play a key role in shaping our go-to-market strategy.`,
    responsibilities: [
      "Identify and evaluate strategic partnership opportunities",
      "Develop and execute business development strategies",
      "Build relationships with potential partners, data providers, and channel partners",
      "Negotiate and structure partnership agreements",
      "Collaborate with product teams on market expansion opportunities",
      "Track market trends and competitive landscape"
    ],
    qualifications: [
      "Bachelor's degree in Business, Finance, or related field; MBA preferred",
      "5+ years of experience in business development or strategic partnerships",
      "Strong network in financial services or fintech industries",
      "Excellent negotiation and relationship-building skills",
      "Strategic thinking with ability to execute tactically",
      "Experience with institutional investment or data/analytics is a plus"
    ],
    benefits: [
      "Competitive compensation with significant equity",
      "Opportunity to shape company growth strategy",
      "Comprehensive benefits package",
      "Collaborative and entrepreneurial culture"
    ]
  },
  {
    id: "consulting",
    title: "Implementation Consultant",
    location: "New York, NY",
    type: "Full-time",
    department: "Client Services",
    icon: Users,
    shortDescription: "Guide institutional clients through platform implementation and drive successful adoption.",
    about: `ThesisGrid Capital partners with institutional investors to transform their research workflows. Our consulting team ensures clients achieve maximum value from our platform.`,
    summary: `We are looking for an Implementation Consultant to join our client services team. You will work directly with institutional clients to understand their needs, configure our platform, and ensure successful adoption.`,
    responsibilities: [
      "Lead client onboarding and implementation projects",
      "Conduct needs assessments and develop implementation plans",
      "Configure platform features to meet client requirements",
      "Provide training and ongoing support to client teams",
      "Gather client feedback and relay to product teams",
      "Build long-term relationships to drive client success and retention"
    ],
    qualifications: [
      "Bachelor's degree in Business, Finance, or related field",
      "3+ years of experience in consulting, implementation, or client success",
      "Strong project management and organizational skills",
      "Excellent communication and presentation abilities",
      "Technical aptitude and ability to learn new systems quickly",
      "Experience in financial services or fintech is preferred"
    ],
    benefits: [
      "Competitive salary and bonus",
      "Comprehensive health benefits",
      "Professional development opportunities",
      "Travel opportunities to client sites"
    ]
  }
]

const workAuthorizationOptions = [
  { value: "us-citizen", label: "U.S. Citizen" },
  { value: "permanent-resident", label: "Permanent Resident (Green Card)" },
  { value: "h1b", label: "H-1B Visa" },
  { value: "f1-opt", label: "F-1 OPT/CPT" },
  { value: "other-visa", label: "Other Work Visa" },
  { value: "require-sponsorship", label: "Require Sponsorship" },
]

const educationLevels = [
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "Ph.D." },
  { value: "other", label: "Other" },
]

const referralSources = [
  { value: "linkedin", label: "LinkedIn" },
  { value: "indeed", label: "Indeed" },
  { value: "glassdoor", label: "Glassdoor" },
  { value: "company-website", label: "Company Website" },
  { value: "referral", label: "Employee Referral" },
  { value: "university", label: "University Career Services" },
  { value: "other", label: "Other" },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobPositions[0] | null>(null)
  const [showApplication, setShowApplication] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(["responsibilities", "qualifications"])
  const [resumeFileName, setResumeFileName] = useState<string>("")
  const [coverLetterFileName, setCoverLetterFileName] = useState<string>("")

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFileName(file.name)
    }
  }

  const handleCoverLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverLetterFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetApplication = () => {
    setIsSubmitted(false)
    setShowApplication(false)
    setResumeFileName("")
    setCoverLetterFileName("")
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
                <Briefcase className="h-3.5 w-3.5" />
                Careers
              </div>
              <h1 className="mt-6 font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Join Our Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Build the future of AI-powered investment research. We&apos;re looking for 
                exceptional talent to help transform how institutional investors work.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Brain,
                  title: "AI Innovation",
                  description: "Work with cutting-edge AI/ML technologies in finance"
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Collaborate with industry veterans and researchers"
                },
                {
                  icon: Zap,
                  title: "Fast Growth",
                  description: "Accelerate your career in a high-growth environment"
                },
                {
                  icon: Building2,
                  title: "NYC Based",
                  description: "Work from our New York City headquarters"
                }
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings or Job Detail */}
        {!selectedJob ? (
          // Job Listings
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl tracking-tight text-foreground">Open Positions</h2>
                <p className="mt-4 text-muted-foreground">
                  Explore our current opportunities and find your next career move.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {jobPositions.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="group flex flex-col items-start rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                      <job.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {job.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          // Job Detail
          <section className="py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedJob(null)
                  resetApplication()
                }}
                className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Positions
              </button>

              {/* Job Header */}
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-serif text-2xl tracking-tight text-foreground lg:text-3xl">
                      {selectedJob.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {selectedJob.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {selectedJob.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-4 w-4" />
                        {selectedJob.department}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={() => {
                      setShowApplication(true)
                      setTimeout(() => {
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* About Company */}
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="font-semibold text-foreground">About ThesisGrid Capital</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {selectedJob.about}
                  </p>
                </div>

                {/* Role Summary */}
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="font-semibold text-foreground">Role Summary</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {selectedJob.summary}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mt-8 border-t border-border pt-8">
                  <button
                    onClick={() => toggleSection("responsibilities")}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-foreground">Key Responsibilities</h3>
                    {expandedSections.includes("responsibilities") ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedSections.includes("responsibilities") && (
                    <ul className="mt-4 space-y-2">
                      {selectedJob.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Qualifications */}
                <div className="mt-8 border-t border-border pt-8">
                  <button
                    onClick={() => toggleSection("qualifications")}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-foreground">Qualifications</h3>
                    {expandedSections.includes("qualifications") ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedSections.includes("qualifications") && (
                    <ul className="mt-4 space-y-2">
                      {selectedJob.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Benefits */}
                <div className="mt-8 border-t border-border pt-8">
                  <button
                    onClick={() => toggleSection("benefits")}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-foreground">Why Join Us?</h3>
                    {expandedSections.includes("benefits") ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedSections.includes("benefits") && (
                    <ul className="mt-4 space-y-2">
                      {selectedJob.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Apply CTA */}
                <div className="mt-8 flex items-center justify-center border-t border-border pt-8">
                  <Button 
                    size="lg" 
                    onClick={() => {
                      setShowApplication(true)
                      setTimeout(() => {
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                  >
                    Apply for this Position
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Application Form */}
        {showApplication && selectedJob && (
          <section id="application-form" className="border-t border-border bg-secondary/30 py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-foreground">
                      Application Submitted Successfully
                    </h3>
                    <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                      Thank you for your interest in the <span className="font-medium text-foreground">{selectedJob.title}</span> position 
                      at ThesisGrid Capital. We have received your application and our hiring team will review it carefully.
                    </p>
                    <div className="mt-6 rounded-lg border border-border bg-secondary/50 p-4">
                      <h4 className="font-medium text-foreground">What happens next?</h4>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground text-left">
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">1.</span>
                          Our team will review your application within 5-7 business days.
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">2.</span>
                          If your qualifications match our requirements, we will contact you to schedule an initial phone screen.
                        </li>
                        <li className="flex gap-2">
                          <span className="font-medium text-primary">3.</span>
                          Please check your email (including spam folder) for updates on your application status.
                        </li>
                      </ul>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                      If you have any questions, please contact us at{" "}
                      <a href="mailto:careers@thesisgrid.com" className="text-primary hover:underline">
                        careers@thesisgrid.com
                      </a>
                    </p>
                    <Button 
                      className="mt-6" 
                      variant="outline"
                      onClick={() => {
                        resetApplication()
                        setSelectedJob(null)
                      }}
                    >
                      Browse Other Positions
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground">
                        Apply for {selectedJob.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Please complete all required fields. Fields marked with * are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information */}
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Personal Information</h4>
                        <FieldGroup>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
                              <Input id="firstName" name="firstName" required placeholder="John" />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
                              <Input id="lastName" name="lastName" required placeholder="Doe" />
                            </Field>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                              <Input id="email" name="email" type="email" required placeholder="john.doe@email.com" />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                              <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
                            </Field>
                          </div>
                          <Field>
                            <FieldLabel htmlFor="address">Street Address *</FieldLabel>
                            <Input id="address" name="address" required placeholder="123 Main Street, Apt 4B" />
                          </Field>
                          <div className="grid gap-4 sm:grid-cols-3">
                            <Field>
                              <FieldLabel htmlFor="city">City *</FieldLabel>
                              <Input id="city" name="city" required placeholder="New York" />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="state">State *</FieldLabel>
                              <Input id="state" name="state" required placeholder="NY" />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="zip">ZIP Code *</FieldLabel>
                              <Input id="zip" name="zip" required placeholder="10001" />
                            </Field>
                          </div>
                          <Field>
                            <FieldLabel htmlFor="linkedin">LinkedIn Profile (Optional)</FieldLabel>
                            <Input id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/johndoe" />
                          </Field>
                        </FieldGroup>
                      </div>

                      {/* Work Authorization */}
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Work Authorization</h4>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="workAuth">Work Authorization Status *</FieldLabel>
                            <Select name="workAuth" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your work authorization status" />
                              </SelectTrigger>
                              <SelectContent>
                                {workAuthorizationOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="sponsorship">
                              Will you now or in the future require sponsorship for employment visa status? *
                            </FieldLabel>
                            <Select name="sponsorship" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                        </FieldGroup>
                      </div>

                      {/* Education */}
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Education</h4>
                        <FieldGroup>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="education">Highest Education Level *</FieldLabel>
                              <Select name="education" required>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select education level" />
                                </SelectTrigger>
                                <SelectContent>
                                  {educationLevels.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="fieldOfStudy">Field of Study *</FieldLabel>
                              <Input id="fieldOfStudy" name="fieldOfStudy" required placeholder="Computer Science" />
                            </Field>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="university">University/College *</FieldLabel>
                              <Input id="university" name="university" required placeholder="Columbia University" />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="graduationDate">Graduation Date *</FieldLabel>
                              <Input id="graduationDate" name="graduationDate" type="month" required />
                            </Field>
                          </div>
                          <Field>
                            <FieldLabel htmlFor="gpa">GPA (Optional)</FieldLabel>
                            <Input id="gpa" name="gpa" placeholder="3.8" />
                          </Field>
                        </FieldGroup>
                      </div>

                      {/* Documents */}
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Documents</h4>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="resume">Resume/CV * (PDF, DOC, DOCX - Max 5MB)</FieldLabel>
                            <div className="relative">
                              <Input
                                id="resume"
                                name="resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={handleResumeChange}
                                className="hidden"
                              />
                              <Label
                                htmlFor="resume"
                                className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-border bg-secondary/30 px-4 py-8 text-sm text-muted-foreground hover:border-primary/50 hover:bg-secondary/50 transition-colors"
                              >
                                <Upload className="h-5 w-5" />
                                {resumeFileName || "Click to upload your resume"}
                              </Label>
                            </div>
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="coverLetter">Cover Letter (Optional - PDF, DOC, DOCX - Max 5MB)</FieldLabel>
                            <div className="relative">
                              <Input
                                id="coverLetter"
                                name="coverLetter"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleCoverLetterChange}
                                className="hidden"
                              />
                              <Label
                                htmlFor="coverLetter"
                                className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-border bg-secondary/30 px-4 py-8 text-sm text-muted-foreground hover:border-primary/50 hover:bg-secondary/50 transition-colors"
                              >
                                <Upload className="h-5 w-5" />
                                {coverLetterFileName || "Click to upload your cover letter"}
                              </Label>
                            </div>
                          </Field>
                        </FieldGroup>
                      </div>

                      {/* Additional Questions */}
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Additional Information</h4>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="referralSource">How did you hear about this position? *</FieldLabel>
                            <Select name="referralSource" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a source" />
                              </SelectTrigger>
                              <SelectContent>
                                {referralSources.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="additionalInfo">
                              Is there anything else you would like us to know? (Optional)
                            </FieldLabel>
                            <Textarea
                              id="additionalInfo"
                              name="additionalInfo"
                              placeholder="Tell us about relevant projects, skills, or why you're interested in this role..."
                              rows={4}
                            />
                          </Field>
                        </FieldGroup>
                      </div>

                      {/* EEO Statement */}
                      <div className="rounded-lg border border-border bg-secondary/30 p-4">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Equal Employment Opportunity:</strong>{" "}
                          ThesisGrid Capital is an equal opportunity employer. We celebrate diversity and are 
                          committed to creating an inclusive environment for all employees. All qualified 
                          applicants will receive consideration for employment without regard to race, color, 
                          religion, sex, sexual orientation, gender identity, national origin, disability, 
                          veteran status, or any other protected characteristic.
                        </p>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Checkbox id="accuracy" name="accuracy" required className="mt-0.5" />
                          <Label htmlFor="accuracy" className="text-sm text-muted-foreground leading-relaxed">
                            I certify that the information provided in this application is true and complete 
                            to the best of my knowledge. I understand that any false statement or omission 
                            may disqualify me from employment consideration. *
                          </Label>
                        </div>
                        <div className="flex items-start gap-3">
                          <Checkbox id="privacy" name="privacy" required className="mt-0.5" />
                          <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                            I have read and agree to the{" "}
                            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            I consent to the collection and processing of my personal data for recruitment purposes. *
                          </Label>
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-border">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowApplication(false)}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
