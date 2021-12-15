/*
VARIABLES LET,CONST VAR

As we know, that variable is the name of the storage location. When we want to save some data, we store it in a variable
Initially, we used to declare variables with a keyword "var". However, ES6 has brought a new variable declaration keyword, "let" and "const."

****but now we mostly used let and const.

Following are some rules while declaring a JavaScript variable:

A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign. 
A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.
JavaScript variables are case sensitive. For example, a and A are different variables.


VAR:->
Before ES6, var were used to declare the variables. 
2) We can change its value, and it can be redeclared in the same scope. Scope means where these variables are available for use. There are two types of scope, local and global.
3) Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.
*/
// var name = 25;
// var name = "Arsh"; // String
// var developer = true;// Boolean
// var location = null; // Null
// var task; // undefined

//note when we declare the variable automatically it assign the value default value is undefined;
// =========================================================

/* 
LET -> It is used in ES6. It has scope constraints.It has a block level scope
means they are only visible to the same block where it has declared.
2)We can change their values, but they cannot be redeclared in the same scope, unlike var. 
*/

// let age = 25; // Number
// let name = "John"; // String
// let developer = true;// Boolean
// let location = null; // Null
// let task; // undefined
// let age= 50;
// console.log(age); // SyntaxError: identifier "age" has already been declared.

// ===========================================================================
/*CONST -> Const is also introduced in ES6.whose value cannot and will not be changed throughout the program.(means jo ik bar bnadiya value vohi same rhegi throughout the program)

2) We use const when we are sure a variable will not be redeclared. The characteristic of const and their declarations are block-scoped, and they cannot be updated or redeclared.
3)redeclaration are not allowed and reinstialed are not allowed. it only read the property

*/
// const age = 20;
// const job = 'developer';
// // const name; // SyntaxError: missing initializer
// const num = 10;
//  num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property

// =====================================================================================
var city = "Delhi";
{
  let city = "Rampur"; //is let ka apne upr 1st curly baracket tak hai
  city = "ahemdabad"; //reinstailed is possible but redeclare the variable is not possible
  console.log(city);
}
console.log(city); //Javascript run to bottom
const arr1 = [12, 23, 12, 53, 3];
// arr1.push(45);
console.log(arr1);
// =================================

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
