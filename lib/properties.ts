export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'house' | 'apartment' | 'townhouse' | 'condo';
  images: string[];
  description: string;
  amenities: string[];
  agentName: string;
  agentEmail: string;
  agentPhone: string;
  yearBuilt: number;
  propertyTax: number;
  hoa?: number;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Penthouse',
    price: 2500000,
    location: 'Downtown, Los Angeles, CA',
    beds: 3,
    baths: 2.5,
    sqft: 2500,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    ],
    description:
      'Stunning downtown penthouse with panoramic city views, floor-to-ceiling windows, and high-end finishes throughout. Located in prestigious building with 24/7 concierge.',
    amenities: [
      'Gym',
      'Pool',
      'Concierge',
      'Valet Parking',
      'Smart Home',
      'Wine Cellar',
    ],
    agentName: 'Sarah Mitchell',
    agentEmail: 'sarah.mitchell@realestate.com',
    agentPhone: '(555) 123-4567',
    yearBuilt: 2020,
    propertyTax: 45000,
    hoa: 2500,
  },
  {
    id: '2',
    title: 'Luxury Coastal Villa',
    price: 3800000,
    location: 'Malibu, Los Angeles, CA',
    beds: 5,
    baths: 4,
    sqft: 5200,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
    description:
      'Breathtaking beachfront villa with direct ocean access, private beach, and resort-style amenities. Designed by renowned architect with sustainable features.',
    amenities: [
      'Private Beach',
      'Infinity Pool',
      'Home Theater',
      'Tennis Court',
      'Wine Cellar',
      'Spa',
      'Elevator',
    ],
    agentName: 'James Richardson',
    agentEmail: 'james.richardson@realestate.com',
    agentPhone: '(555) 234-5678',
    yearBuilt: 2019,
    propertyTax: 75000,
    hoa: 0,
  },
  {
    id: '3',
    title: 'Historic Victorian Mansion',
    price: 1200000,
    location: 'Pacific Heights, San Francisco, CA',
    beds: 4,
    baths: 3,
    sqft: 4100,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800',
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&q=80',
    ],
    description:
      'Beautifully restored Victorian mansion featuring original hardwood floors, ornate details, and period fixtures. Perfect for those seeking charm and character.',
    amenities: [
      'Hardwood Floors',
      'Fireplace',
      'Garden',
      'Off-street Parking',
      'Storage',
    ],
    agentName: 'Emma Chen',
    agentEmail: 'emma.chen@realestate.com',
    agentPhone: '(555) 345-6789',
    yearBuilt: 1892,
    propertyTax: 28000,
    hoa: 0,
  },
  {
    id: '4',
    title: 'Contemporary Tech House',
    price: 950000,
    location: 'Mountain View, CA',
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    description:
      'Smart home showcase with cutting-edge technology integrated throughout. Energy-efficient design with solar panels and advanced automation systems.',
    amenities: [
      'Smart Home',
      'Solar Panels',
      'EV Charging',
      'Smart Garage',
      'Energy Storage',
      'Gym',
    ],
    agentName: 'Michael Torres',
    agentEmail: 'michael.torres@realestate.com',
    agentPhone: '(555) 456-7890',
    yearBuilt: 2022,
    propertyTax: 18000,
    hoa: 300,
  },
  {
    id: '5',
    title: 'Chic Urban Loft',
    price: 750000,
    location: 'SOMA, San Francisco, CA',
    beds: 2,
    baths: 1.5,
    sqft: 1600,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
    ],
    description:
      'Industrial-chic loft in trendy neighborhood with exposed brick, large windows, and open concept living. Walking distance to restaurants and shops.',
    amenities: [
      'Exposed Brick',
      'High Ceilings',
      'Hardwood Floors',
      'Gym',
      'Roof Deck',
    ],
    agentName: 'Lisa Wong',
    agentEmail: 'lisa.wong@realestate.com',
    agentPhone: '(555) 567-8901',
    yearBuilt: 2015,
    propertyTax: 12000,
    hoa: 450,
  },
  {
    id: '6',
    title: 'Riverside Townhouse',
    price: 550000,
    location: 'Oakland, CA',
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    type: 'townhouse',
    images: [
      'https://images.unsplash.com/photo-1515562141207-6811bcb33856?w=800',
      'https://images.unsplash.com/photo-1515562141207-6811bcb33856?w=800&q=80',
    ],
    description:
      'Charming townhouse with river views, modern kitchen, and private patio. Great for families looking for community feel with urban convenience.',
    amenities: [
      'River View',
      'Patio',
      'Garage',
      'Garden',
      'Community Pool',
    ],
    agentName: 'David Lee',
    agentEmail: 'david.lee@realestate.com',
    agentPhone: '(555) 678-9012',
    yearBuilt: 2010,
    propertyTax: 8500,
    hoa: 250,
  },
  {
    id: '7',
    title: 'Luxury Studio Condo',
    price: 425000,
    location: 'Downtown Seattle, WA',
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'condo',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    ],
    description:
      'Upscale studio condo in prestigious building. Perfect for young professionals. Floor-to-ceiling windows with city views and premium finishes.',
    amenities: ['Gym', 'Concierge', 'Lounge', 'Valet Parking'],
    agentName: 'Jessica Park',
    agentEmail: 'jessica.park@realestate.com',
    agentPhone: '(555) 789-0123',
    yearBuilt: 2018,
    propertyTax: 6500,
    hoa: 600,
  },
  {
    id: '8',
    title: 'Suburban Family Home',
    price: 620000,
    location: 'Portland, OR',
    beds: 4,
    baths: 2,
    sqft: 2400,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    ],
    description:
      'Perfect family home in established neighborhood with excellent schools. Updated kitchen, spacious backyard, and new roof. Move-in ready!',
    amenities: [
      'Backyard',
      '2-Car Garage',
      'Updated Kitchen',
      'New Roof',
      'Hardwood Floors',
    ],
    agentName: 'Robert Martinez',
    agentEmail: 'robert.martinez@realestate.com',
    agentPhone: '(555) 890-1234',
    yearBuilt: 2005,
    propertyTax: 11000,
    hoa: 0,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return mockProperties.find((p) => p.id === id);
}

export function filterProperties(filters: {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  type?: string;
  location?: string;
}): Property[] {
  return mockProperties.filter((property) => {
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.beds && property.beds < filters.beds) return false;
    if (filters.baths && property.baths < filters.baths) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    return true;
  });
}
