import { useEffect, useMemo, useState } from 'react';
import { fetchCountries } from '../services/restCountries';
import { filterByName, filterByColor } from '../utils/filters';
import { sortByPopulation } from '../utils/sorting';
import { paginate } from '../utils/pagination';

export function useCountries({
  search = '',
  selectedColor = null,
  sortOrder = 'desc',
  page = 1,
  limit = 20,
} = {}) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const processedCountries = useMemo(() => {
    const filtered = filterByName(countries, search);
    const colored = filterByColor(filtered, selectedColor);
    const sorted = sortByPopulation(colored, sortOrder);
    return paginate(sorted, page, limit);
  }, [countries, search, selectedColor, sortOrder, page, limit]);

  return {
    countries: processedCountries,
    total: countries.length,
    loading,
    error,
  };
}
