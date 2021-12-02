console.log("this is tut 30");

// PROTOTYPE  INHERITANCE : (NOTe: prototype inheritance we use rarely because es6 has came)

const proto = {
  slogan: function () {
    return "this company is best";
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
//This create arsh Object by the help of proto
let arsh = Object.create(proto); //1st hmne arsh object bnaya with the help of prototype ,this proto we will create Object empty hoga
arsh.name = "arsh";
arsh.role = "programmer"; //name or role new bnaya
arsh.occupation = "manager";
// arsh.changeName('arsh2')
// console.log(arsh);

// ALTERNATE SYNTAX-> This create Object

const arsh1 = Object.create(proto, {
  //Note: protoType only be an Object (agar object hoga toh hi run hoga)
  name: { value: "arsh", writable: true }, //it doesnt change the name , to change name we will write writable: true(this is old class)
  role: { value: "programmer" },
});
arsh1.changeName("arsh30");
// console.log(arsh1);

//INHERITANCE===========================================================================

function employee(name, salary, experience) {
  //make this constructor
  (this.name = name), (this.salary = salary), (this.experience = experience);
}

// slogan ->  we add this in the employee prototype
employee.prototype.slogan = function () {
  //slogan add kra employee me
  return `this company is best, Regards ${this.name}`;
};

let arshObj = new employee("arsh", 34500, 11);
// console.log(arshObj) //[. lga kr koi bhi aisa function add kr skte hai jisko baad me call lgana ho]
// console.log(arshObj.slogan()); //jo slogan function bnaya employee prototype me usko call lgaya (.) use krke

//=============================================

//programmer
function programmer(name, salary, experience, language) {
  // programer ko hum inherit krege employee se
  employee.call(this, name, salary, experience); //this means-> iss constructor ke context me name salary dedo
  this.language = language; //empoye.call se hmne employe ke constructor ko call kra
}
//employe also gets the slogan but it didn't get why -> means programmer constructor ko uemployee ka prototype nhi mila

// Inherit the protoType
programmer.prototype = Object.create(employee.prototype); //jo programmer ka prototype hai usko employe ke protoType ke equal krdo

//ab ye programmer me constructor nhi dikha ra hai toh manually set krege
// Manually set the constructor
programmer.prototype.constructor = programmer; //to achieve inheritance, hm yeh sab krege
//NoTE: By adding . means hum uske andr kuch create kr skte hai

let rohan = new programmer("rohan", 2, 0, "javascript");
// console.log(rohan);

//=======================================================
//homework : create foodObj and food se inherit krna hai or usse cake bnana hai (so ik cake name ki clas bnani h or ikflorr name ki class)

function flour(company, egg, bakingPowder, whiteSugar) {
  //1st flour constructor
  (this.company = company),
    (this.egg = egg), //constructor
    (this.bakingPowder = bakingPowder),
    (this.whiteSugar = whiteSugar);
}
flour.prototype.slogan = function () {
  //2nd flour constructor ke prototype me slogan add krdiya
  return `this is the best company, regards ${this.company}`;
};

//create an object from this constructor
let make = new flour("britania", 2, 500, 7);
console.log(make.slogan());

// //cake-> flour ek thing hai or cake name ka kuch aaya vo bhi ik thing hai toh new constructor bnaege

function cake(egg, bakingPowder, whiteSugar, water, oven) {
  //4th step
  //inherita
  flour.call(this, egg, bakingPowder, whiteSugar); //5th step flour ko inherit cake se  -> this -> iss constructor ie cake ke respect me call kro or 4 cheeze dede
  (this.water = water), (this.oven = oven);
}

//inHerit prototype  -7th step
cake.prototype = Object.create(flour.prototype); //flour se create krdiya

// //manually set the constructor -> 8th step
cake.prototype.constructor = cake; // jo  cake ka constructor hai usko equal krdo cake ke
let cook = new cake(4, 500, 4, 500, 15); //6th step -> isse slogan nhi mila
console.log(cook);

// slogan
// flour.prototype.slogan = function
