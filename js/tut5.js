console.log('this is tut 5');
/*
if we want to convert the variable into other variable means we can do this with type conversion or type casting

JavaScript Type Conversion:- 
When we convert one data type to another data type, this process is called type conversion. In JavaScript, there are two types of type conversion.

2)if it is String it is in black format and when it is in Number,it's in blue color
*/
//explicit conversion
let myVar;
myVar = 34;  //comes in blue color means a number
myVar = String(34); //convert it in string
// console.log(myVar);

let booleanVar = String(true);//convert it in string
// console.log(booleanVar);

let date = String(new Date()) //convert it in string
// console.log(date, typeof date);

let arr = String([1, 2, 3, 4, 5]); //convert it in string
// console.log(arr.length, typeof arr);  //jb string me convert krte hai so uspr hum function bhi lga skte h string wale

let i = 475;
// console.log(i, typeof i);
// console.log(i.toString());  //we can convert the string also in this format

let stri = "1234";
// console.log(stri);
stri = Number("1234");
stri = Number("123ede21");  //Nan - > Not a Number
stri = Number([1, 2, 3, 4, 5]);  //nan -> not a number
// console.log(stri, typeof stri);

let number = 456.60606;
// number = parseInt(number);  //convert this in number
number = parseFloat(number);
console.log(number, typeof number);


//==============================================================================
/*
Type coerciosn- >
Implicit Conversion:-
Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.

Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation. Here is an example:
*/
let res;
res = '3' + 4; 
// console.log(res) // "34"
res = '9' + true; 
// console.log(res); // "9true"
res= '0' + null; 
// console.log(res); // "0null"

// Conversion To Number:- Numeric string used with operators like  - , / , * returns number type
let ans;
ans = '4' - '4'; 
console.log(ans); // 0
ans = '4' * 5;  // return a number
ans = '4' + 5;  //when we add it return a string
ans = '4' - 5;
ans = '4' / 5;
console.log(ans); // 20

// // Boolean Conversion to Number:- If we use Boolean, true is considered as 1 and false is considered as 0.
// let res;
// res = '5' - true;
// console.log(res); // 4
// res = 10 + false;
// console.log(res); // 10

