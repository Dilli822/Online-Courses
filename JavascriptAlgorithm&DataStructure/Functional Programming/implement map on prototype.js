

// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.


// [23, 65, 98, 5, 13].myMap(item => item * 2) should equal [46, 130, 196, 10, 26].
// Passed: ["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()) should return ["NAOMI", "QUINCY", "CAMPERBOT"].
// Passed: [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) should return [1, 2, 5, 2, 1].
// Passed: Your code should not use the map method.

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };
  
  // Example usage:
  const originalArray = [23, 65, 98, 5, 13];
  const doubledArray = originalArray.myMap(item => item * 2);
  console.log(doubledArray); // Output: [46, 130, 196, 10, 26]
  
  // Example usage:
  const y = [1, 1, 2, 5, 2];
  const ys = y.myMap((element, index, array) => array[(index + 1) % array.length] || array[0]);
  console.log(ys);