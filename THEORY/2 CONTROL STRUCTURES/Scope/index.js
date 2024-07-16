// Scope in javascript 

    // Global Scope
    let globalVar = "I am a global variable";

    function globalFunction() {
        console.log(globalVar);
    }

    globalFunction();

    // Local Scope
    function localFunction() {
        let localVar = "I am a local variable";
        console.log(localVar);
    }

localFunction();

// console.log(localVar); // ReferenceError: localVar is not defined

// Example 2: Accessing Global Variables from Local Scope

let globalVar2 = "I am a global variable";

function localFunction2() {
    console.log(globalVar2);
}


localFunction2();

console.log(globalVar2); 


// Example 3: Modifying Global Variables from Local Scope

let globalVar3 = "I am a global variable";

function localFunction3() {
    globalVar3 = "I am a modified global variable";
    console.log(globalVar3);
}

localFunction3();

console.log(globalVar3); 

// Example 4: Accessing Local Variables from Global Scope

let globalVar4 = "I am a global variable";

function localFunction4() {
    let localVar4 = "I am a local variable";
    console.log(globalVar4);
}

localFunction4();

// console.log(localVar4); 

// Example 5: Modifying Local Variables from Global Scope

let globalVar5 = "I am a global variable";

function localFunction5() {
    globalVar5 = "I am a modified global variable";
    console.log(globalVar5);
}

localFunction5();

console.log(globalVar5); 

// Example 6: Accessing Local Variables from Local Scope

let globalVar6 = "I am a global variable";

function localFunction6() {
    let localVar6 = "I am a local variable";
    console.log(localVar6);
}

localFunction6();

console.log(localVar6); 




