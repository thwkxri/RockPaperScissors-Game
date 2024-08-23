const buttons = document.querySelectorAll('.game__btn');

const resultEl = document.getElementById('result');

const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  })
})

function computerPlay() {
  const moves = ['Камень', 'Ножницы', 'Бумага'];
  const randomMove = Math.floor(Math.random() * moves.length);
  return moves[randomMove];
}

function playRound(userMove, computerMove) {
  if (userMove === computerMove) {
    return 'Ничья!';
  }
  else if (
    (userMove === 'Камень' && computerMove === 'Ножницы') ||
    (userMove === 'Бумага' && computerMove === 'Камень') ||
    (userMove === 'Ножницы' && computerMove === 'Бумага')
  ) {
    userScore++;
    userScoreEl.textContent = userScore;
    return `Вы победили! ${userMove} 🤜 ${computerMove}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `Вы проиграли. ${computerMove} 🤜 ${userMove}`;
  }
}