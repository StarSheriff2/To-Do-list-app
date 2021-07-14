import './reset.css';
import './style.css';
import EnterIcon from './images/enter-icon.png';

const formAddTask = document.querySelector('.main-app__form-add-task');
const toDoListDisplay = document.querySelector('.form-check-task__list');

formAddTask.innerHTML = `<input type="text" name="task" id="task" placeholder="Add to your list..." class="form-add-task__input" required>
<img alt="enter icon" src="${EnterIcon}" class="form-add-task__icon">`;

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
