const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredients = document.querySelector('#ingredients');
console.log(ingredients);
const ingred = document.querySelector('#ingred-item');
console.log(ingred);


{/* <body>
<div><h1>Привет!</h1></div>
<div id='org_div1'>Текст выше сгенерирован автоматически.</div>
</body> */}


  document.body.onload = addElement;
  let newLi = null;

  function addElement() {

    
    let newLi = document.createElement('li');
    
    // ingrid = ingredients.map(el => el.innerHTML);
    for (let ingred of ingredients) {
      // ingredients.innerHTML = `<li id="ingred-item">${ingred}</li>`;
      console.log(ingred)
    }
    // ingredients.insertAdjacentHTML(afterbegin, newLi);
    // Добавляем только что созданный элемент в дерево DOM

    // my_li = document.getElementById("org_div1");
    document.body.insertBefore(newLi);
  }