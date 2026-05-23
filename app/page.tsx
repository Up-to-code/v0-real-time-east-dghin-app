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
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance leading-tight">
            Find Your Perfect <span className="text-yellow-300">Home</span>
          </h1>
          <p className="mb-8 text-lg text-gray-100 md:text-xl max-w-2xl mx-auto">
            Explore premium properties and connect with trusted real estate professionals
          </p>

          {/* Search Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by location..."
              className="flex-1 rounded-lg border-0 bg-white px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg"
            />
            <Link href="/listings" className="w-full sm:w-auto">
              <Button className="w-full bg-yellow-300 text-gray-900 hover:bg-yellow-200 font-semibold">
                Search Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Stats - positioned below with good spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="rounded-lg bg-white/95 backdrop-blur p-6 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <p className="text-gray-600 font-medium">Active Listings</p>
            </div>
            <div className="rounded-lg bg-white/95 backdrop-blur p-6 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="rounded-lg bg-white/95 backdrop-blur p-6 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Expert Agents</p>
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
