const itemsUl = [...document.querySelectorAll(".item")];
// const itemsUl = document.querySelectorAll("#categories");

console.log(itemsUl);
const itemUl = itemsUl.map(item => item.li);
console.log(itemUl);