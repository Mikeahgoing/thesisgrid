import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | ThesisGrid Capital",
  description: "Terms of Service for ThesisGrid Capital - Review our terms and conditions for using our platform.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary mb-4">Legal</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and ThesisGrid Capital Inc. (&quot;ThesisGrid,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the ThesisGrid platform, including our website, applications, APIs, and related services (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ThesisGrid provides an AI-native investment research infrastructure platform designed for institutional investors. Our Services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Research Copilot for automated analysis and summarization</li>
                <li>Narrative Engine for market narrative tracking and sentiment analysis</li>
                <li>Thesis Workspace for investment thesis management</li>
                <li>Investment Memo Generator for automated documentation</li>
                <li>Institutional Knowledge Hub for research organization and retrieval</li>
                <li>API access for programmatic integration</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Eligibility and Account Registration</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">3.1 Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Services are intended for use by institutional investors, financial professionals, and their authorized representatives. By using the Services, you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">3.2 Account Registration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">3.3 Enterprise Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                For enterprise subscriptions, the organization&apos;s administrator is responsible for managing user access and ensuring compliance with these Terms by all authorized users within the organization.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Subscription and Payment</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.1 Subscription Plans</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to the Services requires a paid subscription. Subscription plans, pricing, and features are described on our website and may be modified from time to time. We will provide reasonable notice of any pricing changes.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.2 Payment Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, as selected during signup. All fees are non-refundable except as expressly stated in these Terms or required by law. We may suspend access to the Services for overdue payments.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.3 Taxes</h3>
              <p className="text-muted-foreground leading-relaxed">
                All fees are exclusive of applicable taxes. You are responsible for paying any taxes associated with your use of the Services, excluding taxes based on ThesisGrid&apos;s income.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to use the Services to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Engage in market manipulation, insider trading, or other prohibited trading activities</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reverse engineer, decompile, or attempt to extract source code from the Services</li>
                <li>Use automated means to access the Services except through our APIs</li>
                <li>Share account credentials or allow unauthorized access to your account</li>
                <li>Use the Services to develop competing products or services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Intellectual Property</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">6.1 ThesisGrid IP</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Services, including all software, algorithms, models, designs, documentation, and content provided by ThesisGrid, are owned by ThesisGrid and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services solely for your internal business purposes during your subscription term.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">6.2 Your Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of all data, content, and materials you upload to the Services (&quot;Your Content&quot;). You grant ThesisGrid a limited license to use Your Content solely to provide and improve the Services. We will not share Your Content with third parties except as necessary to provide the Services or as required by law.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">6.3 Feedback</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you provide suggestions, ideas, or feedback about the Services, you grant ThesisGrid the right to use such feedback without restriction or compensation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each party agrees to maintain the confidentiality of the other party&apos;s confidential information and to use such information only for purposes of performing under these Terms. Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">8. Disclaimers</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">8.1 No Investment Advice</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase text-sm">
                THE SERVICES ARE TOOLS FOR RESEARCH AND ANALYSIS ONLY. THESISGRID DOES NOT PROVIDE INVESTMENT ADVICE, AND NOTHING IN THE SERVICES CONSTITUTES A RECOMMENDATION TO BUY, SELL, OR HOLD ANY SECURITY OR INVESTMENT. YOU ARE SOLELY RESPONSIBLE FOR YOUR INVESTMENT DECISIONS.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">8.2 Service Availability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase text-sm">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">8.3 AI-Generated Content</h3>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                THE SERVICES USE ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING TECHNOLOGIES THAT MAY PRODUCE INACCURATE, INCOMPLETE, OR OUTDATED INFORMATION. YOU SHOULD INDEPENDENTLY VERIFY ALL AI-GENERATED OUTPUTS BEFORE RELYING ON THEM FOR ANY PURPOSE.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THESISGRID AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                IN NO EVENT SHALL THESISGRID&apos;S TOTAL LIABILITY EXCEED THE AMOUNTS PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless ThesisGrid and its affiliates from any claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate these Terms at any time by providing written notice. You may cancel your subscription through your account settings. Upon termination, your access to the Services will be suspended, and we may delete Your Content after a reasonable retention period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ThesisGrid may suspend or terminate your access immediately if you breach these Terms or if required to comply with legal obligations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration administered by JAMS in San Francisco, California, except that either party may seek injunctive relief in court for intellectual property violations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">13. General Provisions</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">13.1 Entire Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any applicable Order Forms, constitute the entire agreement between you and ThesisGrid regarding the Services.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">13.2 Amendments</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may modify these Terms from time to time. Material changes will be communicated to you with reasonable notice. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">13.3 Assignment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not assign these Terms without ThesisGrid&apos;s prior written consent. ThesisGrid may assign these Terms to any successor in interest.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">13.4 Severability</h3>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-card border border-border rounded-md p-6">
                <p className="text-foreground font-medium mb-2">ThesisGrid Capital Inc.</p>
                <p className="text-muted-foreground">Email: legal@thesisgrid.com</p>
                <p className="text-muted-foreground">Address: 388 Market Street, Suite 1300, San Francisco, CA 94111</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
