import { EmailHeader } from "@/components/email-header"

export default function EmailHeaderPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Email Header Templates
          </h1>
          <p className="text-muted-foreground">
            Copy the HTML code below or right-click to save the image for your email campaigns.
          </p>
        </div>
        
        {/* Dark Version */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-foreground mb-1">Dark Version</h2>
            <p className="text-sm text-muted-foreground">Recommended for most email campaigns</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <EmailHeader variant="dark" />
          </div>
        </section>
        
        {/* Light Version */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-foreground mb-1">Light Version</h2>
            <p className="text-sm text-muted-foreground">For emails with light backgrounds</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <EmailHeader variant="light" />
          </div>
        </section>
        
        {/* With Custom Tagline */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-foreground mb-1">Newsletter Version</h2>
            <p className="text-sm text-muted-foreground">With custom tagline</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <EmailHeader variant="dark" tagline="Research Intelligence Newsletter" />
          </div>
        </section>
        
        {/* Usage Instructions */}
        <section className="space-y-4 p-6 rounded-lg bg-card border border-border">
          <h2 className="text-lg font-medium text-foreground">How to Use</h2>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Right-click on the header image above and select &quot;Save Image As&quot;</li>
            <li>Upload the image to your email service provider</li>
            <li>Set the image width to 600px for optimal display</li>
            <li>Alternatively, use the static image at <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">/images/email-header.jpg</code></li>
          </ol>
        </section>
      </div>
    </div>
  )
}
