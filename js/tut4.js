// note in javascript> EVERYTHING IS OBJECT, WE CAN CHECK USING typeof

// Primitive data types

// String
let name = "harry";
console.log("My string is " + name);
console.log("Data type is " + typeof name);

// Numbers
let marks = 34.4;
console.log("Data type is " + typeof marks);

// Boolean
let isDriver = true;
console.log("Data type is " + typeof isDriver);

// Null
let nullVar = null;
console.log("Data type is " + typeof nullVar);

// Undefined
let undef = undefined;
console.log("Data type is " + typeof undef);

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + typeof myarr);

// Object Literals
let stMarks = {
  harry: 89,
  Shubham: 36,
  Rohan: 34,
};
console.log(typeof stMarks);

function findName() {}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);

//==================================================================
/* PRIMITIVE DATA TYPE:->
Primitive data types are numbers, Booleans, strings, undefined, null, and symbol. Primitive data types are the basic or common data types in JavaScript.
*/
let name = "Harry";
let isMale = true;

/*
Reference in JavaScript are datatypes based on primitive. Like Objects, Arrays, and Functions. Everything is JavaScript is either an Object or Primitive datatype. When we create an object, that value is not directly assigned to the variable
*/
var student = {
  name: "Harry",
  age: 20,
}; //object
var sports = ["Tennis", "Cricket"]; //array
