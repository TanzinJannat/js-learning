//primitive

// 7 Types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail; userEmail = undefined;
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

//Reference(Non-primitive)

//Array, Object, Function

const bigNumber = 232543242154365443n
const heros = ["spiderman", "batman", "Dora"]

let myObj = {
    name:"Tanzin",
    age:21,  
}

const myFunction = function(){
    console.log("Hello world!");
}

// console.log(typeof myFunction);

let myYoutubename = "hiteshchoudharydotcom";

let anotherName = myYoutubename
anotherName = "chaiorcode"

console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email:"Tanzin@google.com",

    upi:"user1@gpl"
}

let userTwo = userOne

userTwo.email = "jannattanzin323@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
