'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { getPropertyById, mockProperties } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';
import { Heart, MapPin, Bed, Bath, Ruler, DollarSign, Calendar, Home } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { isFavorite, addFavorite, removeFavorite } from '@/lib/favorites';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PropertyDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = (params?.id || searchParams?.get('id')) as string;
  const property = getPropertyById(id);
  const [favorite, setFavorite] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (property) {
      setFavorite(isFavorite(property.id));
    }
  }, [property]);

  const handleFavoriteClick = () => {
    if (property) {
      if (favorite) {
        removeFavorite(property.id);
        setFavorite(false);
      } else {
        addFavorite(property.id);
        setFavorite(true);
      }
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Property Not Found
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            The property you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/listings">
            <Button className="bg-primary">Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  const relatedProperties = mockProperties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Back Button */}
        <Link href="/listings" className="mb-6 text-primary hover:underline">
          ← Back to Listings
        </Link>

        {/* Image Gallery */}
        <div className="mb-8 overflow-hidden rounded-lg border border-border bg-muted">
          <div className="relative h-96 w-full md:h-[500px]">
            <Image
              src={property.images[selectedImage]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-3 transition-all hover:bg-white"
            >
              <Heart
                size={24}
                className={
                  mounted && favorite
                    ? 'fill-red-500 text-red-500'
                    : 'text-gray-600'
                }
              />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-2 overflow-x-auto bg-secondary p-4">
            {property.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                  selectedImage === idx
                    ? 'border-primary'
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <Image
                  src={image}
                  alt={`View ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Title and Price */}
            <div className="mb-8">
              <div className="mb-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground capitalize">
                {property.type}
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground">
                {property.title}
              </h1>
              <p className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
                {formattedPrice}
              </p>
              <div className="mb-6 flex items-start gap-2">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                <p className="text-lg text-muted-foreground">{property.location}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-8 grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bed size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{property.beds}</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bath size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{property.baths}</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Square Feet</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{property.sqft.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Year Built</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{property.yearBuilt}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">About This Property</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Amenities</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Info */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Financial Information</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-foreground">Annual Property Tax</span>
                  <span className="font-semibold text-foreground">
                    ${property.propertyTax.toLocaleString()}
                  </span>
                </div>
                {property.hoa && (
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Monthly HOA Fee</span>
                    <span className="font-semibold text-foreground">
                      ${property.hoa.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Agent</h2>

              <div className="mb-8 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Agent Name</p>
                  <p className="text-lg font-semibold text-foreground">
                    {property.agentName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Phone</p>
                  <a
                    href={`tel:${property.agentPhone}`}
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    {property.agentPhone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Email</p>
                  <a
                    href={`mailto:${property.agentEmail}`}
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    {property.agentEmail}
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-primary">Schedule Tour</Button>
                <button
                  onClick={handleFavoriteClick}
                  className={`w-full rounded-md border-2 px-4 py-3 font-semibold transition-colors ${
                    mounted && favorite
                      ? 'border-red-500 bg-red-50 text-red-600 hover:bg-red-100'
                      : 'border-border bg-secondary text-foreground hover:bg-muted'
                  }`}
                >
                  {mounted && favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <section className="mt-16 border-t border-border pt-16">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Similar Properties</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
