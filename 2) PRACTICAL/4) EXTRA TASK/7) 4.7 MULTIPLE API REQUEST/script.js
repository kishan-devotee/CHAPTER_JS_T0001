const urls = [
    'https://jsonplaceholder.typicode.com/todos/5', 
    'https://jsonplaceholder.typicode.com/comments/5', 
    'https://jsonplaceholder.typicode.com/users/5'
];

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}

document.getElementById('fetchDataButton').addEventListener('click', () => {
    Promise.all(urls.map(url => fetchData(url)))
        .then(dataArray => {
            document.querySelector('.firstApiData').innerHTML = `
                <p><strong>ID:</strong> ${dataArray[0].id}</p>
                <p><strong>Title:</strong> ${dataArray[0].title}</p>
                <p><strong>Completed:</strong> ${dataArray[0].completed}</p>
            `;
            document.querySelector('.secondApiData').innerHTML = `
                <p><strong>ID:</strong> ${dataArray[1].id}</p>
                <p><strong>Name:</strong> ${dataArray[1].name}</p>
                <p><strong>Email:</strong> ${dataArray[1].email}</p>
                <p><strong>Body:</strong> ${dataArray[1].body}</p>
            `;
            document.querySelector('.thirdApiData').innerHTML = `
                <p><strong>ID:</strong> ${dataArray[2].id}</p>
                <p><strong>Name:</strong> ${dataArray[2].name}</p>
                <p><strong>Username:</strong> ${dataArray[2].username}</p>
                <p><strong>Email:</strong> ${dataArray[2].email}</p>
                <p><strong>Phone:</strong> ${dataArray[2].phone}</p>
                <p><strong>Website:</strong> ${dataArray[2].website}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
