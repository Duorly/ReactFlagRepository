import { useFlagList } from './hooks/useFlagList';

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

interface FlagListProps {
  searchTerm: string;
}

export default function FlagList({ searchTerm }: FlagListProps) {
  const { filteredCountries, loading, error } = useFlagList(searchTerm);



  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement des pays...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded max-w-md">
          <p className="font-bold">Erreur</p>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Réessayer
          </button>
          <p className="text-sm mt-4">Vérifiez votre connexion internet ou ouvrez la console pour plus de détails.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-blue-50 to-indigo-100 py-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-center text-gray-600">
            {filteredCountries.length} pays trouvés
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredCountries.map((country: Country, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-200 rounded-xl border-2 border-white">
                <img
                  src={country.flags.svg || country.flags.png}
                  alt={`Drapeau de ${country.name.common}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-800 text-center truncate">
                  {country.name.common}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}