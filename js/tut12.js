console.log('hello');
let a = document;
a = document.all;  //isse hme html collection sab milega ik array me
// a = document.body;
// a = document.forms;

// a.forEach(function(){
//     console.log(element);   //it gives error because document.all ik html collection uspr ham for each nhi chla skte
// })  we do this method 
// Array.from(a).forEach(function(element){
//     console.log(element);   //it gives error because document.all ik html collection uspr ham for each nhi chla skte
// })

a = document.links;

//hw: use document.images and documents.script and print the list of images and script on html page
a = document.images;
a = document.scripts;
console.log(a);