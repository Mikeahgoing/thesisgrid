import Link from "next/link"
import { LogoAlt } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Link href="/" className="flex items-center">
              <LogoAlt />
            </Link>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              AI-native research infrastructure for institutional investors.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/careers" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ThesisGrid Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
