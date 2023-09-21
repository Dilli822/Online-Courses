

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);



// Your regex alphabetRegex should match 35 items.
// Passed: Your regex alphabetRegex should use the global flag.
// Passed: Your regex alphabetRegex should use the case insensitive flag.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /change/; // Change this line
// let result = alphabetRegex; // Change this line
// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// For example, to match lowercase letters a through e you would use [a-e].

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line