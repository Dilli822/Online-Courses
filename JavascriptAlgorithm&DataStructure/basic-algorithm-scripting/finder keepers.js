

// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
// Get Help
// Tests

// Passed: findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// Passed: findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
    for (let num = 0; num < arr.length; num++) {
      if (func(arr[num])) {
        return arr[num]; // Return the first element that passes the test.
      }
    }
    return undefined; // Return undefined if no element passes the test.
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // This will correctly return 2
  console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); // This will return 8
  console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); // This will return undefined
  