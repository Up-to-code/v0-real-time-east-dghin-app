'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, ChevronDown } from 'lucide-react';

export interface Filters {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  type?: string;
  location?: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const propertyTypes = ['house', 'apartment', 'townhouse', 'condo'];

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleReset = () => {
    onFiltersChange({});
  };

  const handleInputChange = (key: keyof Filters, value: any) => {
    const newFilters = {
      ...filters,
      [key]: value === '' || value === null ? undefined : value,
    };
    onFiltersChange(newFilters);
  };

  const activeFilterCount = Object.values(filters).filter((v) => v !== undefined).length;

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <X size={16} />
            Reset
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Price Range</h3>
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice || ''}
              onChange={(e) =>
                handleInputChange('minPrice', e.target.value ? Number(e.target.value) : '')
              }
              className="bg-secondary"
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice || ''}
              onChange={(e) =>
                handleInputChange('maxPrice', e.target.value ? Number(e.target.value) : '')
              }
              className="bg-secondary"
            />
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Bedrooms</h3>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() =>
                  handleInputChange('beds', filters.beds === num ? undefined : num)
                }
                className={`rounded-md py-2 text-sm font-medium transition-colors ${
                  filters.beds === num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Bathrooms</h3>
          <div className="grid grid-cols-4 gap-2">
            {[1, 1.5, 2, 2.5, 3].map((num) => (
              <button
                key={num}
                onClick={() =>
                  handleInputChange('baths', filters.baths === num ? undefined : num)
                }
                className={`rounded-md py-2 text-sm font-medium transition-colors ${
                  filters.baths === num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Property Type</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() =>
                  handleInputChange('type', filters.type === type ? undefined : type)
                }
                className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  filters.type === type
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
              >
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Search */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Location</h3>
          <Input
            type="text"
            placeholder="Search location..."
            value={filters.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}
