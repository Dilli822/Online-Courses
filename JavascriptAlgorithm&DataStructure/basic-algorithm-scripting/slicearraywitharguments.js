// function chunkArrayInGroups(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// // Example usage:
// const result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
// console.log(result);
// // Output: [["a", "b"], ["c", "d"]]


function chunkArrayInGroups(arr, size) {
    const result = [];
    
    while (arr.length > 0) {
      result.push(arr.splice(0, size));
    }
    
    return result;
  }
  
  // Example usage:
  const result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(result);
  // Output: [["a", "b"], ["c", "d"]]
  
  
  // const originalArray = [1, 2, 3, 4, 5];
  
  // // Using slice to extract a portion of the array
  // const slicedArray = originalArray.slice(1, 4);
  
  // console.log(originalArray);  // Output: [1, 2, 3, 4, 5] (original array is unchanged)
  // console.log(slicedArray);    // Output: [2, 3, 4] (portion from index 1 to 4-1)
  