const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 6,
  oranges: 10,
  grapes: 1000
}
//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}



//2
basket.forEach(item=> {
  console.log(item)
});



// for of
// iteration - arrays, strings
for (item of basket) {
  console.log(item);
}




// for in
for (item in detailedBasket) {
  console.log(item);
}