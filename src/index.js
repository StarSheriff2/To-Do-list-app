import './reset.css';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
