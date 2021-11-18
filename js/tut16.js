console.log('this is tut 16');
//CreateElement
let element = document.createElement('li');
//add class: className = 'jo add krna h'
element.className = 'childul';

element.id = 'createdLi';  //created id - > .id = ' jo bnani h'
element.innerHTML = '<b>how are you</b>';
element.setAttribute('title', 'mytitle');
//we want ki ul tag e andr aajaye yeh li tag jo create kra h
let ul = document.querySelector('.this');
ul.append(element);
// console.log(element);



//REPLACE IN DOM
let elem2 = document.createElement('h3'); // hm chahte h idr heading bhi daale idr ik
elem2.id = 'elem2'
elem2.className = 'elem2';

//idr hmne id or class di ab we want ki elem 2 ik text node dal denge : node means tag
let textNode = document.createTextNode('this is a created node for elem 2');
elem2.appendChild(textNode);  //abhi elem2 ke andr textnode dala h but elem2 ko kahin nhi dala

// ul.appendChild(elem2);

//replace
//ab hum chahte h ki jo element hai usko replace krege elem 2 se
element.replaceWith(elem2)
console.log(elem2);


//we want to replace the child
//ab hm elem2 ko replace krna chahte hai

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));  //my ul ka child hona chaiye tbhi work krega


//REMOVE
myul.removeChild(document.getElementById('lui'));

let pr = element.getAttribute('id');
console.log(pr);
