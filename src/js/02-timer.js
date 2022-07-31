import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer.targetTime = selectedDates[0].getTime();
  },
};

flatpickr('#datetime-picker', options);

const refs = {
  startBtn: document.querySelector('[data-start]'),
  calendar: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

class Timer {
  constructor({ updateTimer }) {
    this.intervalID = null;
    this.isActive = false;
    this.targetTime;
    this.updateUIOnTick = updateTimer;
  }

    onStart() {
        if (this.targetTime < Date.now()) {
          window.alert('Please choose a date in the future');
      }
    this.isActive = true;
    this.enableChoose(this.isActive);
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetTime - currentTime;
      if (deltaTime < 1000) {
        clearInterval(this.intervalID);
        this.enableChoose(this.isActive);
      }
      this.setTime(deltaTime);
    }, 1000);
  }
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }
  setTime(time) {
    const convertedTime = this.convertMs(time);
    this.updateUIOnTick(convertedTime);
  }
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  enableChoose(isEnabled) {
    refs.startBtn.disabled = isEnabled;
    refs.calendar.disabled = isEnabled;
  }
}

const timer = new Timer({ updateTimer });

refs.startBtn.addEventListener('click', timer.onStart.bind(timer));

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
