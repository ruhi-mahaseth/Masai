let products = [];

function addRow() {
    const table = document.getElementById('productTable');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" class="productName"></td>
        <td><input type="number" class="productPrice"></td>
        <td><input type="number" class="productRating"></td>
    `;
    table.appendChild(row);
}

function addProducts() {
    const names = document.getElementsByClassName('productName');
    const prices = document.getElementsByClassName('productPrice');
    const ratings = document.getElementsByClassName('productRating');

    for (let i = 0; i < names.length; i++) {
        const name = names[i].value;
        const price = parseFloat(prices[i].value);
        const rating = parseFloat(ratings[i].value);

        if (name && !isNaN(price) && !isNaN(rating)) {
            products.push({ name, price, rating });
        }
    }

    updateGraphs();
}

function updateGraphs() {
    if (products.length === 0) {
        return;
    }

    // Sort products by price and rating
    const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
    const sortedByRating = [...products].sort((a, b) => a.rating - b.rating);

    // Update the price graph
    const priceGraph = document.getElementById('priceGraph');
    priceGraph.innerHTML = ''; // Clear previous graph
    sortedByPrice.forEach(product => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = product.price * 5 + 'px'; 
        bar.textContent = product.name;
        priceGraph.appendChild(bar);
    });

    // Update the rating graph
    const ratingGraph = document.getElementById('ratingGraph');
    ratingGraph.innerHTML = ''; // Clear previous graph
    sortedByRating.forEach(product => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = product.rating * 20 + 'px'; // Adjust height based on rating
        bar.textContent = product.name;
        ratingGraph.appendChild(bar);
    });
}