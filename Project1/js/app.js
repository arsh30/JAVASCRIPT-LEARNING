console.log("this is project1");
showNotes();

//if user add a not add it to local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");  //we take notes from local storage it is possible that local storage has notes  notes name se jo key hai vo dedo

    if (notes == null) {
        notesObj = [];  // agar nul hua to aisa set kro
    } else {
         notesObj = JSON.parse(notes);  //parse: convert String to a JavaScript Aarray
        // agar kuch aray milne wala tha usko convert krke array bnaliya
    }
    notesObj.push(addTxt.value);  //agar kisi ne bhi add btn pr click kra to notes update krdege usme ik hor note add krdege
  
    // ab local storage update kra nhi hai toh update krege
    localStorage.setItem("notes", JSON.stringify(notesObj));  //abhi notes aaray hai usko string me convert krya because local storage me set string me hi krte hai it is a rule
    addTxt.value = "";
    console.log(notesObj);

    //Now here , Notes are added but it the notes are not displaying
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes"); //same cheez krege jo upr kri thi
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);  //parse because they return javascript array or object
    }
    let html = "";
    notesObj.forEach(function (element, index) {  //foreach coz yeh ik array hai
        html +=  //html me card add krdo isko paste krdege your notes me
            `   <div class="notecard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Notes${index + 1}</h5>
              <p class="card-text">${element} </p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div> 
          </div>`; //isme yeh ticket add krdege ans this.id likhne se us element ki id chli jatti hai jispr click kra hota hai
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
        //ab probelem is jese hi page reload sab gayab hora hai hai toh jese hi page load hora hai tabhi show notes ko call krdege
    } else {
        notesEle.innerHTML = `Nothing to show you "Add a Notes" section to add notes`
    }
}

// function to delete a notes
function deleteNote(index) {  //isme array ka index pass krege
    console.log(" i am deleting",index)  //jese hi koi delete note pr click krega to usko uski id mil jaegi jo hmne set krri hui hai index


    //notes let krwaye copy from above code
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    //sare notes aagye ab idr delete kregge waps local storage me set krdege
    notesObj.splice(index, 1);  //1st argument start , 2nd argument is kitne element remove krna chahte hai
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//making search 
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {  //input - > jb kuch type krege tb yeh fire hoga
    // console.log("input event fired");

    //ab inki value lelege
    let inputVal = search.value;
    // console.log("input event fired", inputVal);

    //ab notcard jo class hai ticket agar uska content input val se match hota hai toh show krege otherwise hide krdege
    let noteCard = document.getElementsByClassName("notecard");
    Array.from(noteCard).forEach(function (element) {
      // har notecard ke liye check krege ki match krta hai content yes or no so phle content lekr aayege
        let cardTxt = element.getElementsByTagName("p")[0].innerText;  //paragaraph nikala or uska 1st element
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {  //includes sirf string pr lgta thatswhy hmne innerText krra bs upr
            element.style.display = "block";    
        } else {
            element.style.display = "none";
        }
    })
    
})