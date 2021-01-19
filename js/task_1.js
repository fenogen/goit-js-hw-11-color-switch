
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const button = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
}

let interval;
button.stop.disabled = true;

// -------------------------------> Взяли шаблон рандомной ф-и: 

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// -------------------------------> Создали ф-ю добавления атрибута "style" с помощью интервала

const fnColorStart = () => {
    interval = setInterval(() => {
        let idx = randomIntegerFromInterval(0, 5);
        bodyRef.setAttribute('style', `background-color: ${colors[idx]}`);
    }, 1000);
    button.start.disabled = true;
    button.stop.disabled = false;
    console.log('START!');
    return interval;
}

// -------------------------------> Создали ф-ю остановки интервала
const fnColorStop = () => {
    clearInterval(interval);
    button.start.disabled = false;
    button.stop.disabled = true;
    console.log('STOP!');
}

// -------------------------------> Добавили слушателя событий
button.start.addEventListener('click', fnColorStart);
button.stop.addEventListener('click', fnColorStop);

