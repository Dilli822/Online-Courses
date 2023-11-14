function bouncer(arr) {
    // Create a copy of the array
    let arrCopy = arr.slice();
  
    console.log(arrCopy);
  
    for (let i = 0; i < arrCopy.length; i++) {
      // Check if the current element is falsy
      if (!arrCopy[i]) {
        // Remove falsy element from the array
        arrCopy.splice(i, 1);
        // Decrement i to account for the removed element
        i--;
      }
    }
  
    return arrCopy;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  