import { FastAverageColor } from 'fast-average-color';
import { getDominantColor } from '../utils/extractFlagColors';

const fac = new FastAverageColor();
const BASE_URL = 'https://restcountries.com/v3.1/all';

export async function fetchCountries() {

    const fields = 'name,flags,population,capital,region';
    const response = await fetch(`${BASE_URL}?fields=${fields}`);
    const data = await response.json();

    const countries = await Promise.all(
    data.map(async country => ({
      name: {
        common: country.name.common,
        official: country.name.official
      },
      flags: {
        svg: country.flags.svg,
        png: country.flags.png
      },
      colors: await getDominantColor(country.flags.svg),
      population: country.population,
      capital: country.capital?.[0] ?? '',
      region: country.region,
      continent: country.continents?.[0] ?? ''
    }))
  );

  return countries;
}


