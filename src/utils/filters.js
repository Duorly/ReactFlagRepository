export function filterByName(countries, search) {

  if (!search) return countries;
  return countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

}

export function filterByColor(countries, color) {

  if (!color) return countries;
  return countries.filter(c => c.color === color);
  
}
