// Function to change the button color on click
function changeButtonColor(event) {
    event.target.style.backgroundColor = "lightblue";
}

// Function to display a message near the button on mouseover
function displayMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
}

// Function to hide the displayed message on mouseout
function hideMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.add('hidden');
}

// Function to hide the button on double click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to each button
document.getElementById('button1').addEventListener('click', changeButtonColor);
document.getElementById('button1').addEventListener('mouseover', displayMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeButtonColor);
document.getElementById('button2').addEventListener('mouseover', displayMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeButtonColor);
document.getElementById('button3').addEventListener('mouseover', displayMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);

document.getElementById('button4').addEventListener('click', changeButtonColor);
document.getElementById('button4').addEventListener('mouseover', displayMessage);
document.getElementById('button4').addEventListener('mouseout', hideMessage);
document.getElementById('button4').addEventListener('dblclick', hideButton);
