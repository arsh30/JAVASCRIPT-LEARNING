console.log('hello this tut 23');
// math OBJECT IN JAVASCRIPT

let x = 3;
let y = 6;
let z
z= x + y;
z = x - y;
z = x * y;
z = x / y;
// console.log(z);  //undefined because we did not give any value to z

// ========================================
// EXPLORING MATH Object
z = Math;  //isme sab hoga maths ke function absolute value,roundoff
z = Math.PI;
z = Math.E;
z = Math.round(5.4);   //round  means .5 se niche jaege toh niche ki value dikhaega
z = Math.ceil(5.1);  //ceil means chat agar 5.3 bhi kre to bhi 6 dega
z = Math.floor(5.9);  //it will give the value lowest value wheter it is 5.9 it is gives lower value ie 5
z = Math.abs(-5);  //absolute value -> means it will convert the negative value to positive and if positive it will remain same
z = Math.sqrt(49);
z = Math.pow(2, 3);  //2 raised to the power 3 ie 8
z = Math.min(3, 198, 210, 3123);
z = Math.max(3, 198, 210, 3123);
 //generate random no
z = Math.random();
// a = (0,1)
z = 100 * Math.random();
z = 50 + (100 - 50) * Math.random();
// if we want to lie between 0 to 100 , so we have to multiply (a * 100) =  0,100
// if we want to print in the range 10 to 100, so we have to multiply (10 + a* (100 - 10))
console.log(z);

//math.flor value eg
/*
3
2.8
2
1
0
-1
-2.7  agar -2.7 hai to it will give the lower value ie 3
-3
*/

    