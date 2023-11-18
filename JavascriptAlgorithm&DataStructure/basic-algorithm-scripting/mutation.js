// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


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
  