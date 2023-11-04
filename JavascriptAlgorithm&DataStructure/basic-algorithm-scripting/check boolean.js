


// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.
// Get Help
// Tests

// Waiting: booWho(true) should return true.
// Waiting: booWho(false) should return true.
// Waiting: booWho([1, 2, 3]) should return false.
// Waiting: booWho([].slice) should return false.
// Waiting: booWho({ "a": 1 }) should return false.
// Waiting: booWho(1) should return false.
// Waiting: booWho(NaN) should return false.
// Waiting: booWho("a") should return false.
// Waiting: booWho("true") should return false.
// Waiting: booWho("false") should return false.

function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  console.log(booWho(true));         // true
  console.log(booWho(false));        // true
  console.log(booWho([1, 2, 3]));    // false
  console.log(booWho([].slice));     // false
  console.log(booWho({ "a": 1 }));   // false
  console.log(booWho(1));            // false
  console.log(booWho(NaN));          // false
  console.log(booWho("a"));          // false
  console.log(booWho("true"));       // false
  console.log(booWho("false"));      // false
  