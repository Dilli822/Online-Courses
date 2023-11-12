function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, char => char.toUpperCase());
}


// toLowerCase() to convert the entire string to lowercase and then using the regular expression /(^|\s)\w/g to match the first letter of each word.

// Test cases
console.log(titleCase("I'm a little tea pot")); // Output: I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));      // Output: Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Output: Here Is My Handle Here Is My Spout


/*
return str.toLowerCase().replace(/(^|\s)\w/g, char => char.toUpperCase());
str.toLowerCase(): This part converts the entire string (str) to lowercase using the toLowerCase() method. This ensures that all characters in the string are in lowercase.
.replace(/(^|\s)\w/g, char => char.toUpperCase()): This part uses the replace method along with a regular expression to find and replace patterns in the string.
/(^|\s)\w/g: This regular expression looks for the following pattern:
(^|\s): Either the start of the string (^) or a whitespace character (\s).
\w: A word character (alphanumeric or underscore).
g: This flag stands for global, meaning it will match all instances in the string, not just the first one.
char => char.toUpperCase(): For each match found, this function is called, and it converts the matched character to uppercase using toUpperCase(). 
 * 
 * 
 * 
 */