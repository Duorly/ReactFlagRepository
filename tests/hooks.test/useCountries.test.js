import { renderHook, waitFor } from '@testing-library/react';
import { useCountries } from '../../src/hooks/useCountries';
import { vi } from 'vitest';

vi.mock('../../src/services/restCountries', () => ({
  fetchCountries: vi.fn(() =>
    Promise.resolve([{ name: 'France', population: 67000000 }])
  ),
}));

describe('useCountries hook', () => {
  it('charge les pays correctement', async () => {
    const { result } = renderHook(() => useCountries()); 

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.countries).toHaveLength(1);
    expect(result.current.countries[0].name).toBe('France');
  });
});
