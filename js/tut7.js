console.log("hello this is tut7 Arrays");
let marks = [34, 21, 10, 21];
const fruits = ["orange", "apple", "pineapple"];
const mixed = ["str", 89, [3, 5]];

const arr = new Array(10, 20, [20, 40, 50]);
// console.log(arr);
// console.log(marks);
// console.log(fruits);
// console.log(mixed);

// console.log(arr.length);
console.log(Array.isArray(arr)); //it return true or false;
arr[0] = "arsh";
let arrElement = arr[0];
console.log("element", arrElement);
console.log(arr);
