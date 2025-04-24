
// var tail = prompt("enter tail name")
// var head = prompt("enter head name")

// var answer = Math.round(Math.random())

// if (answer === 0) {
//     document.write (  head + " wins")

// } else {
//     document.write(tail + " wins")
    
// }






// var tail = prompt("Enter Tail's name");
// var head = prompt("Enter Head's name");

// var answer = Math.round(Math.random());
// var winner = (answer === 0) ? head : tail;

// document.getElementById("gameResult").innerHTML = `
//     <h1 class="result">${winner} wins!</h1>
// `;









var tail = prompt("Enter Tail's name");
var head = prompt("Enter Head's name");

var answer = Math.round(Math.random());

if (answer === 0) {
    document.getElementById("gameResult").innerHTML = `
        <h1 class="result  animate__animated animate__heartBeat animate__infinite animate__slower ">${head} wins!</h1>
    `;
} else {
    document.getElementById("gameResult").innerHTML = `
        <h1 class="result  animate__animated animate__heartBeat animate__infinite animate__slower ">${tail} wins!</h1>
    `;
}



