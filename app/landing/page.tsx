import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance leading-tight">
            Your Premier Real Estate <span className="text-yellow-300">Destination</span>
          </h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl max-w-2xl mx-auto">
            Discover exceptional properties and build your real estate empire with our comprehensive platform and expert guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center max-w-2xl mx-auto">
            <Link href="/listings" className="w-full sm:w-auto">
              <Button className="w-full bg-yellow-300 text-gray-900 hover:bg-yellow-200 font-semibold">
                Browse Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Why Choose EstateHub</h2>
            <p className="text-lg text-muted-foreground">
              Experience real estate the smart way
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Quick & Easy</h3>
              <p className="text-muted-foreground">
                Find your perfect property in minutes with our advanced search and filtering tools.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Trusted & Secure</h3>
              <p className="text-muted-foreground">
                Work with verified agents and access secure transaction management throughout the process.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Expert Support</h3>
              <p className="text-muted-foreground">
                Get personalized assistance from experienced real estate professionals every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Trusted by Thousands</h2>
            <p className="text-lg text-muted-foreground">
              Join our growing community of satisfied clients
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary">2,500+</div>
              <p className="text-sm text-muted-foreground">Active Listings</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary">15,000+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Expert Agents</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-primary">$50B+</div>
              <p className="text-sm text-muted-foreground">Transacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to find your dream property
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Search & Filter</h3>
              <p className="text-muted-foreground">
                Browse our extensive catalog and use filters to narrow down your options.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Connect with Agents</h3>
              <p className="text-muted-foreground">
                Reach out to verified agents and schedule property viewings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Close Your Deal</h3>
              <p className="text-muted-foreground">
                Finalize your purchase with our secure transaction management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-16 sm:py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Explore thousands of properties and find your perfect match today
          </p>
          <Link href="/listings">
            <Button className="bg-primary-foreground text-primary hover:opacity-90">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
