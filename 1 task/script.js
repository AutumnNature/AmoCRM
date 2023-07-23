document.addEventListener('DOMContentLoaded', function () {
  let input = document.querySelector('.input');
  let button = document.querySelector('.button');
  let score = document.querySelector('.score');
  let timer;

  function startTimer() {
    score.textContent -= 1;
    if (score.textContent <= 0) {
      timer = clearInterval(timer);
    }
  }

  function click() {
    timer = clearInterval(timer);

    if (input.value > 0) {
      score.textContent = input.value;
      timer = setInterval(startTimer, 1000)
    } else { timer = clearInterval(timer) }
  }

  button.addEventListener('click', click)
}
)
