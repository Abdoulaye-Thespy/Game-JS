export function updateScore(score) {
  score += 5;
  return score;
}

export async function getScore() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdx/scores/';
  let result = await fetch(url, {
    mode: 'cors',
  });

  const data = await result.json();
  result = data.result;
  return result;
}
