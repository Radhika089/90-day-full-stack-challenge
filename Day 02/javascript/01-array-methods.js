// Task 1

// Given
const prices = [100, 200, 150, 300];

// Find

// total price

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(total);

// average

let average = total / prices.length;
console.log(average);

// highest

let highest = prices[0];

for (let i = 0; i < prices.length; i++) {
  if (highest < prices[i]) {
    highest = prices[i];
  }
}
console.log(highest);

// lowest
let lowest = prices[0];

for (let i = 0; i < prices.length; i++) {
  if (lowest > prices[i]) {
    lowest = prices[i];
  }
}
console.log(lowest);
