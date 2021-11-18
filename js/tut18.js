console.log('helllo this is tut 18');
let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     console.log('hello');
// })
// btn.addEventListener('dblclick', func2);

btn.addEventListener('mousedown', func2);
btn.addEventListener('mouseenter', func3);
btn.addEventListener('mouseleave', func4);
// btn.addEventListener('mouseleave', func5);

function func2(e) {
    console.log('thanks', e);
}

function func3(e) {
    console.log('thanks for entering mouse enter', e);
}

function func4(e) {
    console.log('thanks for entering mouse enter', e);
}

function func5(e) {
    console.log('mouse move', e);
    console.log(e.offsetX);
    console.log(e.offsetY);
}

let cont = document.querySelector('.container');
cont.addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},54)`;
})



