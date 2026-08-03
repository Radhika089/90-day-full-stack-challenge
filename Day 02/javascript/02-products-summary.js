// Task 2

const { log } = require("node:console");

// Given
const products = [
  { name: "Mouse", stock: 5 },
  { name: "Keyboard", stock: 20 },
  { name: "Laptop", stock: 3 },
];

// Print
// Mouse -> Low Stock
// Keyboard -> In Stock
// Laptop -> Low Stock

products.forEach((product) => {
  if (product.stock <= 5) {
    console.log(product.name + " -> Low Stock");
  } else {
    console.log(product.name + " -> In Stock");
  }
});
