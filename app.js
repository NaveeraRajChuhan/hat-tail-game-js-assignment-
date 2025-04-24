// var num = Math.random()
// document.write(num)


// var userinp = prompt('Write hat or tail')

// var num = (Math.round(Math.random()))
// document.write(num)
// if(num===0 || num===1){
//     document.write("you win")
//     if(num===0){
//         document.write(hats)
//     } if(num===1){
//         document.write(tail)
//     }
// }

// else if(num===0){
//     document.write(hats)
// }else if(num===1){
//     document.write(tail)
// }
// else{
//     tail
// }


// var hi = Math.round(Math.random());
// document.write(hi);

var tail = prompt("enter tail name")
var head = prompt("enter head name")

var answer = Math.round(Math.random())

if (answer === 0) {
    document.write(head + " wins")
} else {
    document.write(tail + " wins")
    
}