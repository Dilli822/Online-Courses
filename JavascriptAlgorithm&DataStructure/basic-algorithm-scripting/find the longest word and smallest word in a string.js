function findLongestAndShortestWordLengths(str) {
  // Split the string into words using space as the delimiter.
  const words = str.split(' ');

  // Initialize variables to store the length of the longest and shortest words.
  let longestLength = 0;
  let shortestLength = Infinity; // Set to a large initial value

  // Iterate through the words.
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Remove any non-alphabetic characters (e.g., punctuation) using a regular expression.
    const cleanWord = word.replace(/[^A-Za-z]/g, '');

    // Check if the cleaned word is longer than the current longest word.
    if (cleanWord.length > longestLength) {
      longestLength = cleanWord.length;
    }

    // Check if the cleaned word is shorter than the current shortest word.
    if (cleanWord.length < shortestLength) {
      shortestLength = cleanWord.length;
    }
  }

  return [longestLength, shortestLength];
}

const sentence = "The quick brown fox jumped over the lazy dog";
const [longestLength, shortestLength] = findLongestAndShortestWordLengths(sentence);

console.log(`The length of the longest word is: ${longestLength}`);
console.log(`The length of the shortest word is: ${shortestLength}`);
