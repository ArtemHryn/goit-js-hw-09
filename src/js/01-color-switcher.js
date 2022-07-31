const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalID = null;

refs.startBtn.addEventListener('click', onStartRandonColor);
refs.stopBtn.addEventListener('click', onStopRandomColor);

function onStartRandonColor() {
  intervalID = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 500);
  changeButtonStatus(true, false)
}

function onStopRandomColor() {
  clearInterval(intervalID);
    changeButtonStatus(false, true)
}

function changeButtonStatus(start, stop) {
    refs.startBtn.disabled = start
    refs.stopBtn.disabled = stop
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
