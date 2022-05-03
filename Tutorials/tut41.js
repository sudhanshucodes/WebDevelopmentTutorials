console.log("This is tutorial 41");
function greet(name, greetText = "Greeting from java script") {
    let name1 = "Name1"
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}


let name1 = "Prince ";
let name2 = "Bhuvar ";
let name3 = "Kallu ";
let name4 = "Binit ";
let greetText = "Good morning";
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
// let returnVal = greet(name3);
// console.let(returnVal)

let returnVal = sum(1, 2, 3);
console.log(returnVal);
// console.log(name + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");