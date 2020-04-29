// Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

// TIP: You might need a loop to solve this!

// Here's an example of the output and how to call the function that you will write:

// console.log(laugh(3));
// Prints: "hahaha!"

function laugh(num) {

  // defining a variable to put the final result of the function in (to return that variable in side the function, but adfter the process : here is after the for loop)
  var result = "";

  for (i = 0; i < num; i++) {
    result = result + "ha";
  }

  return result + "!";
}

console.log(laugh(3));