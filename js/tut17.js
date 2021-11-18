console.log('this is tut 17 on events');

// document.querySelector('h1').addEventListener('click', function () {
//     console.log('hello');
// })

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('hello');
    console.log(e);  //e is events means jidr click hua konsa event happen hua
    variable = e.currentTarget;
    variable = e.currentTarget.className;
    variable = e.currentTarget.id;
})
