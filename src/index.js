import './styles/Sass/main.sass';
const body = document.querySelector('body');

const layout = () => {
  body.innerHTML = `
    <header><h1>Leaderboard</h1></header>
    <main>
      <section>
        <div class="Side">
          <div class="fstSect">
            <h3>Recent Scores</h3>
            <button class="btn">Refresh</button>
          </div>
          <ul class="recentScores">
            <li>Name:96</li>
            <li>Name: 87</li>
            <li>Name:100</li>
          </ul>
        </div>
        <div class="Side">
          <h3>Add your score</h3>
          <input type="text" /><input type="text" />
          <button class="btn">Submit</button>
        </div>
      </section>
    </main>
    <footer>
      <h3 class="copyRights">Copy rights reserved to <a href="https://github.com/GeekyHacks">geekyhacks</a></h3>
    </footer>
    `;
};

layout();
