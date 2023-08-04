export const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9W40RRKEzdVGseFky5fH/scores/';
// this part for generating gameID
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
export const gameID = '9W40RRKEzdVGseFky5fH';

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

// to delete
// export const deleteAPI = async (id) => {
//   const response = await fetch(`${id}`, {
//     method: 'DELETE',
//   });
//   const result = response.json();
//   console.log(result);
//   return result;
// };
