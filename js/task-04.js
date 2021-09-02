// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const ref = {
  btnDecrementValue: document.querySelector('[data-action="decrement"]'),
  btnIncrementValue: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

ref.btnIncrementValue.addEventListener('click', increment);
ref.btnDecrementValue.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  renewalValue();
}

function decrement() {
  counterValue -= 1;
  renewalValue();
}

function renewalValue() {
  ref.valueEl.textContent = counterValue;
}
