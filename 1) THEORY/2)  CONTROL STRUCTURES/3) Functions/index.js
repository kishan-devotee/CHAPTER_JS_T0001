// Functions in javascript

// Example 1: A simple function to add two numbers

function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 10);
console.log(result);

// Example 2: A function that takes an array of numbers and returns their sum

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];

let totalSum = sumArray(numbers);

console.log(totalSum);

// Example 3: A function to calculate the factorial of a number using arrow function 

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(10)); 

// Example 4: A function to check if a number is prime Using  IIFE


console.log((function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
})(13));

 




