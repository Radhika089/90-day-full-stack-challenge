//?  Topics:
//?  ✔ Objects
//?  ✔ Destructuring
//?  ✔ Spread
//?  ✔ Rest
//?  ✔ Optional Chaining
//?  ✔ Nullish Coalescing

//! Task 1
const product = {
  name: "Mouse",
  price: 999,
  stock: 20,
};
//? Print using destructuring.

// const { name, price, stock } = product;

// console.log(name, price, stock);

//! Task 2

//? Update the price without mutating the original object.

// Expected:

// {
//  name:"Mouse",
//  price:1200,
//  stock:20
// }

const updatedProduct = {
  ...product,
  price: 1200,
};
console.log(updatedProduct);

console.log(product);

//! Task 3
//? Merge:

// const product = {...}
const inventory = {
  warehouse: "Delhi",
  supplier: "HP",
};

const merge = { ...product, ...inventory };
console.log(merge);

//! Task 4
//? Remove one property using destructuring.

// Example:
const { stock, ...rest } = product;
console.log(stock);
console.log(rest);

//! Task 5 ⭐
// Write your own
const products = [
  { name: "Mouse", category: "Electronics" },
  { name: "Keyboard", category: "Electronics" },
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
];
// groupBy()

let groupByCategory = {};

products.forEach((product) => {
  if (!groupByCategory[product.category]) {
    groupByCategory[product.category] = [];
  }

  groupByCategory[product.category].push(product);
});

console.log(groupByCategory);

// using reduce.

const group = products.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }
  acc[curr.category].push(curr);
  return acc;
}, {});

console.log(group);
