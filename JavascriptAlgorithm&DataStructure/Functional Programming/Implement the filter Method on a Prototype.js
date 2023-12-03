


// [23, 65, 98, 5, 13].myFilter(item => item % 2) should equal [23, 65, 5, 13].
// Passed: ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") should return ["naomi"].
// Passed: [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) should return [1, 2, 5].
// Passed: Your code should not use the filter method.

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)){
          newArray.push(this[i]);
   
      }
    }
    // Only change code above this line
    return newArray;
  };
  
  [23, 65, 98, 5, 13].myFilter(item => item % 2);
  // [23, 65, 5, 13]
  ["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi");
  [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index); 
  // should return [1, 2, 5].