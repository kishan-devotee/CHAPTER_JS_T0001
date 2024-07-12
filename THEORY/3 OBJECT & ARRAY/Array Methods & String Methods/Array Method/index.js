// Array Method 

const numbers = [1, 2, 3, 4, 5];

//map

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); 
// Array Destructuring

const [first, second, , fourth, fifth] = numbers;

console.log(first, second, fourth, fifth); 

// pop 

const poppedNumber = numbers.pop();

console.log(numbers, poppedNumber); 

// shift    

const shiftedNumber = numbers.shift();

console.log(numbers, shiftedNumber);

// unshift

numbers.unshift(0);

console.log(numbers);

// slice

const slicedNumbers = numbers.slice(1, 3);

console.log(numbers, slicedNumbers); 

// concat

const concatenatedNumbers = numbers.concat([6, 7, 8]);

console.log(numbers, concatenatedNumbers); 

// splice

numbers.splice(2, 0, 5, 6);

console.log(numbers); 
// reverse

numbers.reverse();

console.log(numbers);

// sort

numbers.sort((a, b) => a - b);

console.log(numbers); 

// filter

const filteredNumbers = numbers.filter(number => number % 2 === 0);

console.log(numbers, filteredNumbers); 

// reduce

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);   

console.log(numbers, sum); 

// find

const foundNumber = numbers.find(number => number === 5);

console.log(numbers, foundNumber); 

// includes

const includesNumber = numbers.includes(5);

console.log(numbers, includesNumber);

// indexOf

const indexOfNumber = numbers.indexOf(5);

console.log(numbers, indexOfNumber); 

// join

const joinedNumbers = numbers.join(', ');

console.log(numbers, joinedNumbers); 

// toString

const toStringNumbers = numbers.toString();

console.log(numbers, toStringNumbers); 

// forEach

numbers.forEach(number => console.log(number)); 

console.log(numbers);


