import { paginate, infiniteScroll } from '../../src/utils/pagination';

describe('paginate', () => {
  it('retourne la bonne page', () => {
    const data = Array.from({ length: 50 }, (_, i) => i + 1);
    const page2 = paginate(data, 2, 10);

    expect(page2).toEqual([11,12,13,14,15,16,17,18,19,20]);
  });
});

describe('infiniteScroll', () => {
  it('retourne les premiers éléments', () => {
    const data = [1,2,3,4,5];
    const result = infiniteScroll(data, 3);

    expect(result).toEqual([1,2,3]);
  });
});
