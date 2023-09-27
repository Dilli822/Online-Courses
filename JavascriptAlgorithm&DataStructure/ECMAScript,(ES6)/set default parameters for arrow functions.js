
// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

// const greeting = (name = "Anonymous") => "Hello " + name;

// console.log(greeting("John"));
// console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// The result of increment(5, 2) should be 7.
// Passed: The result of increment(5) should be 6.
// Passed: A default parameter value of 1 should be used for value.

// Only change code below this line
const increment = (number, value = 1) => number + value;
console.log(increment(5,2));
console.log(increment(5));
// Only change code above this line