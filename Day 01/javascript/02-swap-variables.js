let a = 10;
let b = 20;

a = a * b; // 200
b = a / b; // 10
a = a / b; //20
console.log("Original value of a  is 10, By swapping:", a);
console.log("Original value of b is 20, By swapping:", b);

//  With variable

let a = 10;
let b = 20;
let temp;

temp = b; // 20

b = a; // 10

a = temp;

console.log(a, b);
