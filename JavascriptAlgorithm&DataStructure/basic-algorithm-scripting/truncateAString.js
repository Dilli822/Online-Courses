

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Get Help
// Tests

// Passed: truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
// Passed: truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
// Passed: truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
// Passed: truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
// Passed: truncateString("A-", 1) should return the string A....
// Passed: truncateString("Absolutely Longer", 2) should return the string Ab....


function truncateString(str, num) {
    if(str.length > num){
      return str.slice(0, num) + "...";
    } else{
      return str;
    }
  
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncateString("A-", 1));