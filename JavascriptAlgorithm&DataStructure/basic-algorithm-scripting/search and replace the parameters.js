

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
// Get Help
// Tests

// Passed: myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
// Passed: myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
// Passed: myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
// Passed: myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
// Passed: myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
// Passed: myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.


function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");