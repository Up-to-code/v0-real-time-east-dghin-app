import { mockProperties } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home, Heart, MapPin } from 'lucide-react';

export default function Page() {
  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Find Your Perfect <span className="text-primary">Home</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Explore premium properties and connect with trusted real estate professionals
          </p>

          {/* Search Bar */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="text"
              placeholder="Search by location..."
              className="rounded-lg border border-border bg-card px-6 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-80"
            />
            <Link href="/listings">
              <Button className="w-full sm:w-auto bg-primary hover:opacity-90">
                Search Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-card/50 p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Active Listings</p>
            </div>
            <div className="rounded-lg bg-card/50 p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="rounded-lg bg-card/50 p-6 border border-border">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Expert Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Featured Properties</h2>
            <p className="text-lg text-muted-foreground">
              Explore our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/listings">
              <Button className="bg-primary hover:opacity-90">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Why Choose EstateHub</h2>
            <p className="text-lg text-muted-foreground">
              We make finding your perfect property simple and rewarding
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Extensive Selection</h3>
              <p className="text-muted-foreground">
                Browse thousands of properties from apartments to luxury estates, all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Save Favorites</h3>
              <p className="text-muted-foreground">
                Create a personalized collection of your favorite properties for easy access.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Connect with experienced agents who understand your needs and market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Find Your Home?</h2>
          <p className="mb-8 text-lg opacity-90">
            Start your property search today and discover amazing opportunities
          </p>
          <Link href="/listings">
            <Button className="bg-primary-foreground text-primary hover:opacity-90">
              Explore Listings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
