export function filterByName(countries, search) {

  if (!search) return countries;
  return countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

}

export function filterByColor(countries, color) {

  if (!color) return countries;
  
  return countries.filter(c => {
    // Si c.colors est un array, chercher la couleur dans l'array
    if (Array.isArray(c.colors)) {
      return c.colors.some(col => {
        const colName = typeof col === 'object' ? col.name : col;
        return colName && colName.toLowerCase() === color.toLowerCase();
      });
    }
    // Sinon, comparer directement
    const colorValue = typeof c.colors === 'object' ? c.colors.name : c.colors;
    return colorValue && colorValue.toLowerCase() === color.toLowerCase();
  });
  
}
