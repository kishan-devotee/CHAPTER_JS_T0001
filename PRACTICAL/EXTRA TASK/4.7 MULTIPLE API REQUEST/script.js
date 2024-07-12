const urls = ['https://jsonplaceholder.typicode.com/todos/5', 'https://jsonplaceholder.typicode.com/comments/5', 'https://jsonplaceholder.typicode.com/users/5'];


    function fetchData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    Promise.all(urls.map(url => fetchData(url)))
        .then(dataArray => {
            console.log(dataArray);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        new Splide