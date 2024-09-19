
document.getElementById('main-heading').textContent = 'Updated Heading';

// 2. Change the color of paragraphs with the class 'text-content'
const paragraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'blue';
}

// 3. Change the source of the image with id 'main-image'
document.getElementById('main-image').src = 'new-image.jpg';

// 4. Change the background color of the div with class 'container'
document.querySelector('.container').style.backgroundColor = 'lightgrey';