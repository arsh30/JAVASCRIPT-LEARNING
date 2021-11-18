//exercise 1

let a = document.links;
let b = "my name";
Array.from(a).forEach(function(element){
    if(String(element).includes(b))
    console.log(element);
})