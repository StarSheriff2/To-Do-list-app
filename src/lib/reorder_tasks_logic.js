const dropTargets = document.querySelectorAll('.form-check-task__list__drop-target');
const draggableItems = document.querySelectorAll('.form-check-task__list__item');

const sortItems = (modifiedTaskList) => {
  let counter = 0;
  modifiedTaskList.forEach((item) => {
    console.log(item.firstChild);
    let div = item.firstChild;
    div.setAttribute('id', `${counter}`);
    div.firstChild.setAttribute('id', `task-${counter}`);
    div.firstChild.setAttribute('value', `task-${counter}`);
    counter += 1;
  });
};

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
    sortItems(itemContainers);
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


/* document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    document.getElementById("demo").style.color = "";
    event.target.style.border = "";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
}); */

export {
  draggableItems,
  dropTargets,
  dragstart_handler,
  dragend_handler,
  dragenter_handler,
  dragover_handler,
  dragleave_handler,
  drop_handler,
  addDragListenerToItem,
  addDragListenerToDropTarget
}
