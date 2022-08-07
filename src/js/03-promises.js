import 'notiflix/dist/notiflix-3.2.5.min.css';
import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onStart);

function onStart(e) {
  e.preventDefault();
  const delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);

  listOfDelay(delay, step, amount);
}

function createPromise(position, delay) {
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function listOfDelay(delay, step, amount) {
  let stepDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, stepDelay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    stepDelay += step;
  }
}
