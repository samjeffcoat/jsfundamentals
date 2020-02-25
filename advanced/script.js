const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet)
  }

}

const newFunc = first();
newFunc();

// closures - a function ran. the function executed. IT's never going to execute again.
//But its going to remember that ther are refernces to those variables
//so the child scope always has acccess to the parent scope.

//children always have access to parent scope, but parents dont have access to children.

// currying

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3);
curriedMultiply(4)(3);
const multiplyBy5 = curriedMultiply(5);