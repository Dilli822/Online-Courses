


// Passed: diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// Failed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// Failed: ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// Failed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// Failed: ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// Failed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// Failed: ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// Failed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// Failed: [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// Failed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// Failed: [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// Failed: [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// Failed: [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// Failed: [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// Failed: [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.


// function diffArray(arr1, arr2) {
//     const newArr = [];
//     return newArr;
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function diffArray(arr1, arr2) {
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item));
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item));
  
    return [...uniqueArr1, ...uniqueArr2];
  }
  
  // Example usage:
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));  // ["pink wool"]
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));  // ["diorite", "pink wool"]
  console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));  // []
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // [4]
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));  // ["piglet", 4]
  console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));  // ["snuffleupagus", "cookie monster", "elmo"]
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));  // [
  