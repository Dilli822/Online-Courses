// Skip to content



// Menu
// dilli708's avatar
// JavaScript Algorithms and Data Structures
// Regular Expressions
// Check For Mixed Grouping of Characters
// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

// Then check whether the desired string groups are in the test string by using the test() method.

// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// The test method here would return true.
// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

// Get Help
// Tests

// Passed: Your regex myRegex should return true for the string Franklin D. Roosevelt
// Passed: Your regex myRegex should return true for the string Eleanor Roosevelt
// Passed: Your regex myRegex should return false for the string Franklin Rosevelt
// Passed: Your regex myRegex should return false for the string Frank Roosevelt
// Passed: Your regex myRegex should return false for the string FranklinRoosevelt
// Passed: Your regex myRegex should return false for the string EleanorRoosevelt
// Passed: You should use .test() to test the regex.
// Passed: Your result should return true.

let myString = "Eleanor Roosevelt";
// let myRegex = /(Eleanor | Franklin D\.)Roosevelt/g; // Change this line
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/g; // 
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works