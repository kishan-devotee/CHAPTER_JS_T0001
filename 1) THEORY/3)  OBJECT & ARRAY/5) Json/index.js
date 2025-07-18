// Json - javascript object notation

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

// stringify

const jsonString = JSON.stringify(person);
console.log(jsonString);

// parse

const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.name);