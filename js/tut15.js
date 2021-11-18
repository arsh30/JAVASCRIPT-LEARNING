console.log('hello this is tut 15');
let cont = document.querySelector('.no');

//to access all the child :-> use (childNodes) ye are child lakr dedega
cont = document.querySelector('.container');
// console.log(cont.childNodes);  // chillNodes gives 1 array in which it includes all the text, comments and tags
// console.log(cont.children);  // children gives 1 array in which it includes only tags.
// console.log(cont.classList);  // children gives 1 array in which it includes only tags.

let nodeName = cont.childNodes[2].nodeName;
let nodeType = cont.childNodes[0].nodeType;
/*
NodesType:->
1 means -> Element
2 means -> Attribute
3 means -> textNode
8 means -> comment
9 means -> document
10 means -> docType
*/

// console.log(nodeName);
// console.log(nodeType);


let container = document.querySelector('.container');
//if we want children inside children
// console.log(container.children[0].children);

// console.log(container.firstChild); //-> firstchild :it gives ChildNodes type meaning including text
// console.log(container.firstElementChild); //-> firstElementchild :it gives the first elemnt
// console.log(container.firstChild.parentNode); //-> PARENT NODE :it gives the parent 
console.log(container.lastElementChild);

//to traverse 2nd sibling or 3 rd elemnt use: .nextelemntSibling
// console.log(container.nextElementSibling);
console.log(container.nextElementSibling.nextElementSibling);
