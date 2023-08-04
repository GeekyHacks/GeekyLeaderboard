// let Url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
export const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9W40RRKEzdVGseFky5fH/scores/';

// fetch(Url, {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'GeekyHacks'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// const gameID = '9W40RRKEzdVGseFky5fH';

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
export const getScore = async () => {
  const response = await fetch(gameUrl);
  const dataList = await response.json();
  return dataList;
};


// fetch(Url, {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'GeekyHacks'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// const gameID = '9W40RRKEzdVGseFky5fH';
