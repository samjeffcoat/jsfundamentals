// advanced arrays

const array = [1, 2, 4, 16];
const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2);
})


console.log('for each', double);

//map- must return in map


const mapArray = array.map((num) => {
  return num * 2
})

console.log('map array', mapArray);

//filter

const filterArray = array.filter(num => num > 5);

console.log(filterArray);


const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 0)


console.log('reduce', reduceArray);