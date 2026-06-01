import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | ThesisGrid Capital",
  description: "Privacy Policy for ThesisGrid Capital - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary mb-4">Legal</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ThesisGrid Capital (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-native investment research platform and related services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Account registration information (name, email address, company name, job title)</li>
                <li>Payment and billing information</li>
                <li>Communications with us (support requests, feedback)</li>
                <li>Content you upload or create within the platform (research notes, investment theses, memos)</li>
                <li>Integration credentials for connected data sources</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (features accessed, time spent, actions taken)</li>
                <li>Log data (access times, pages viewed, referring URLs)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">2.3 Information from Third Parties</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Information from identity verification services</li>
                <li>Data from integrated third-party platforms you authorize</li>
                <li>Information from business partners and resellers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Personalizing your experience and delivering relevant content</li>
                <li>Communicating with you about updates, security alerts, and support</li>
                <li>Analyzing usage patterns to enhance platform performance</li>
                <li>Detecting, preventing, and addressing technical issues or fraud</li>
                <li>Complying with legal obligations and enforcing our terms</li>
                <li>Training and improving our AI models (with appropriate anonymization)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.1 Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We engage third-party companies to perform services on our behalf, including cloud hosting, payment processing, analytics, and customer support. These providers have access only to information necessary to perform their functions and are contractually obligated to protect your data.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.2 Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose your information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">4.3 Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and the choices you may have.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
                <li>SOC 2 Type II compliance</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider the nature of the data, potential risks, and applicable legal requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Portability:</strong> Request transfer of your data to another service</li>
                <li><strong className="text-foreground">Objection:</strong> Object to certain processing of your data</li>
                <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@thesisgrid.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by relevant authorities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and deliver relevant content. You can control cookie preferences through your browser settings. Essential cookies required for platform functionality cannot be disabled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card border border-border rounded-md p-6">
                <p className="text-foreground font-medium mb-2">ThesisGrid Capital</p>
                <p className="text-muted-foreground">Email: privacy@thesisgrid.com</p>
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
