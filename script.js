'use strict';
let secretNumber = Number(document.querySelector('.number').textContent);
secretNumber = Math.ceil(Math.random() * 20);
const check = document.querySelector('.check');
let highScore = document.querySelector('.highscore');
let score;
let message = document.querySelector('.message');
const again = document.querySelector('.again');
let guess;
console.log(message);
const number = document.querySelector('.number');
const body = document.querySelector('body');
let displayMessage = function (text) {
  message.textContent = text;
};

console.log(secretNumber, typeof secretNumber);
console.log(guess, typeof guess);
console.log(score, typeof score);

check.addEventListener('click', function () {
  score = Number(document.querySelector('.score').textContent);
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage(`Not a valid number!`);
  } else if (guess > 20 || guess < 1) {
    displayMessage(`Please guess a number between 1 and 20`);
  } else if (guess === secretNumber) {
    displayMessage(`🎊 You guessed correctly!!!`);
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '20rem';
    if (score > highScore.textContent) highScore.textContent = score;
  } else if (score > 1) {
    displayMessage(
      guess > secretNumber
        ? `📈Too high! Guess lower`
        : `📉Too low! Guess higher`
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score <= 1) {
    displayMessage(`Game Over ☹`);
  }
});

again.addEventListener('click', function () {
  score = document.querySelector('.score');
  guess = document.querySelector('.guess');
  score.textContent = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guess.value = '';
  number.textContent = '?';
  displayMessage('Start guessing...');
});
