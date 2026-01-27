import { filterByName, filterByColor } from '../../src/utils/filters';

const countries = [
  { name: 'France', color: '#0055A4' },
  { name: 'Germany', color: '#000000' },
  { name: 'Spain', color: '#AA151B' },
];

describe('filterByName', () => {
  it('filtre les pays par nom', () => {
    const result = filterByName(countries, 'fra');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('France');
  });

  it('retourne tous les pays si recherche vide', () => {
    const result = filterByName(countries, '');
    expect(result).toHaveLength(3);
  });
});

describe('filterByColor', () => {
  it('filtre les pays par couleur', () => {
    const result = filterByColor(countries, '#000000');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Germany');
  });
});
