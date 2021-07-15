import './reset.css';
import './style.css';
import * as reorder from './lib/reorder_tasks_logic';
import EnterIcon from './images/enter-icon.png';

const formAddTask = document.querySelector('.main-app__form-add-task');
const toDoListDisplay = document.querySelector('.form-check-task__list');

formAddTask.innerHTML = `<input type="text" name="task" id="task" placeholder="Add to your list..." class="form-add-task__input" required>
<img alt="enter icon" src="${EnterIcon}" class="form-add-task__icon">`;

const task1 = {
  description: 'wash car',
  completed: false,
  index: 2,
};

const task2 = {
  description: 'take fluffy to the vet',
  completed: false,
  index: 3,
};

const task3 = {
  description: 'finish regexp tutorial',
  completed: false,
  index: 4,
};

const TO_DO_LIST_TASKS = [task1, task2, task3];

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

window.onload = TO_DO_LIST_TASKS.forEach((task) => addTasktoDisplay(task));

/* Drag and Drop Event Listeners */

reorder.draggableItems.forEach((item) => item.addEventListener('dragstart', reorder.dragstart_handler));

reorder.draggableItems.forEach((item) => item.addEventListener('dragend', reorder.dragend_handler));

reorder.dropTargets.forEach((item) => item.addEventListener('dragenter', reorder.dragenter_handler));

reorder.dropTargets.forEach((item) => item.addEventListener('dragover', reorder.dragover_handler));

reorder.dropTargets.forEach((item) => item.addEventListener('dragleave', reorder.dragleave_handler));

reorder.dropTargets.forEach((item) => item.addEventListener('drop', reorder.drop_handler));
