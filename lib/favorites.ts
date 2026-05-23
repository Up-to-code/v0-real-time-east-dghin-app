const FAVORITES_KEY = 'estate_favorites';

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addFavorite(propertyId: string): void {
  if (typeof window === 'undefined') return;
  const favorites = getFavorites();
  if (!favorites.includes(propertyId)) {
    favorites.push(propertyId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(propertyId: string): void {
  if (typeof window === 'undefined') return;
  const favorites = getFavorites();
  const updated = favorites.filter((id) => id !== propertyId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(propertyId: string): boolean {
  return getFavorites().includes(propertyId);
}
