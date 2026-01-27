import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();

const colorNames = {
  '#FF0000': 'rouge',
  '#00FF00': 'vert',
  '#0000FF': 'bleu',
  '#FFFFFF': 'blanc',
  '#000000': 'noir',
  '#CCCCCC': 'gris',
};

export const getDominantColor = async (url) => {
  try {
    const color = await fac.getColorAsync(url, { algorithm: 'dominant' });

    const hex = color.hex;

    const name = colorNames[hex.toUpperCase()] || 'inconnu';

    return { hex, name };
  } catch (e) {
    return { hex: '#FFFFFF', name: 'blanc' };
  }
};
