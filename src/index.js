import './reset.css';
import './style.css';

const toDoListDisplay = document.querySelector('.to-do-list');

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
  toDoListDisplay.innerHTML += `<li class="to-do-list__item" id="${task.index}">${task.description}</li>`;
}

window.onload = TO_DO_LIST_TASKS.forEach(task => addTasktoDisplay(task));


