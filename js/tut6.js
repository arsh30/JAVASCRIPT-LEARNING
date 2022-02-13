console.log("welcome this is tut6--learning strings");
const name = "arsh";
const greeting = "good morning";
// console.log(name + greeting);
// console.log(name + " "+ greeting);

let html = "<h1>Welcome this is arsh</h1> " + " <p> this is my paragaraph</p>";

// concat
html = html.concat(" arsh", " HOW ARE you doin"); //isme string pass kr skte hai using comma
console.log(html);
// console.log(html.length); //it is a property not a function
// console.log(html.toLowerCase()); //it is a property not a function
// console.log(html.toUpperCase());
// console.log(html);  //note lowercase and uppercase se

// console.log(html[5]);  //access the character or access by using indexOf
// console.log(html.indexOf('this'));  //it gives the first outcome if it doesnot access it gives -1, and isko hm array  me bhi use kr skte
// console.log(html.lastIndexOf("arsh"));  //it gives last index
// console.log(html.charAt(3));  //it is same like first IndexOf

// let arr = ["arsh", 10, "simran"];
// console.log(arr.includes("simran")); //yeh isko hm html and string dono me use kr skte hai

// substring-> continues character
// console.log(html.substring(1,4));  //it gives 0, ei+ 1 toh yeh ik kam ki dega
// console.log(html.slice(1, 4));  //it also gives substring
// console.log(html.split(" ")); //means yeh space jo hai usko remove krke ik array return krega

//STrng Template
let fruit = "orange";
let fruit2 = "Apple";
let myHtml = `hellow ${name}
 <h1> This is my favourite food ${fruit} but i like ${fruit2} 
 also`;
document.body.innerHTML = myHtml;
