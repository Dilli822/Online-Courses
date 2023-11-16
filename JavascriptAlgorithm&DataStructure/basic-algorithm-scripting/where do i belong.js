// function getIndexToIns(arr, num) {
//   // Insert the number into the array
//   arr.push(num);

//   // Sort the array in ascending order
//   arr.sort(function(a, b) {
//     return a - b;
//   });

//   // Find the index of the inserted number
//   return arr.indexOf(num);
// }

// console.log(getIndexToIns([40, 60], 50)); // Output: 1


function getIndexToIns(arr, num) {
    // Filter the array to keep only the elements less than num
    let smallerValues = arr.filter(value => value < num);
  
    // The index at which num should be inserted is the length of the filtered array
    return smallerValues.length;
  }
  
  console.log(getIndexToIns([40, 60], 50)); // Output: 1
  