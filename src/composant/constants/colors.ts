export interface Color {
  name: string;
  value: string;
  hex: string;
}

export const availableColors: Color[] = [
  { name: 'Rouge', value: 'red', hex: '#EF4444' },
  { name: 'Bleu', value: 'blue', hex: '#3B82F6' },
  { name: 'Vert', value: 'green', hex: '#10B981' },
  { name: 'Jaune', value: 'yellow', hex: '#F59E0B' },
  { name: 'Violet', value: 'purple', hex: '#A855F7' },
  { name: 'Rose', value: 'pink', hex: '#EC4899' },
  { name: 'Noir', value: 'black', hex: '#000000' },
  { name: 'Blanc', value: 'white', hex: '#FFFFFF' },
];
