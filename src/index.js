import './styles/Sass/main.sass';
import { addScore, getScore, gameUrl } from './modules/api.js';
import { user, score, renderList } from './modules/displayList.js';

const submit = document.getElementById('scoreForm');

window.addEventListener('load', () => {
  renderList();
});
// this will add userScore to the APi
submit.addEventListener('submit', async (event) => {
  if (score.value === '' && user.value === '') {
    return;
  }
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
