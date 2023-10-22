
// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// Get Help
// Tests

// Passed: confirmEnding("Bastian", "n") should return true.
// Passed: confirmEnding("Congratulation", "on") should return true.
// Passed: confirmEnding("Connor", "n") should return false.
// Passed: confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// Passed: confirmEnding("He has to give me a new name", "name") should return true.
// Passed: confirmEnding("Open sesame", "same") should return true.
// Passed: confirmEnding("Open sesame", "sage") should return false.
// Passed: confirmEnding("Open sesame", "game") should return false.
// Passed: confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
// Passed: confirmEnding("Abstraction", "action") should return true.
// Passed: Your code should not use the built-in method .endsWith() to solve the challenge.

function confirmEnding(str, target) {
    // Use the substring method to extract the end of the 'str' with the same length as 'target'
    const endOfString = str.slice(-target.length);
    console.log(endOfString);
  // const str = "pineapple";
  // const target = "apple";
  
  // const endOfString = str.substr(-target.length);
  
  // console.log(endOfString); // Output: "apple"
  
    // Compare 'endOfString' with 'target' to check if they are the same
    return endOfString === target;
  }
  
  // Example usage:
  console.log(confirmEnding("Bastian", "n")); // true
  console.log(confirmEnding("Congratulation", "on")); // true
  console.log(confirmEnding("Connor", "n")); // false
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
  console.log(confirmEnding("He has to give me a new name", "name")); // true
  console.log(confirmEnding("Open sesame", "same")); // true
  console.log(confirmEnding("Open sesame", "sage")); // false
  console.log(confirmEnding("Open sesame", "game")); // false
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false
  console.log(confirmEnding("Abstraction", "action")); // true
  