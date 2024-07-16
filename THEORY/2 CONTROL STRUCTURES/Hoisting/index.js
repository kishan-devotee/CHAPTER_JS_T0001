// Hoisting in javascript 

    // Example 1: Variable hoisting

    console.log(myVariable); // undefined

    var myVariable = "Hello, World!";

    console.log(myVariable); // Hello, World!

    // Example 2: Function hoisting

    console.log(myFunction()); // Hello, World!

    function myFunction() {
      return "Hello, World!";
    }

    // Example 3: Arrow function hoisting   

    console.log(myArrowFunction()); // Hello, World!

    const myArrowFunction = () => {
      return "Hello, World!";
    }

