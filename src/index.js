import './style.css';
import {
  createGame,
  getUsersData,
  createUserData,
} from './modules/functionalities.js';

const refreshButton = document.getElementById('refresh-button');

const loadScores = async () => {
  const scoresDisplay = document.getElementById('scores-display');

  while (scoresDisplay.firstChild) {
    scoresDisplay.removeChild(scoresDisplay.firstChild);
  }

  const usersData = await getUsersData();

  usersData.result.sort((a, b) => b.score - a.score); // Sort entries in descending order

  usersData.result.forEach((entry) => {
    const scoreEntry = document.createElement('div');
    scoreEntry.textContent = `${entry.user}: ${entry.score}`;
    scoresDisplay.appendChild(scoreEntry);
  });
};

refreshButton.addEventListener('click', loadScores);

const userDataSubmit = document.getElementById('user-data-submit');

userDataSubmit.addEventListener('click', async () => {
  let userName = document.getElementById('user-name').value;
  let userScore = document.getElementById('user-score').value;

  if (userName !== '' && userScore !== '') {
    const data = {
      user: userName,
      score: userScore,
    };

    await createUserData(data);

    userName = '';
    userScore = '';
  }
  loadScores();
});

document.addEventListener('DOMContentLoaded', () => {
  createGame(`Game created at: ${new Date()}`);
  loadScores();
});
