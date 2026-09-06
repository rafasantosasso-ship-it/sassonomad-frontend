import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'sn:favorite-guides';

function readStoredFavorites() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function useFavorites() {
  const [favorites, setFavorites] = useState(readStoredFavorites);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      // localStorage indisponível (modo privado, etc.) — segue sem persistir
    }
  }, [favorites]);

  const isFavorite = useCallback((slug) => favorites.includes(slug), [favorites]);

  const toggleFavorite = useCallback((slug) => {
    setFavorites((current) => (
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug]
    ));
  }, []);

  return { favorites, isFavorite, toggleFavorite };
}

export default useFavorites;
