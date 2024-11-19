// Primitve

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let usermail = undefined

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// const bigNumber = 12345678981728738787n



// Refrence (Non-primitive)

// Array, Objects, Functions

const heroes = ["thor", "spiderman", "ironman"]
let myObj ={
    name: "bhavya",
    age: 17
}

const myfunction = function (){
    console.log("Hello World");
}

console.log(typeof myfunction)