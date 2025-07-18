//Callback in Javascript

function Func(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

Func('KP', () => {
    console.log('Callback function Called!');
});