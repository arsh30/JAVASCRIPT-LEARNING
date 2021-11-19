// DATE AND OBJECT DATE AND TIME
console.log("hello this tut 24");

//JAVASCRIPT ME: in js we have date name object;
let today = new Date();
// console.log(typeof today);
let otherDate = new Date('8-4-2003 12:04:11');
otherDate = new Date('June 13 1976');
otherDate = new Date('09/16/1986');  //mm/dd/yy
console.log(otherDate);
let a;
 a = otherDate.getDay();  //0-> sunday,1 monday 2 - tues
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getTime();  //time hai yeh full year ka in seconds
console.log(a);
otherDate.setDate(23);
console.log(otherDate);
