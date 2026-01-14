import { sortByPopulation, sortByContinent } from '../../src/utils/sorting';

const countries = [
  { name: 'France', population: 67000000, continent: 'Europe' },
  { name: 'China', population: 1400000000, continent: 'Asia' },
  { name: 'Brazil', population: 210000000, continent: 'Americas' },
];

describe('sortByPopulation', () => {
  it('trie par population croissante', () => {
    const result = sortByPopulation(countries, 'asc');
    expect(result[0].name).toBe('France');
  });

  it('trie par population décroissante', () => {
    const result = sortByPopulation(countries, 'desc');
    expect(result[0].name).toBe('China');
  });
});

describe('sortByContinent', () => {
  it('trie par continent', () => {
    const result = sortByContinent(countries);
    expect(result[0].continent).toBe('Americas');
  });
});
