const API_URI = "https://jsonplaceholder.org/users"

async function funcFetch (api) { 
    let Data = await fetch(api)
     Data = await Data.json();
    return Data;
}

 let result = funcFetch(API_URI)

 result.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})



