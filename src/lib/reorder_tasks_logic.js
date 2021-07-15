import toDoList from './tasks.js';

/* const updateListItemId = (draggedItem, displacedItem) => {
  console.log('draggedItem: ', draggedItem);
  console.log('displacedItem:', displacedItem);
  console.log(toDoList.toDoListArray);
  let movedItem = toDoList.toDoListArray[draggedItem.id];
  toDoList.toDoListArray.splice(draggedItem.id, 1);
  toDoList.toDoListArray.splice(displacedItem.id, 0, movedItem);
  console.log(toDoList.toDoListArray);

}; */

const rearrangeItems = (draggedItem, displacedItem) => {
  console.log(draggedItem, displacedItem);
  const itemContainers = displacedItem.parentNode.parentNode.childNodes;
  const dropZone = displacedItem.parentNode;
}

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
  const itemId = e.dataTransfer.getData("Text");
  const draggedItem = document.getElementById(itemId);
  if (e.target.className === 'form-check-task__list__item' && e.target.id !== itemId) {
    e.target.style.backgroundColor = '';
    /* const itemContainers = e.target.parentNode.parentNode.childNodes;
    const dropZone = e.target.parentNode;
    const displacedItem = e.target; */
    toDoList.updateArray(itemId, e.target.id);
    console.log(toDoList.toDoListArray);
    // itemContainers[parseInt(itemId, 10)].appendChild(displacedItem);
    // updateListItemId(draggedItem, displacedItem);
  } else {
    draggedItem.style.backgroundColor = '';
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
