import { addDragListenerToDropTarget, addDragListenerToItem } from "./reorder_tasks_logic.js";
import statusCheckboxChange from './task_status.js';

const toDoListDisplay = document.querySelector('.form-check-task__list');

const addTasktoDisplay = (task) => {
  const newItem = document.createElement('li');
  newItem.classList.add('form-check-task__list__drop-target');
  addDragListenerToDropTarget(newItem);
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
  checkbox.checked = (task.completed === true) ? true: false;
  newDraggableItem.appendChild(checkbox);
  const span = document.createElement('span');
  span.classList.add('form-check-task__list__item__task-description');
  span.innerHTML = `${task.description}`;
  newDraggableItem.appendChild(span);
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList.add('form-check-task__list__item__icon', 'fas', 'fa-ellipsis-v');
  newDraggableItem.appendChild(ellipsisIcon);
  addDragListenerToItem(newDraggableItem);
  newItem.appendChild(newDraggableItem);
  toDoListDisplay.appendChild(newItem);
};

export default addTasktoDisplay;
