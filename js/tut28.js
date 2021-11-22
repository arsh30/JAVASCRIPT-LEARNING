console.log("this is tut 28");
//when we create object through Object literl which is in prev lecture

let obj = {
  //means object.protoType se start krega bnana or use jo method hai bydefault miljaege
  name: "arsh",
  channel: "this is arsh",
  address: "mars",
};
// console.log(obj);  //Jab yeh log krege toh PROTOTYPE aata hai udr

/*WHAT IS _PROTOTYPE
SOL) Prototype : means kidr se start krke hmne is object ko bnaya
*/

function Obj(givenName) {
  //js is case sensitive
  this.name = givenName;
}
//if we want to print something that does not disturb to the above object prototype so we created insisde the prototype eg:

Obj.prototype.getName = new Object("arshdeep");
Obj.prototype.setName = function (newName) {
  this.name = newName;
};
// let obj2 = new Obj("harry");  //yeh jo constructor hai means idr se new prototype create hoga
let obj2 = new Obj("harry");
obj2.setName("deepak");
console.log(obj2);

/*
Note: Kbhi bhi jo hum object bnaege main uska prototype dalkr change kre
instead of this apna constructor bnakr uske protoype ko change krdege

*/
