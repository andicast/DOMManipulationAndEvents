const pcontainer = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Hey I'm red";
content.style.color = 'red'

container.appendChild(content);

//step 1: reference the 'container' tag that already exists in HTML
const h3container = document.querySelector('#container2');

//step 2: create new tag and store in a new variable 
const h3content = document.createElement ('h3');

//step 3: add class, text, or style 
h3content.classList.add('h3content');
h3content.textContent = "I'm a blue h3!";
h3content.style.color = 'blue';

//step 4: finally append to 'container'
container2.appendChild(h3content);

//

const divcontainer = document.querySelector('#container3');
divcontainer.setAttribute('style', 'border: 5px solid black; background-color: pink;');

const divcontent = document.createElement('div');
divcontent.classList.add('divcontent');
divcontent.textContent = "I'm in a div";

container3.appendChild(divcontent);

const pcontent =document.createElement('p');
pcontent.textContent = 'ME TOO!';
container3.appendChild(pcontent);