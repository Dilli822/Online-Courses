
// ta Structures
// Regular Expressions
// Positive and Negative Lookahead
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

// Lookaheads are a bit confusing but some examples will help.

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex);
// noquit.match(qRegex);
// Both of these match calls would return ["q"].

// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

// Get Help
// Tests

// Passed: Your regex should use two positive lookaheads.
// Passed: Your regex should not match the string astronaut
// Passed: Your regex should not match the string banan1
// Passed: Your regex should match the string bana12
// Passed: Your regex should match the string abc123
// Passed: Your regex should not match the string 12345
// Passed: Your regex should match the string 8pass99
// Passed: Your regex should not match the string 1a2bcde
// Passed: Your regex should match the string astr1on11aut



// let sampleWord = "astronaut";
// let pwRegex =  /change/;
// let result = pwRegex.test(sampleWord);
// console.log(result);


// (?=\w{6}): This is the first positive lookahead assertion. 
// It checks if the string has exactly 6 word characters (letters, digits, or underscores). \w represents a word character, 
// and {6} specifies that there should be exactly 6 of them.
// (?=\w*\d{2}): This is the second positive lookahead assertion. 
//It checks if the string contains at least two consecutive digits (\d). The \w* part allows 
//for zero or more word characters before the two consecutive digits.

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result);