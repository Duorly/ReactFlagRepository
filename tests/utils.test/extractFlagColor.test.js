import { vi } from 'vitest';
import { getDominantColor } from '../../src/utils/extractFlagColors';

vi.mock('fast-average-color', () => {
  return {
    FastAverageColor: class {
      getColorAsync() {
        return Promise.resolve({ hex: '#FFFFFF' }); 
      }
    },
  };
});

describe('getDominantColor', () => {
  it('retourne un objet avec hex et nom de couleur', async () => {
    const color = await getDominantColor('flag.svg');

    expect(color).toEqual({
      hex: '#FFFFFF',
      name: 'blanc', 
    });
  });
});
