# goit-js-hw-11-color-switch

Модуль 11 - Таймеры

Скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку
Stop, изменение цвета фона останавливаеться. Для генерации случайного числа
(индекс элемента массива цветов) используется функция randomIntegerFromInterval.

⚠️ const randomIntegerFromInterval = (min, max) => { return
Math.floor(Math.random() \* (max - min + 1) + min); };
