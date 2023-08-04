import './styles/Sass/main.sass';
import { addScore, getScore, gameUrl } from './modules/api.js';
import { user, score, renderList } from './modules/displayList.js';

const submitBtn = document.getElementById('submit');

window.addEventListener('load', () => {
  renderList();
});
// this will add userScore to the APi
submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  await addScore(user.value, score.value);
  window.location.reload();
});

// to refresh
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', async (event) => {
  event.preventDefault();
  await getScore(gameUrl);
  window.location.reload();
});
