// Object in javascript

const person = {
  name: 'Kishan Kevadiya',
  age: 30,
  address: {
    street: '364230',
    city: 'Surat',
    state: 'GJ'
  },
  hobbies: ['reading', 'painting'],
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
  getAgeInMonths() {
    return this.age * 12;
  }
};

person.greet(); 
let res = person.getAgeInMonths()
console.log(res);

person.age = 20;


console.log(person.age);