// create a variable 
// const = constant 
const x = 10 
const z = 12




// use let if the vallue will change
// use const if u want a specific variable
// var = variable (no one uses it anymore)

// DATA TYPES
// Primitive                                                             
// String = anything that is text (,,;./'.98yhb13sdd)                     
const name ="John"
const age1 = "23"
// Number = any number (12345)
const age2 = 23

const number = 10

let total =age1 + number
// Boolean/Bool = true/false
const a =true
const b =false


// Null
const c = null

// Undefined
// not even defined (no variable declared)

// Non-Primitive
// Object => container

const studentData = {
    name: "John",
    age:"23",
    active : true,
    subjects: {
        math:'A',
        english:'A',
        paper1 : 'A',
        paper2 :'B',
    
    }
};

// console.log(studentData)
// index always starts with 0
// Arrays a better variable basiclly
// Array length => total amount of values inside an array
// Array can contain other data types

const fruits = ["apple","","mango"];

console.log(fruits)

// Function

// function addition(a,b){
//     let total =a + b
//     console.log(total)
// }

// addition(20,100);   (old way)

// modern way
const addition = (a,b) =>{
    console.log(a+b);
}

addition(10,25);

() => {} //function