import { useState, useEffect } from 'react';
import { useCountries } from '../../hooks/useCountries.ts';
import { calculateTotalPages } from '../../utils/pagination';

interface UseFlagListReturn {
  filteredCountries: any[];
  loading: boolean;
  error: string | null;
  total: number;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const LIMIT = 20;

export const useFlagList = (searchTerm: string, selectedColors: string[] = []): UseFlagListReturn => {
  const [page, setPage] = useState(1);

  // Réinitialiser la page quand les filtres changent
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedColors]);

  const { countries, loading, error, total } = useCountries({
    search: searchTerm,
    selectedColor: selectedColors.length > 0 ? selectedColors[0] : null,
    limit: LIMIT,
    page,
  });

  const totalPages = calculateTotalPages(total, LIMIT);

  console.log('useFlagList:', { page, totalPages, total, countriesCount: countries.length });

  return {
    filteredCountries: countries,
    loading,
    error: error || null,
    total,
    currentPage: page,
    totalPages: totalPages,
    setPage,
  };
};
