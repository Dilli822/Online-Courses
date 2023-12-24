
// Currying:
// Currying is the process of converting a function
//  that takes multiple arguments into a series of functions 
//  that each take a single argument. The curried function returns
//   a new function for each argument until it receives all the necessary
//    arguments and finally evaluates the original function.

// Partial Application:
// Partial application is a similar concept where you fix a number 
// of arguments of a function and generate a new function that takes 
// the remaining arguments. It is different from currying in that
//  it fixes arguments from left to right.


function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
  
  // Usage of the curried function
  const result = add(1)(2)(3);
  console.log(result); // Outputs: 6
  
  
  // // Original function
  // function multiply(x, y, z) {
  //   return x * y * z;
  // }
  
  // // Partial application
  // function partiallyApply(fn, x) {
  //   return function(y, z) {
  //     return fn(x, y, z);
  //   };
  // }
  
  // // Usage of the partially applied function
  // const multiplyByTwo = partiallyApply(multiply, 2);
  // const result = multiplyByTwo(3, 4);
  // console.log(result); // Outputs: 24
  