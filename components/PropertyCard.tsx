'use client';

import { Property } from '@/lib/properties';
import { Heart, MapPin, Bed, Bath, Ruler } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { isFavorite, addFavorite, removeFavorite } from '@/lib/favorites';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [favorite, setFavorite] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavorite(isFavorite(property.id));
  }, [property.id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(property.id);
      setFavorite(false);
    } else {
      addFavorite(property.id);
      setFavorite(true);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={`/property/${property.id}`}>
      <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 transition-all hover:bg-white"
          >
            <Heart
              size={20}
              className={
                mounted && favorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600'
              }
            />
          </button>

          {/* Property Type Badge */}
          <div className="absolute bottom-3 left-3 rounded-md bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground capitalize">
            {property.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Price */}
          <div className="mb-3">
            <p className="text-2xl font-bold text-foreground">{formattedPrice}</p>
          </div>

          {/* Title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground">
            {property.title}
          </h3>

          {/* Location */}
          <div className="mb-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
            <p className="line-clamp-2">{property.location}</p>
          </div>

          {/* Details */}
          <div className="flex items-center gap-4 border-t border-border pt-4">
            <div className="flex items-center gap-1 text-sm">
              <Bed size={16} className="text-muted-foreground" />
              <span className="font-medium">{property.beds}</span>
              <span className="text-muted-foreground">beds</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Bath size={16} className="text-muted-foreground" />
              <span className="font-medium">{property.baths}</span>
              <span className="text-muted-foreground">baths</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Ruler size={16} className="text-muted-foreground" />
              <span className="font-medium">{property.sqft.toLocaleString()}</span>
              <span className="text-muted-foreground">sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
