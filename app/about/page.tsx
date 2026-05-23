import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-foreground">About EstateHub</h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing the way people find and connect with properties
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            At EstateHub, we believe that finding the right property should be simple, transparent, and
            empowering. We&apos;re committed to transforming the real estate industry by providing cutting-edge
            technology and exceptional service.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our platform connects buyers, sellers, and agents in a seamless ecosystem where trust, transparency,
            and innovation lead the way. We&apos;re dedicated to making real estate accessible to everyone.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <Award size={40} className="mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service, from technology to customer support.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <Users size={40} className="mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-foreground">Community</h3>
              <p className="text-muted-foreground">
                We build a community where agents, buyers, and sellers collaborate and succeed together.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <Globe size={40} className="mb-4 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate to bring the best technology and features to our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold text-foreground">Our Team</h2>
          <p className="mb-12 text-xl text-muted-foreground">
            With over 500 experienced real estate professionals and 15 years of combined expertise, we&apos;re
            committed to your success.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Team Member */}
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 h-24 w-24 mx-auto rounded-full bg-primary/20" />
                <h3 className="font-semibold text-foreground">Team Member {member}</h3>
                <p className="text-sm text-muted-foreground">Real Estate Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">By The Numbers</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Active Listings</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Expert Agents</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">$5B+</div>
              <p className="text-muted-foreground">In Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-4xl font-bold text-foreground">Our Story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              EstateHub was founded with a simple mission: to transform the real estate industry through
              technology and innovation. What started as a small startup has grown into a leading platform
              trusted by thousands of agents and buyers.
            </p>
            <p>
              From humble beginnings, we&apos;ve constantly evolved to meet the needs of our users. Today,
              we&apos;re proud to be at the forefront of real estate technology, combining powerful tools
              with exceptional customer service.
            </p>
            <p>
              We believe that everyone deserves access to high-quality real estate services. Our platform
              is designed to be intuitive, comprehensive, and accessible to all, regardless of experience level.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of satisfied users finding their perfect property
          </p>
          <Link href="/listings">
            <Button className="bg-primary-foreground text-primary hover:opacity-90">
              Start Browsing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
