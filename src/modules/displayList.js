import { gameUrl } from './api.js';

export const user = document.getElementById('name');
export const score = document.getElementById('score');

export const renderList = async (listData) => {
  const uList = document.querySelector('.recentScores');
  uList.innerHTML = '';
  const response = await fetch(gameUrl);
  listData = await response.json();
  listData = listData.result;
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);

  const objects = sortedDataList;

  objects.forEach((object) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${object.user}:${object.score}
       `;
    uList.appendChild(li);
  });
};
