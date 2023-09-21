
// Regular Expressions
// Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// The replace call would return the string The sky is blue..

// You can also access capture groups in the replacement string with dollar signs ($).

// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// The replace call would return the string Camp Code.
// Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

// Get Help
// Tests

// Passed: You should use .replace() to search and replace.
// Passed: Your regex should change the string one two three to the string three two one
// Passed: You should not change the last line.
// Passed: fixRegex should use at least three capture groups.
// Passed: replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).


let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Updated regular expression to match three words
let replaceText = "$3 $2 $1"; // Updated replacement string to reverse the order
let result = str.replace(fixRegex, replaceText);

console.log(result); // Output will be "three two one"

// (\w+): This is a capturing group that matches and captures one or more word characters (letters, digits, or underscores). It's represented by $1 in the replacement string.
// \s: This matches a single whitespace character (e.g., space, tab, newline).
// (\w+): Another capturing group that matches and captures one or more word characters. It's represented by $2 in the replacement string.
// \s: Another whitespace character.
// (\w+): Yet another capturing group that matches and captures one or more word characters. It's represented by $3 in the replacement string.
