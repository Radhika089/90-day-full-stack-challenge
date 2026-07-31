const students = [
  { name: "Radhika", marks: 92 },
  { name: "Aman", marks: 81 },
  { name: "Priya", marks: 88 },
  { name: "Rahul", marks: 75 },
];

// Using loops:
// Find the topper.
// Find the average marks.
// Print only students with marks greater than 85.

// Bonus: Solve the same again using filter() and reduce() after you're done with loops.

let topper = students.reduce((acc, curr) => {
  return curr.marks > acc ? curr : acc;
});

console.log(topper);

let totalMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

let averageMarks = totalMarks / students.length;

console.log(averageMarks);

let greaterThan85 = students.filter((val) => {
  return val.marks > 85;
});

console.log(greaterThan85);
