// Conditional Statement in javascript:


// Example 1: 

let num = 5;

if (num > 0) {
  console.log(`${num} is a positive number.`);
} else {
  console.log(`${num} is not a positive number.`);
}



// Example 2:

if (num % 2 === 0) {
  console.log(`${num} is an even number.`);
} else {
  console.log(`${num} is an odd number.`);
}


// Example 3: 

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(20));



// Example 4 

let number = 15;

switch (true) {
  case (number >= 10 && number <= 20):
    console.log(`${number} is between 10 and 20.`);
    break;
  case (number >= 21 && number <= 30):
    console.log(`${number} is between 21 and 30.`);
    break;
  default:
    console.log(`${number} is not between 10 and 30.`);
    break;
}


