export const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QkKg1kehUTdJVefN61WT/scores/';

export const addScore = async (user, score) => {
  const userScore = { user, score };
  await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify(userScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

// this will get the created api objects
export const getScore = async (APIUrl) => {
  const response = await fetch(APIUrl);
  const dataList = await response.json();
  return dataList.result;
};
