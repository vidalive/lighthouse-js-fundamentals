

// const amounts = [61.00, 52.25, 112.99, 5.00];

// looping via traditional for loop way

// let total = 0;

// for (let i = 0; i < amounts.length; i++) {

//   total += amounts[i];
// }

// console.log('Order total is: ', total);

///////////////////////////////////////////////

// looping via for...of 
// we use this way bcoz we might not know the length of an array but we want to loop over it. 
// The for..of loop is only really useful for going from beginning to end of an array. If instead we need to loop through an array in a different order (e.g. backwards, or skipping every other element), then we'll need to use a traditional for loop instead.

// const amounts = [61.00, 52.25, 112.99, 5.00];

// let total = 0;

// for (amount of amounts) {

//   total = total + amount;
// }

// console.log('your total is ', total);

// //////////////////////////////////////////////////////////////////////////////////////////////

// // another example of for...of loop

// let data = [1, 2, 3, 4];

// for (let number of data) {

//   console.log(number);
// }

let name = 'Vida';

for (character of name) {

  console.log(character);

}