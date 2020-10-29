import { getScore } from '../src/modules/score';

jest.mock('../src/modules/score');

describe('Testing the fetching scores', () => {
  test('shows the scores returned', async () => {
    getScore.mockResolvedValue({
      result: [
        {
          user: 'Abdoulaye',
          score: '1000',
        },
        {
          user: 'TheSpy',
          score: '30',
        },
        {
          user: 'Fadil',
          score: '50',
        },
      ],
    });

    const recievedScore = await getScore();
    expect(recievedScore).toEqual({
      result: [
        {
          user: 'Abdoulaye',
          score: '1000',
        },
        {
          user: 'TheSpy',
          score: '30',
        },
        {
          user: 'Fadil',
          score: '50',
        },
      ],
    });
  });

  test('returns empty array if there is no score', async () => {
    getScore.mockResolvedValue({ result: [] });
    const result = await getScore();
    expect(result).toEqual({ result: [] });
  });

  test('it returns an object of previous results.', async () => {
    const result = await getScore();
    expect(typeof result).toBe('object');
  });
});