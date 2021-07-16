import storageModule from './local_storage.js';
import toDoList from './tasks.js';

const updateDomListItemId = (itemContainers) => {
  for (let i = 0; i < itemContainers.length; i += 1) {
    const div = itemContainers[i].firstChild;
    div.id = i;
    div.firstChild.id = `task-${i}`;
    div.firstChild.value = `task-${i}`;
  }
  console.log(toDoList.toDoListArray)
};

const rearrangeItems = (draggedItem, displacedItem) => {
  const relocatedItemContainer = draggedItem.parentNode;
  const itemsContainer = displacedItem.parentNode.parentNode;
  itemsContainer.insertBefore(relocatedItemContainer, displacedItem.parentNode);
  const itemContainers = itemsContainer.childNodes;
  updateDomListItemId(itemContainers);
};

const dragstartHandler = (e) => {
  e.dataTransfer.setData('Text', e.target.id);
  e.target.style.border = 'blue 2px solid';
};

const dragendHandler = (e) => {
  e.target.style.border = 'none';
  e.target.style.borderBottom = 'solid lightgrey 1px';
};

const dragenterHandler = (e) => {
  if (e.target.className === 'form-check-task__list__item') {
    e.target.style.backgroundColor = 'azure';
  }
};

const dragoverHandler = (e) => {
  e.preventDefault();
};

const dragleaveHandler = (e) => {
  if (e.target.className === 'form-check-task__list__item') {
    e.target.style.backgroundColor = '';
  }
};

const dropHandler = (e) => {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('Text');
  const draggedItem = document.getElementById(itemId);
  if (e.target.className === 'form-check-task__list__item' && e.target.id !== itemId) {
    e.target.style.backgroundColor = '';
    toDoList.updateArray(parseInt(itemId, 10), parseInt(e.target.id, 10));
    storageModule.updateStorage();
    rearrangeItems(draggedItem, e.target);
  } else {
    draggedItem.style.backgroundColor = '';
  }
};

const addDragListenerToItem = (item) => {
  item.addEventListener('dragstart', dragstartHandler);

  item.addEventListener('dragend', dragendHandler);
};

const addDragListenerToDropTarget = (item) => {
  item.addEventListener('dragenter', dragenterHandler);

  item.addEventListener('dragover', dragoverHandler);

  item.addEventListener('dragleave', dragleaveHandler);

  item.addEventListener('drop', dropHandler);
};

export {
  dragstartHandler,
  dragendHandler,
  dragenterHandler,
  dragoverHandler,
  dragleaveHandler,
  dropHandler,
  addDragListenerToItem,
  addDragListenerToDropTarget,
};
