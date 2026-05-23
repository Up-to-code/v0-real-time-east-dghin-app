'use client';

import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            E
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:inline">
            EstateHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Browse
          </Link>
          <Link
            href="/favorites"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Favorites
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Contact Agent
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Browse
            </Link>
            <Link
              href="/favorites"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Favorites
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="mt-2 w-full rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Contact Agent
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
