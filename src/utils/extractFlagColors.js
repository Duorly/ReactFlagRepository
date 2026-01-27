import { FastAverageColor } from 'fast-average-color';
import { availableColors } from '../composant/constants/colors';

const fac = new FastAverageColor();

// Créer le mapping des hex vers les noms de couleurs
const colorNames = availableColors.reduce((acc, color) => ({
  ...acc,
  [color.hex]: color.name,
}), {});

const hexToRgb = (hex) => {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
};

const colorDistance = (c1, c2) =>
  Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );

const getClosestColorName = (hex) => {
  const rgb = hexToRgb(hex);
  let closest = null;
  let minDistance = Infinity;

  for (const refHex in colorNames) {
    const dist = colorDistance(rgb, hexToRgb(refHex));
    if (dist < minDistance) {
      minDistance = dist;
      closest = colorNames[refHex];
    }
  }

  return closest;
};

export const getDominantColor = async (url) => {
  try {
    const color = await fac.getColorAsync(url, { algorithm: 'dominant' });
    const hex = color.hex.toUpperCase();
    const name = getClosestColorName(hex);

    return [{ hex, name }];
  } catch (e) {
    return [{ hex: '#FFFFFF', name: 'white' }];
  }
};
