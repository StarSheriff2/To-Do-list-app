import './reset.css';
import './style.css';
import EnterIcon from './images/enter-icon.png';
import toDoList from './lib/tasks.js';
import Task from './lib/task.js'
import * as reorder from './lib/reorder_tasks_logic.js';

const formAddTask = document.querySelector('.main-app__form-add-task');
const toDoListDisplay = document.querySelector('.form-check-task__list');

let seedTasks = [
  'wash car',
  'take fluffy to the vet',
  'finish regexp tutorial',
  'take trash outside',
  'take pills'
]

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
  newDraggableItem.innerHTML = `<input type="checkbox" name="check-task" id="task-${task.index}" value="task-${task.index}" class="form-check-task__list__item__input">
  <span class="form-check-task__list__item__task-description">${task.description}</span>
  <i class="form-check-task__list__item__icon fas fa-ellipsis-v"></i>`;
  reorder.addDragListenerToItem(newDraggableItem);
  newItem.appendChild(newDraggableItem);
  toDoListDisplay.appendChild(newItem);
};

const loadTasks = () => {
  seedTasks.forEach((description) => {
    let newTask = new Task(description, seedTasks.indexOf(description));
    toDoList.addTaskToList(newTask);
    addTasktoDisplay(newTask);
  });
}

window.onload = loadTasks();
