import { useState, useEffect } from 'react';

interface CountryName {
  common: string;
  official: string;
}

interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

interface Country {
  name: CountryName;
  flags: CountryFlags;
}

interface UseFlagListReturn {
  filteredCountries: Country[];
  loading: boolean;
  error: string | null;
}

export const useFlagList = (searchTerm: string): UseFlagListReturn => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des données
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data: Country[] = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Format de données invalide');
        }
        
        const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
        setLoading(false);
      } catch (err) {
        console.error('Erreur de chargement:', err);
        setError(`Impossible de charger les pays: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Filtrage des données basé sur searchTerm
  useEffect(() => {
    const filtered = countries.filter((country: Country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return {
    filteredCountries,
    loading,
    error,
  };
};
