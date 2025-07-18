
let data = [
    {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 25
    },
    {
        "id": 3,
        "name": "Mary",
        "age": 28
    }
];

data = JSON.stringify(data)
localStorage.setItem("name", data)

let dataLocal = localStorage.getItem("name")
dataLocal = JSON.parse(dataLocal)
console.log("Data From LocalStorage ------> ",dataLocal);

// localStorage.removeItem("name")
// localStorage.clear()


//session storage 

 sessionStorage.setItem("name", data)

 let dataSession = sessionStorage.getItem("name")
 dataSession = JSON.parse(dataSession)
 console.log("Data From Sessoion Storage -----> ",dataSession);


