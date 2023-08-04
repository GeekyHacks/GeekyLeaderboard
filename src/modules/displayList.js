import { gameUrl } from './api.js';

export const user = document.getElementById('name');
export const score = document.getElementById('score');
const sortList = (array) => {
  const sortedArr = [array];
  sortedArr.sort((a, b) => a.index - b.index);
  return sortedArr;
};

export const renderList = async (listData) => {
  const uList = document.querySelector('.recentScores');
  uList.innerHTML = '';
  const response = await fetch(gameUrl);
  listData = await response.json();
  const sortedDataList = sortList(listData.result);

  for (let i = 0; i < sortedDataList.length; i += 1) {
    const objects = sortedDataList[i];
    objects.forEach((object) => {
      const li = document.createElement('li');
      li.innerHTML = `
      ${object.user}:${object.score}
       `;
      uList.appendChild(li);
    });
  }
};
