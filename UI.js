
//? Tried to add the button container as a div and give it an ID instead of making the div in the HTML body but didn't seem to work 
//const buttonContainer = document.createElement('div')
//buttonContainer.setAttribute('id', 'buttonContainer');


const container = document.getElementById('btnContainer');

const button = document.createElement('button');
/*button.textContent = 'Rock';
button.style.fontSize = '20px';
button.classList.add('rock');*/

const button1 = document.createElement('button');
/*button1.textContent = 'Paper';
button1.classList.add('paper');*/

const button2 = document.createElement('button');
/*button2.textContent = 'Scissors';
button2.classList.add('scissors');*/

container.appendChild(button);
container.appendChild(button1);
container.appendChild(button2);
