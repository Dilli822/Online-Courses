// Your function incrementer should not change the value of fixedValue (which is 4).
// Failed: Your incrementer function should return a value that is one larger than the fixedValue value.
// Passed: Your incrementer function should return a value based on the global fixedValue variable value.
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  if (fixedValue == 4) {
    return fixedValue + 1;
  } else {
    console.log(fixedValue + 1);
    return fixedValue + 1;
  }
  // Only change code above this line
}

console.log(incrementer()); // This will log 5
console.log(fixedValue); // This will log 4, as the global variable is not changed by the function
