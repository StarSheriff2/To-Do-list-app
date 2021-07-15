import toDoList from './tasks.js';

const updateListItemId = (modifiedTaskList) => {
  let counter = 0;
  modifiedTaskList.forEach((item) => {
    let div = item.firstChild;
    div.setAttribute('id', `${counter}`);
    div.firstChild.setAttribute('id', `task-${counter}`);
    div.firstChild.setAttribute('value', `task-${counter}`);
    counter += 1;
  });
};

/* const updateTasksArray = (tasksArray, index, taskItem) => {
  let taskDescription = taskItem.querySelector('.form-check-task__list__item__task-description');
  tasksArray[index].description = taskDescription;
  tasksArray[index].index = parseInt(index, 10);
}; */

const dragstart_handler = (e) => {
  e.dataTransfer.setData('Text', e.target.id);
  e.target.style.border = 'blue 2px solid';
};

const dragend_handler = (e) => {
  e.target.style.border = 'none';
  e.target.style.borderBottom = 'solid lightgrey 1px';
};

const dragenter_handler = (e) => {
  if (e.target.className === 'form-check-task__list__item') {
    e.target.style.backgroundColor = 'azure';
  }
};

const dragover_handler = (e) => {
  e.preventDefault();
};

const dragleave_handler = (e) => {
  if (e.target.className === 'form-check-task__list__item') {
    e.target.style.backgroundColor = '';
  }
};

const drop_handler = (e) => {
  e.preventDefault();
  if (e.target.className === 'form-check-task__list__item') {
    e.target.style.backgroundColor = '';
    const itemId = e.dataTransfer.getData("Text");
    const draggedItem = document.getElementById(itemId);
    const itemContainers = e.target.parentNode.parentNode.childNodes;
    const dropZone = e.target.parentNode;
    const displacedItem = e.target;
    dropZone.appendChild(draggedItem);
    itemContainers[parseInt(itemId, 10)].appendChild(displacedItem);
    // updateListItemId(itemContainers);
  }
};

const addDragListenerToItem = (item) => {
  item.addEventListener('dragstart', dragstart_handler);

  item.addEventListener('dragend', dragend_handler);
};

const addDragListenerToDropTarget = (item) => {
  item.addEventListener('dragenter', dragenter_handler);

  item.addEventListener('dragover', dragover_handler);

  item.addEventListener('dragleave', dragleave_handler);

  item.addEventListener('drop', drop_handler);
};

export {
  dragstart_handler,
  dragend_handler,
  dragenter_handler,
  dragover_handler,
  dragleave_handler,
  drop_handler,
  addDragListenerToItem,
  addDragListenerToDropTarget,
  // updateTasksArray
}
