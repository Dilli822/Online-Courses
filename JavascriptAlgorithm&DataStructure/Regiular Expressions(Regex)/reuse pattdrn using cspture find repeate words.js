// // Reuse Patterns Using Capture Groups
// // Say you want to match a word that occurs multiple times like below.

// // let repeatStr = "row row row your boat";
// // You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

// // Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

// // The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

// // The example below matches a word that occurs thrice separated by spaces:

// // let repeatRegex = /(\w+) \1 \1/;
// // repeatRegex.test(repeatStr); // Returns true
// // repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
// // Using the .match() method on a string will return an array with the matched substring, along with its captured groups.
// // Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

// // Get Help
// // Tests

// // Waiting: Your regex should use the shorthand character class for digits.
// // Waiting: Your regex should reuse a capture group twice.
// // Waiting: Your regex should match the string 42 42 42.
// // Waiting: Your regex should match the string 100 100 100.
// // Waiting: Your regex should not match the string 42 42 42 42.
// // Waiting: Your regex should not match the string 42 42.
// // Waiting: Your regex should not match the string 101 102 103.
// // Waiting: Your regex should not match the string 1 2 3.
// // Waiting: Your regex should match the string 10 10 10.
// // Waiting: Your regex should not match the string 42\t42\t42.
// // Waiting: Your regex should not match the string 42  42  42.




// let repeatNum = "42 42 42";
// let reRegex = /change/; // Change this line
// let result = reRegex.test(repeatNum);


let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1(?!.)/; // Change this line
let result = reRegex.test(repeatNum);

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/; // Alternative regular expression
// let result = reRegex.test(repeatNum);


// ^: Anchors the match at the beginning of the string.
// (\d+): Matches and captures one or more digits.
//  \1 \1: Matches two more spaces followed by the same captured group (i.e., the same digits).
// (?!.): Uses a negative lookahead to ensure there are no characters after the third number. This is to make sure the match doesn't extend beyond the third number.
