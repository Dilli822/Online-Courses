
// function sumAll(arr) {
//     return 1;
//   }
  
//   sumAll([1, 4]);


function sumAll(arr) {
    // Find the minimum and maximum values in the array
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
  
    let sum = 0;
    // Loop through the range of numbers and add them up
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4])); // Output: 10
  console.log(sumAll([4, 1])); // Output: 10
  console.log(sumAll([5, 10])); // Output: 45
  console.log(sumAll([10, 5])); // Output: 45
  