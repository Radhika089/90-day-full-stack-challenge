// Task 4

// Remove duplicate categories.
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

let categories = [];

for (let i = 0; i < products.length; i++) {
  if (!categories.includes(products[i].category)) {
    categories.push(products[i].category);
  }
}
console.log(categories);
