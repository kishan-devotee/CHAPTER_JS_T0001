// Data Types in JavaScript:

// ---------------------------------------------------premitive-----------------------------------------------------------------

// 1. String

let name = "Kishan Kevadiya";
console.log(typeof name); 

// 2. Number

let age = 30;
console.log(typeof age); 

// 3. Boolean

let isStudent = true;
console.log(typeof isStudent);

// 4. Null

let person = null;
console.log(typeof person); 

// 5. Undefined

let greeting;
console.log(typeof greeting); 

// 6. Symbol

let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2); 



// ---------------------------------------------------non-premitive-----------------------------------------------------------------

// 7. Object

let personObj = {
     name: "Kishan",
      age: 30 
    };
console.log(typeof personObj); 

// 8. Function

function greet() {
  console.log("Hello!");
}

greet(); 

// 9. Array

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);