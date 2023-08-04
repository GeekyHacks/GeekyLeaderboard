import './styles/Sass/main.sass';
import { addScore } from './modules/api.js';
import { user, score, renderList } from './modules/displayList.js';

const body = document.querySelector('body');
const submitBtn = document.getElementById('submit');
const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9W40RRKEzdVGseFky5fH/scores/';

window.addEventListener('load', () => {
  renderList();
});
// this will add userScore to the APi
submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  await addScore(user.value, score.value);
});
