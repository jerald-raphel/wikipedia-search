function searchWikipedia() {
    const searchTerm = document.getElementById("searchInput").value;
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json&origin=*`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
}

function displayResults(data) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

   for (let i = 0; i < data[1].length; i++) {
        const title = data[1][i];
        const snippet = data[2][i];
        const url = data[3][i];

        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `<h2><a href="${url}" target="_blank">${title}</a></h2>
                              <p>${snippet}</p>`;
        resultsContainer.appendChild(resultItem);
    }
}