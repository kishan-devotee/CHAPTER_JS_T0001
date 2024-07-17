// Loops in javascript:

// Example 1: Printing numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Example 2:while loop 

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// Example 3: do-while loop

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

// Example 4: Nested loops

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}

// Example 5: Break statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Example 6: Continue statement

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Example 7: Looping through an array

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Example 8: Looping through an object

const person = { name: "K", age: 20 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


// Example 9: Looping through a string

const str = "Hello, World!";
for (let char of str) {
  console.log(char);
}


// Example 10: Looping through a Set

const set = new Set([1, 2, 3, 4, 5]);
for (let value of set) {
  console.log(value);
}



