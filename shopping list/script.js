const itemNameInput = document.getElementById('item-name');
const quantityInput = document.getElementById('quantity');
const addItemButton = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');

// Function to add a new item
function addItem() {
    const itemName = itemNameInput.value.trim();
    const quantity = quantityInput.value.trim();

    if (itemName === "" || quantity === "") {
        alert('Please enter both an item name and quantity.');
        return;
    }

    // Create list item element
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} (x${quantity})`;

    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editItem(listItem, itemName, quantity);
    };

    // Create Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        shoppingList.removeChild(listItem);
    };

    // Append buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    // Append the list item to the shopping list
    shoppingList.appendChild(listItem);

    // Clear input fields
    itemNameInput.value = '';
    quantityInput.value = '';
}

// Function to edit an item
function editItem(listItem, itemName, quantity) {
    const newItemName = prompt("Edit item name:", itemName);
    const newQuantity = prompt("Edit quantity:", quantity);

    if (newItemName && newQuantity) {
        listItem.firstChild.textContent = `${newItemName} (x${newQuantity})`;
    }
}

// Event listener for the Add Item button
addItemButton.addEventListener('click', addItem);