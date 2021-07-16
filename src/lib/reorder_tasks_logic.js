import toDoList from './tasks.js';

const updateDomListItemId = (itemContainers) => {
  for (let i = 0; i < itemContainers.length; i += 1) {
    const div = itemContainers[i].firstChild;
    div.id = i;
    div.firstChild.id = `task-${i}`;
    div.firstChild.value = `task-${i}`;
  }
  itemContainers.forEach(i => console.log(i.firstChild));
  console.log(toDoList.toDoListArray);
};

const rearrangeItems = (draggedItem, displacedItem) => {
  const relocatedItemContainer = draggedItem.parentNode;
  const itemsContainer = displacedItem.parentNode.parentNode;
  itemsContainer.insertBefore(relocatedItemContainer, displacedItem.parentNode);
  const itemContainers = itemsContainer.childNodes;
  updateDomListItemId(itemContainers);
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
    toDoList.updateArray(parseInt(itemId, 10), parseInt(e.target.id, 10));
    rearrangeItems(draggedItem, e.target);
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
