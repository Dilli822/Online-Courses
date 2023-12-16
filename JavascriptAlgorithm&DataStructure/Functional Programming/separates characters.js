

// Your code should use the join method.
// Passed: Your code should not use the replace method.
// Passed: sentensify("May-the-force-be-with-you") should return a string.
// Passed: sentensify("May-the-force-be-with-you") should return the string May the force be with you.
// Passed: sentensify("The.force.is.strong.with.this.one") should return the string The force is strong with this one.
// Passed: sentensify("There,has,been,an,awakening") should return the string There has been an awakening.
function sentensify(str) {
    if (str.includes(".")) {
        // Only change code below this line
        let wordsArray = str.split(".");
        // Join the words into a sentence with spaces
        let sentence = wordsArray.join(" ");
        return sentence;
    } else if (str.includes("-")) {
        // Join the words into a sentence with spaces
        let wordsArray = str.split("-");
        let sentence = wordsArray.join(" ");
        console.log(sentence);
        return sentence;
    } else if (str.includes(",")) {
        // Join the words into a sentence with spaces
        let wordsArray = str.split(",");
        let sentence = wordsArray.join(" ");
        return sentence;
    }
    // Only change code above this line
}

sentensify("May-the-force-be-with-you");
