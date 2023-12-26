// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// translatePigLatin("california") should return the string aliforniacay.
// Waiting: translatePigLatin("paragraphs") should return the string aragraphspay.
// Waiting: translatePigLatin("glove") should return the string oveglay.
// Waiting: translatePigLatin("algorithm") should return the string algorithmway.
// Waiting: translatePigLatin("eight") should return the string eightway.
// Waiting: Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Waiting: Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.


function translatePigLatin(str) {
    // Check if the word contains vowels
    if (!/[aeiou]/i.test(str)) {
      return str + "ay";
    }
  
    // Check if the word begins with a vowel
    if (/^[aeiou]/i.test(str)) {
      return str + "way";
    } else {
      // Find the index of the first vowel
      const vowelIndex = str.search(/[aeiou]/i);
  
      // Move the consonant cluster to the end and add "ay"
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }
  
  // Example usage:
  console.log(translatePigLatin("consonant")); // Output: "onsonantcay"
  