// Async/Await

const fetchData = async () => {
 try {
    let fetchData = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (!fetchData.ok) throw new Error(`HTTP error! status: ${fetchData.status}`);
    let Data = await fetchData.json();
    console.log(Data[0].title);
 } catch (error) {
    console.log("Error Occured From Fetching Data: ", error);
 }
};


fetchData()