function frankenSplice(arr1, arr2, n) {
    // Create a copy of arr2 to avoid modifying the original array
    console.log("arr1 ", arr1);
     console.log("arr2 ", arr2);
      console.log("n is ", n);
  
    let arr2Copy = arr2.slice();
    console.log("arr2 is sliced", arr2Copy);
  
    // Use splice to insert all elements of arr1 into arr2Copy at index n
    arr2Copy.splice(n, 0, ...arr1);
    // console.log("arr2copy.splice", arr2Copy.splice(n, 0, ...arr1));
   console.log("arr1", arr1);
   console.log("arr2", arr2);
    console.log("final arr2 copy is ", arr2Copy);
  
    return arr2Copy;
  }
  
  // Test cases
  console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // should return [4, 1, 2, 3, 5]
  console.log(frankenSplice([1, 2], ["a", "b"], 1)); // should return ["a", 1, 2, "b"]
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
  console.log(frankenSplice([1, 2, 3, 4], [], 0)); // should return [1, 2, 3, 4]
  