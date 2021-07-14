import './reset.css';
import './style.css';

const toDoListDisplay = document.querySelector('.form-check-task__list');

const task1 = {
  description: 'wash car',
  completed: false,
  index: 0,
};

const task2 = {
  description: 'take fluffy to the vet',
  completed: false,
  index: 1,
};

const task3 = {
  description: 'finish regexp tutorial',
  completed: false,
  index: 2,
};

const TO_DO_LIST_TASKS = [task1, task2, task3];

const addTasktoDisplay = (task) => {
  const newItem = document.createElement('li');
  newItem.innerHTML = `<input type="checkbox" name="check-task" id="check-task" value="${task.index}" class="form-check-task__list__item__input">
  <span class="form-check-task__list__item__task-description">${task.description}</span>
  <i class="form-check-task__list__item__icon fas fa-ellipsis-v"></i>`;
  newItem.classList.add('form-check-task__list__item');
  newItem.setAttribute('id', `${task.index}`);
  toDoListDisplay.appendChild(newItem);
};

window.onload = TO_DO_LIST_TASKS.forEach((task) => addTasktoDisplay(task));
