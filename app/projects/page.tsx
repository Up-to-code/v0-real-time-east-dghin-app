'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Downtown Luxury Towers',
    description: 'A premium mixed-use development featuring 500+ residential units, high-end retail spaces, and rooftop dining with panoramic city views.',
    category: 'Residential',
    status: 'Completed',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Waterfront Community',
    description: 'Beachfront residential community with 200+ homes, marina facilities, community center, and sustainable green spaces.',
    category: 'Community',
    status: 'In Progress',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1493809842364-78817281560d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Tech Park Innovation Hub',
    description: 'Modern office complex designed for tech startups and established companies, featuring flexible workspaces and collaborative areas.',
    category: 'Commercial',
    status: 'Completed',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Garden District Estates',
    description: 'Exclusive gated community with 80+ custom-built estates on pristine landscaped grounds with resort-style amenities.',
    category: 'Residential',
    status: 'Planning',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f3d?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Urban Renewal District',
    description: 'Comprehensive revitalization project transforming historic neighborhoods with modern architecture while preserving character.',
    category: 'Mixed-Use',
    status: 'In Progress',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Sustainability Village',
    description: 'Eco-friendly residential development with net-zero energy homes, sustainable farming areas, and environmental education center.',
    category: 'Green',
    status: 'Planning',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1486304873009-c73f961d3f3a?w=600&h=400&fit=crop',
  },
];

const statusColors = {
  'Completed': 'bg-green-100 text-green-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Planning': 'bg-yellow-100 text-yellow-800',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b border-border bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Our Projects</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Explore our portfolio of completed, ongoing, and planned real estate developments that showcase innovation, quality, and sustainable design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filter Info */}
          <div className="mb-12">
            <p className="text-muted-foreground">
              Showing {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        statusColors[project.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Category & Year */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  {/* Name & Description */}
                  <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mb-6 flex-1 text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Learn More Link */}
                  <Link href={`/project/${project.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Interested in Our Projects?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get detailed information about any of our projects or discuss investment opportunities.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:opacity-90">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
