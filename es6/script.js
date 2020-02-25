// let and const

// const cannot be updated


// destructuring

//template literal

const name = "Sam";
const age = 37;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What is your favorite pet?. ${pet}`;


// default arguments

function greet(name='', age = 30, pet = 'cat') {
  return `Hello ${name} you seem to be ${age-10}. What is your favorite pet?. ${pet}`;
}