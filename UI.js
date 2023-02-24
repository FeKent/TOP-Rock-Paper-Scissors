
const container = document.createElement('div');
container.setAttribute('id', 'btnContainer');
document.body.appendChild(container);

const button = document.createElement('button');
button.textContent = 'Rock';
button.style.fontSize = '20px';
button.classList.add('rock');

const button1 = document.createElement('button');
button1.textContent = 'Paper';
button1.style.fontSize = '20px';
button1.classList.add('paper');

const button2 = document.createElement('button');
button2.textContent = 'Scissors';
button2.style.fontSize = '20px';
button2.classList.add('scissors');

container.appendChild(button);
container.appendChild(button1);
container.appendChild(button2);
