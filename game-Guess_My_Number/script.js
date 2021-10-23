'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🤷‍♀️ No Number!');
    //document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!!';
    document.querySelector('.message').style.color = 'red';
    document.querySelector('h1').style.color = 'red';
    document.querySelector('h1').textContent = 'You won the game!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber(secretNumber);
    //document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? '🤷‍♀️ Too high!' : '🤷‍♀️ Too low!');
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? '🤷‍♀️ Too high!' : '🤷‍♀️ Too low!';
    } else {
      displayMessage('🤷‍♀️ You lost yhe game..');
      //document.querySelector('.message').textContent = '🤷‍♀️ You lost the game..';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const score = 20;
  displayNumber('?');
  //document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('h1').style.color = '#eee';
  document.querySelector('.score').textContent = score;
});
