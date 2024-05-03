// Primitive

// 7 types : string, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log (id=== anotherId);
const bigNumber = 1234567826676546765634567n






// https : //262.ecma-international.org/5.1/#sec-11.4.3


// reference (Non primitive)

// Array, Object, Functions

const heros = ["omer","ali","abubaker"];
let myObj = {
    name :"Sohail",
    age: 17,
}


const myFunction = function(){}










// ++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (nonprimitive)

let myYoutubename="sohaillaril.com"

let anothername = myYoutubename
anothername= "sohailvolg"

console.log(myYoutubename);
console.log (anothername);
let userOne = {
    email:"user@google.com",
    JazzCash:"user@jazzcash"
}
let userTwo = userOne
userTwo.email= "sohailmumtaz300@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





    
