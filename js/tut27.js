console.log("this is tut 27");

/*JAVASCRIPT is a object oriented language. 
eg: let h = {
    name: "arsh"
}
typeof h  --> it shows object 
[object is unity in which we have properties methods-> . we create object because in real when we write code toh code se hm kisi na kisi ke through use kr skte hai]

IMPORT : agar hmare pass template hai ie Object ik usse hm sari cars bana sakte hai
 */

//object literals for creating objects
let car = {
  //we make car a object
  name: "maruti 800",
  topSpeed: 89,
  run: function run() {
    //passes the function
    console.log("car is running");
  },
};
// console.log(car);
// console.log(car.run());  //car is running op is undefined cause yeh return nahi krra hai kuch

// console.log(car.name);  //(.) DOT - > we can use properties in object by using (.) DOT

// CONSTRUCTORS========
// CONSTRUCTOR: it is a template through which we create objects

// we have already seen constructor like these:
// new Date();

// =================================
//CREATING A CONSTRUCTOR FOR CARS
function GeneralCar(givenName, givenSpeed) {
  //we make the function we need his name and topspeed. it is constructor jo ek car object bnaega
  // jo bhi name denge vo set krdega

  this.name = givenName; //IT is a constructor which has purpose to make the GENERAL car type object
  this.topSpeed = givenSpeed; //topspedd ik function bnaya jiske aage : jo hm chahte hai vo aaye
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}
//we can use the above constructor by using "new" keyWord
car1 = new GeneralCar("Nissan", 180);
console.log(car1);
// console.log(car1.topSpeed);  . dot se uske andr ka function access krre hai
car2 = new GeneralCar("bmw", 200);
console.log(car2.run());

// console.log(car);
