


// reduce method reduces all the array into a single array
// map transforms existing array into new defined array
// filter only keep the belonged elements inside the array

// where as slice only cut the elements and stored in a new array
// splice replace the existing array itself 


// const squareList = arr => {
//     // Only change code below this line
//     return arr;
//     // Only change code above this line
//   };
  
// Passed: squareList should be a function.
// Passed: for, while, and forEach should not be used.
// Passed: map, filter, or reduce should be used.
// Passed: The function should return an array.
// Passed: squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
// Passed: squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].

const squareList = arr => {
    // Only change code below this line
    return arr.filter(num => num > 0 && num % 1 === 0).map(num => num * num);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);