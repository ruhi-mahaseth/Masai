document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // URL for random dog image API

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            displayError(error);
        });
}

function displayData(data) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
}

function displayError(error) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}
