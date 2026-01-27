import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCountries } from '../../src/services/restCountries';

vi.mock('../../src/utils/extractFlagColors', () => ({
  getDominantColor: vi.fn(() => Promise.resolve('#FFFFFF')),
}));

describe('fetchCountries', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          {
            name: { common: 'France' },
            flags: { svg: 'flag.svg' },
            population: 67000000,
            capital: ['Paris'],
            region: 'Europe',
            continents: ['Europe'],
          }
        ]),
      })
    ));
  });

  it('retourne une liste de pays avec couleurs et drapeaux', async () => {
    const result = await fetchCountries();

    expect(result[0]).toEqual({
      name: 'France',
      flag: 'flag.svg',
      colors: '#FFFFFF', 
      population: 67000000,
      capital: 'Paris',
      region: 'Europe',
      continent: 'Europe'
    });
  });
});