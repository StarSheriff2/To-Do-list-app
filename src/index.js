import './reset.css';
import './style.css';
import EnterIcon from './images/enter-icon.png';
import toDoList from './lib/tasks.js';
import Task from './lib/task.js';
import * as reorder from './lib/reorder_tasks_logic.js';
import statusCheckboxChange from './lib/task_status.js';

const formAddTask = document.querySelector('.main-app__form-add-task');
const toDoListDisplay = document.querySelector('.form-check-task__list');

const seedTasks = [
  'wash car',
  'take fluffy to the vet',
  'finish regexp tutorial',
  'take trash outside',
  'take pills',
];

formAddTask.innerHTML = `<input type="text" name="task" id="task" placeholder="Add to your list..." class="form-add-task__input" required>
<img alt="enter icon" src="${EnterIcon}" class="form-add-task__icon">`;

const addTasktoDisplay = (task) => {
  const newItem = document.createElement('li');
  newItem.classList.add('form-check-task__list__drop-target');
  reorder.addDragListenerToDropTarget(newItem);
  const newDraggableItem = document.createElement('div');
  newDraggableItem.classList.add('form-check-task__list__item');
  newDraggableItem.setAttribute('draggable', 'true');
  newDraggableItem.setAttribute('id', `${task.index}`);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'check-task');
  checkbox.setAttribute('id', `task-${task.index}`);
  checkbox.setAttribute('value', `task-${task.index}`);
  checkbox.classList.add('form-check-task__list__item__input');
  checkbox.addEventListener('change', statusCheckboxChange);
  newDraggableItem.appendChild(checkbox);
  const span = document.createElement('span');
  span.classList.add('form-check-task__list__item__task-description');
  span.innerHTML = `${task.description}`;
  newDraggableItem.appendChild(span);
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList.add('form-check-task__list__item__icon', 'fas', 'fa-ellipsis-v');
  newDraggableItem.appendChild(ellipsisIcon);
  reorder.addDragListenerToItem(newDraggableItem);
  newItem.appendChild(newDraggableItem);
  toDoListDisplay.appendChild(newItem);
};

const loadTasks = () => {
  seedTasks.forEach((description) => {
    const newTask = new Task(description, seedTasks.indexOf(description));
    toDoList.addTaskToList(newTask);
    addTasktoDisplay(newTask);
  });
};

window.onload = loadTasks();
