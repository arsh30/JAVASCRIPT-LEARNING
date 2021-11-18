// console.log('this is tut 25');
// /*
// exercise given in vid 21
// you have to create a div and inject it into the page which contains a heading
// whenever someone click on the div, it should be converted into editable item whenever user click away(blur). safe into local storage
// */

let divEle = document.createElement("div");

//ad text to creat element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("this is my element, click to edit it");
} else {
  text = document.createTextNode(val);
}
divEle.appendChild(text);

// Give element id, style and class
divEle.setAttribute("id", "elem"); //1st make our div node
divEle.setAttribute("class", "elem");
divEle.setAttribute(
  "style",
  "border:2px solid black; width: 160px; margin:34px; padding:23px;"
); //gve inline styling

let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

// insert the element befor element id first
container.insertBefore(divEle, first);

// divEle.appendChild()
// console.log(divEle, container, first);

//now add event listner to the div elem
divEle.addEventListener("click", function () {
  let noOfTextAreas = document.getElementsByClassName("textarea").length;
  if (noOfTextAreas == 0) {
    let html = elem.innerHTML; //yeh elem jo h vo div ki id or class h
    divEle.innerHTML = `<textarea class="textarea form-control" id="textarea">${html}</textarea>`;
  }

  //listen for the blur event on texxtArea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

//======================================REPEAT SAME AS ABOVE======================================================
// console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// // Create a new element
// let divElem = document.createElement('div');

// // Add text to that created element
// let val = localStorage.getItem('text');
// let text;
// if (val==null){
//  text = document.createTextNode('This is my element. click to edit it');
// }
// else{
//     text = document.createTextNode(val);
// }
// divElem.appendChild(text);

// // Give element id, style and class
// divElem.setAttribute('id', 'elem');
// divElem.setAttribute('class', 'elem');
// divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// // Grab the main container
// let container = document.querySelector('.container');
// let first = document.getElementById('myfirst');

// // Insert the element before element with id first
// container.insertBefore(divElem, first);

// console.log(divElem, container, first)

// // add event listener to the divElem
// divElem.addEventListener('click', function () {
//     let noTextAreas = document.getElementsByClassName('textarea').length;
//     if(noTextAreas ==0){
//     let html = elem.innerHTML;
//     divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
//     }
//     //listen for the blur event on textarea
//     let textarea = document.getElementById('textarea');
//     textarea.addEventListener('blur', function() {
//         elem.innerHTML = textarea.value;
//         localStorage.setItem('text', textarea.value);
//     })
// });
