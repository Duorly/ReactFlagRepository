export interface Color {
  name: string;
  value: string;
  label: string;
  hex: string;
}

export const availableColors: Color[] = [
  { name: 'red', value: 'red', label: 'Rouge', hex: '#FF0000' },
  { name: 'blue', value: 'blue', label: 'Bleu', hex: '#0000FF' },
  { name: 'green', value: 'green', label: 'Vert', hex: '#009739' },
  { name: 'yellow', value: 'yellow', label: 'Jaune', hex: '#FFFF00' },
  { name: 'purple', value: 'purple', label: 'Violet', hex: '#800080' },
  { name: 'pink', value: 'pink', label: 'Rose', hex: '#FFC0CB' },
  { name: 'black', value: 'black', label: 'Noir', hex: '#000000' },
  { name: 'white', value: 'white', label: 'Blanc', hex: '#FFFFFF' },
  { name: 'gray', value: 'gray', label: 'Gris', hex: '#CCCCCC' },
  { name: 'orange', value: 'orange', label: 'Orange', hex: '#FFA500' },
];

// Mapping pour associer hex aux noms de couleurs (pour getDominantColor)
export const hexToColorName: { [key: string]: string } = availableColors.reduce(
  (acc, color) => ({
    ...acc,
    [color.hex]: color.name,
  }),
  {}
);
