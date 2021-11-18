console.log('this is tut14 html SELECTORS')
/*
element selectore:
1) single elemnt selectore
2.) Multi element selectore
*/


//SINGLE ELEMENT SELECTOR
let element = document.getElementById('myfirst');
// element = element.classList;
// element = element.className;
// element = element.childNodes;

// element = element.parentNode;
element.style.background = 'red'
element.innerText = 'Arsh is good boy';
element.innerHTML = '<b>Arsh is good boy</b>'
// console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child')
sel = document.querySelector('h1');
sel.style.color = 'green';
console.log(sel);


//MULTIELEMENT SELECTOR
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems  = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(function(element){
    element.style.color = 'purple';
})
