import { updateScore } from '../src/modules/score';

describe('Testing updateScore', () => {
  const currentScore = 0;

  test('increment the score', () => {
    expect(updateScore(currentScore)).toEqual(5);
  });
  test('makesure that score', () => {
    expect(updateScore(currentScore)).not.toEqual(7);
  });
});