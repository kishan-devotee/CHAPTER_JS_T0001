// object method in javascript 

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
    let res = person.getAgeInMonths(); 


    //keys 

    const keys = Object.keys(person);
    console.log(keys);

    //values

    const values = Object.values(person);
    console.log(values);

    //entries

    const entries = Object.entries(person);
    console.log(entries);

    //hasOwnProperty

    console.log(person.hasOwnProperty('name'));
    console.log(person.hasOwnProperty('hobbies'));
    console.log(person.hasOwnProperty('getAgeInMonths'));
    console.log(person.hasOwnProperty('randomProperty'));  

    //delete

    delete person.hobbies;
    console.log(person);

    //freeze

    Object.freeze(person);
    person.name = 'Changed Name';
    console.log(person);


