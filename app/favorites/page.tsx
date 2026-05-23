'use client';

import { useEffect, useState } from 'react';
import { getFavorites } from '@/lib/favorites';
import { getPropertyById, mockProperties } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavoriteIds(getFavorites());
  }, []);

  const favoriteProperties = favoriteIds
    .map((id) => getPropertyById(id))
    .filter((p) => p !== undefined);

  if (!mounted) {
    return (
      <div className="bg-background min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-32 rounded-lg bg-muted" />
            <div className="h-64 rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Heart size={32} className="text-primary fill-primary" />
            <h1 className="text-4xl font-bold text-foreground">Saved Favorites</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {favoriteProperties.length} properties saved
          </p>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-card p-12 text-center">
            <Heart size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              No Favorites Yet
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Start saving properties you love to see them here
            </p>
            <Link href="/listings">
              <Button className="bg-primary">
                Browse Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
