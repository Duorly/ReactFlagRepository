import { useEffect, useMemo, useState } from 'react';
import { fetchCountries } from '../services/restCountries';
import { filterByName, filterByColor } from '../utils/filters';
import { sortByPopulation } from '../utils/sorting';
import { paginate } from '../utils/pagination';

interface UseCountriesOptions {
  search?: string;
  selectedColor?: string | null;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

interface UseCountriesReturn {
  countries: any[];
  total: number;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

export function useCountries({
  search = '',
  selectedColor = null,
  sortOrder = 'desc',
  page = 1,
  limit = 20,
}: UseCountriesOptions = {}): UseCountriesReturn {
  const [rawCountries, setRawCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries()
      .then(setRawCountries)
      .catch((err: any) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredAndSorted = useMemo(() => {
    const filtered = filterByName(rawCountries, search);
    const colored = filterByColor(filtered, selectedColor);
    return sortByPopulation(colored, sortOrder);
  }, [rawCountries, search, selectedColor, sortOrder]);

  const paginatedCountries = useMemo(() => {
    return paginate(filteredAndSorted, page, limit);
  }, [filteredAndSorted, page, limit]);

  const totalPages = Math.ceil(filteredAndSorted.length / limit) || 1;

  return {
    countries: paginatedCountries,
    total: filteredAndSorted.length,
    loading,
    error,
    currentPage: page,
    totalPages: totalPages,
  };
}
