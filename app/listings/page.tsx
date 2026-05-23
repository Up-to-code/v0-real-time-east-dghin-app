'use client';

import { useState, useMemo } from 'react';
import { mockProperties, filterProperties } from '@/lib/properties';
import { PropertyCard } from '@/components/PropertyCard';
import { FilterSidebar, Filters } from '@/components/FilterSidebar';
import { ArrowUpDown } from 'lucide-react';

export default function ListingsPage() {
  const [filters, setFilters] = useState<Filters>({});
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  const filteredProperties = useMemo(() => {
    let results = filterProperties(filters);

    if (sortBy === 'price-asc') {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      results = [...results].sort((a, b) => b.price - a.price);
    }

    return results;
  }, [filters, sortBy]);

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">
            Browse Properties
          </h1>
          <p className="text-lg text-muted-foreground">
            {filteredProperties.length} properties found
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Property Listings */}
          <main className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpDown size={20} className="text-muted-foreground" />
                <label htmlFor="sort" className="text-sm font-medium text-foreground">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'newest')
                  }
                  className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              <div className="text-sm text-muted-foreground">
                Viewing {filteredProperties.length} of {mockProperties.length}
              </div>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No properties match your filters. Try adjusting your criteria.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
