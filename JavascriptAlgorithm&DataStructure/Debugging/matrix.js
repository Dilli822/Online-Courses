// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     // Adds the m-th row into newArray

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);


// Passed: Your code should set the matrix variable to an array holding 3 rows of 2 columns of zeroes each.
// Passed: The matrix variable should have 3 rows.
// Passed: The matrix variable should have 2 columns in each row.
// Passed: zeroArray(4,3) should return an array holding 4 rows of 3 columns of zeroes each.


function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
  
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = []; // Initialize a new row in each iteration of the outer loop
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  