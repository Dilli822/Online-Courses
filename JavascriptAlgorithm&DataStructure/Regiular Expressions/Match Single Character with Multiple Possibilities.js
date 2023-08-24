// You should find all 25 vowels.
// Passed: Your regex vowelRegex should use a character class.
// Passed: Your regex vowelRegex should use the global flag.
// Passed: Your regex vowelRegex should use the case insensitive flag.
// Passed: Your regex should not match any consonants.



/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
*/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line