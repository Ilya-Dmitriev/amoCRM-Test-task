const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let interval = null;
  let sec = 0;
  const delay = 1000;

  function decrement() {
    if (sec <= 0) {
      clearInterval(interval);
    } else {
      sec--;
      timerEl.innerText = secToTime(sec);
    }
  }

  function secToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds / 60) % 60);
    const secs = Math.ceil(seconds % 60);
    return `${hours}:${mins}:${secs}`;
  }

  return (seconds) => {
    if (interval) {
      clearInterval(interval);
    }
    sec = Number(seconds);
    timerEl.innerText = secToTime(sec);
    interval = setInterval(decrement, delay);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
  inputEl.value = event.target.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
