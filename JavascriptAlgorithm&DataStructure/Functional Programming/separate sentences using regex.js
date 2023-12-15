

// Your code should use the split method.
// Passed: splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
// Passed: splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
// Passed: splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].

function splitify(str) {
    // Replace hyphens, commas, full stops, and spaces with spaces
    // Then, split on one or more whitespace characters
    const result = str.replace(/[,-.\s]/g, ' ').split(/\s+/);
    console.log(result);
    return result;
  }
  
  // Examples:
  splitify("Hello World,I-am code");
  splitify("Earth-is-our home");
  splitify("This.is.a-sentence");
  