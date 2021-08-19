const categories = document.querySelector('#categories');

// console.log(categories);

const elementsItem = categories.querySelectorAll('.item');

console.log(`В списке ${elementsItem.length} категории.`);

elementsItem.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent} 
      Количество элементов: ${element.querySelectorAll('li').length}`
  );
});