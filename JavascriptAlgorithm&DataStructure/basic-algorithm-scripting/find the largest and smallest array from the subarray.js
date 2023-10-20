function smallestOfFour(arr) {
    // Initialize an array to store the smallest numbers.
    let smallestNumbers = [];
  
    // Iterate through the sub-arrays.
    for (let i = 0; i < arr.length; i++) {
      let subArray = arr[i];
      let smallest = subArray[0];
  
      // Iterate through the elements in each sub-array.
      for (let j = 1; j < subArray.length; j++) {
        // if (subArray[j] < smallest) {.   // uncomment to find the largest
        if (subArray[j] > smallest) {  // uncomment or comment to find the smallest
          smallest = subArray[j];
        }
      }
  
      // Add the smallest number from the current sub-array to the result array.
      smallestNumbers.push(smallest);
    }
  
    return smallestNumbers;
  }
  
  const result = smallestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]);
  
  console.log(result); // This will return [1, 13, 32, 1]
  