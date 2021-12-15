// ASYNCHRONOUS PROGRAMMING ->
console.log("this is tut34 - async prog")

// sync code
// for (let i = 0; i < 5000; i++) {
//     const elem = i;
//     console.log("this is index number" + elem);
// }
// console.log("done printting");

//above code is synronously working means 1st work is complete then print done printing, so async saves our time the things are completing in the background and they do the next task

// eg: async code above code:

setTimeout(() => {
    for (let i = 0; i < 5000; i++) {
        const elem = i;
        console.log("this is index number" + elem);
    }
}, 300);

console.log("done printting"); //here 1st work is completed then the other work is completed