// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputRange.addEventListener('input', onInputRange);

function onInputRange(event) {
  let startValueRange = +event.target.value;

  textSpan.style.fontSize = `${startValueRange + 0.1}px`;
}
