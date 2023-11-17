function mutation(arr) {
    // Convert both strings to lowercase for case-insensitive comparison
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();
  
    for (let i = 0; i < str2.length; i++) {
      // Check if each letter in str2 is present in str1
      if (str1.indexOf(str2[i]) === -1) {
        return false; // If any letter is not found, return false
      }
    }
    return true; // All letters in str2 are present in str1
  }
  
  // Examples:
  console.log(mutation(["hello", "Hello"])); // Output: true
  console.log(mutation(["hello", "hey"]));   // Output: false
  console.log(mutation(["Alien", "line"]));   // Output: true
  