// Task 5

const { log } = require("console");

// Redo Task 1 using

// map
// filter
// reduce

// Given
const prices = [100, 200, 150, 300];

// Find

// total price

let total = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);

//average

let average = total / prices.length;
console.log(average);

// highest

let highest = prices.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});
console.log(highest);
//lowest
let lowest = prices.reduce((acc, curr) => {
  if (acc < curr) {
    return acc;
  } else {
    return curr;
  }
});
console.log(lowest);
