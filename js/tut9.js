console.log("we are tut9 learning about loops");
//Normally we use loop -> when we want to print in the continously manner

// let a = 34;
// a += 1;
// a++;
// console.log(a);

//for loop ----------------
// for (let i = 0; i < 100; i++){  //to check the condition jb tak condition false nhi hoti tb tak execute hota jaega
//     console.log(i);
// }
// console.log(i);

// While loop ---------------------
// [1) isme declare pehle krte hai, 2) while loop me bss condition aati  hai, 3) increment or decrem]
// let i = 0;
// while (i < 50) {
//   console.log(i);
//   i++;
// }

//=====DO-WHILE LOOP(VERY RARE USE)==================================
//step to declare -> 1) initialise krdo aate hi , 2nd step 'do' me ik baar print krege means agar conddition false bhi hui to
// to ik baar yeh print krega hi krega

// let i = 115;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// {
//   console.log(i);
// }

//Break Vs continue
//Break -> Jab koi bhi loop hota hai usko immeditiate terminate krta hai means dubara execute nhi hoga
//continue -> idr se loop ki agli iteration me chle jao, iteration means k = 0 pehle, then k = 1, then k = 2 these are called iterations

// =======================================================================
// IMPORTANT LOOP TO TRAVERSE ARRAY AND OBJECTS IN JAVASCRIPT
// let arr = [2, 3, 4, 5, 67];  //yeh direct declare bhi hojata hai means without let

// arr.forEach(function (element) {  //it traverse the array only in forward direction one by one
//     console.log(element);

// });

// b) to iterate the objects
let obj = {
  name: "Arsh",
  age: 22,
  sex: "male",
};
for (let key in obj) {
  //this loop iterates on the object and sirf key pr or unki value return krdega
//   console.log(obj[key]); //like array me get krte hai element
    // console.log(`Tthe ${key} of object is ${obj[key]}`);
}
