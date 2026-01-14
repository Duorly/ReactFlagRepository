export function sortByPopulation(countries, order = 'asc') {
  return [...countries].sort((a, b) =>
    order === 'asc'
      ? a.population - b.population
      : b.population - a.population
  );
}

export function sortByContinent(countries) {
  return [...countries].sort((a, b) =>
    a.continent.localeCompare(b.continent)
  );
}
