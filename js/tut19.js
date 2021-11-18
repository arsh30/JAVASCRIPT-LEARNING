// exercise 13 solution web page crawler
/*
you have to create a variable which is a string containing the textwhich is a link you are interested in

2) you have to fetch all the links from a given page which contain the text

3) //eg:code with harry.com
*/
let text = "python";
let links = document.links; //we get all the links
console.log(links);
let href; //yeh jo link h uske andr ka text h ie href hai tabhi print kre

Array.from(links).forEach(function (elements) {
  href = elements.href;
  if (href.includes(text)) {  //note
    console.log(href);
  }
});
