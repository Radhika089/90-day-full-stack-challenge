// Task 3

const { log } = require("console");

// Group products by category.
const products = [
  {
    name: "Mouse",
    category: "Electronics",
  },
  {
    name: "Laptop",
    category: "Electronics",
  },
  {
    name: "Chair",
    category: "Furniture",
  },
  {
    name: "Table",
    category: "Furniture",
  },
  {
    name: "Sofa",
    category: "Furniture",
  },
  {
    name: "Phone",
    category: "Electronics",
  },
];
// Example

// Electronics
//  - Mouse
//  - Laptop

// Furniture
//  - Chair

let groupedProducts = {};

products.forEach((product) => {
  if (!groupedProducts[product.category]) {
    groupedProducts[product.category] = [];
  }

  groupedProducts[product.category].push(product.name);
});

console.log(groupedProducts);

// try this
// Electronics: [
//   { name: "Mouse", category: "Electronics" }
// ]
let grouped = {};

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const category = product.category;

  if (!grouped[category]) {
    grouped[category] = [];
  }
  grouped[category].push(product);
}

console.log(grouped);
