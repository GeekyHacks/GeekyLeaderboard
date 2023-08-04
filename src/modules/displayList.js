import { UsageState } from 'webpack';
import { gameUrl } from './api.js';

export const user = document.getElementById('name');
export const score = document.getElementById('score');
const uList = document.querySelector('.recentScores');
let sortList = (array) => {
  const sortedArr = [array];
  sortedArr.sort((a, b) => a.index - b.index);
  return sortedArr;
};

export const renderList = async (listData) => {
  const uList = document.querySelector('.recentScores');
  uList.innerHTML = '';
  const response = await fetch(gameUrl);
  listData = await response.json();
  console.log(listData);
  const sortedDataList = sortList(listData.result);
  console.log(sortedDataList);
  const li = document.createElement('li');

  for (let i = 0; i < sortedDataList.length; i++) {
    const objects = sortedDataList[i];
    console.log(objects);
    objects.forEach((object) => {
      let li = document.createElement('li');
      li.innerHTML = `${object.user}: ${object.score}`;
      uList.appendChild(li);
    });

    console.log(li);
    console.log(uList);
  }
};
