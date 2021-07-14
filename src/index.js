import './reset.css';
import './style.css';
// import html from './index.html';
// import EnterIcon from './images/enter-icon.png';

const mainApp = document.querySelector('.main-app');
const form = document.querySelector('.main-app__form');
const toDoListDisplay = document.querySelector('.main-app__to-do-list');
const toDoListFormCheckbox = document.querySelector('.to-do-list__form');
const clearAllBtn = document.querySelector('.to-do-list__form__clear-btn');

const task1 = {
  description: 'wash car',
  completed: false,
  index: 0,
}

const task2 = {
  description: 'take fluffy to the vet',
  completed: false,
  index: 1,
}

const task3 = {
  description: 'finish regexp tutorial',
  completed: false,
  index: 2,
}

const TO_DO_LIST_TASKS = [task1, task2, task3];

const addTasktoDisplay = (task) => {
  const newItem = document.createElement('li');
  newItem.innerHTML = `${task.description}`;
  newItem.classList.add('to-do-list__item');
  newItem.setAttribute('id', `${task.index}`);
  toDoListFormCheckbox.insertBefore(newItem, clearAllBtn);
}

window.onload = TO_DO_LIST_TASKS.forEach(task => addTasktoDisplay(task));


