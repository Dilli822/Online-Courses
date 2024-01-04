function uniteUnique(...arrays) {
    const uniqueValues = [];
  
    // Iterate over each array
    for (const array of arrays) {
      // Iterate over each element in the current array
      for (const element of array) {
        // Check if the element is not already in the uniqueValues array
        if (!uniqueValues.includes(element)) {
          // If not, add it to the uniqueValues array
          uniqueValues.push(element);
        }
      }
    }
  
    return uniqueValues;
  }
  
  // Test cases
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
  console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
  console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [1, 3, 2, 5, 4, 6]
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
  


//   In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.