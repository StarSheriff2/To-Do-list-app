const draggableItems = document.querySelectorAll('.form-check-task__list__item');
const dropTargets = document.querySelectorAll('.form-check-task__list__drop-target');

const dragstart_handler = (e) => {
  e.dataTransfer.setData('Text', e.target.id);
  e.target.style.border = 'blue 2px solid';
};

const dragend_handler = (e) => {
  e.target.style.border = 'none';
  e.target.style.borderBottom = 'solid lightgrey 1px';
};

const dragenter_handler = (e) => {
  e.target.style.backgroundColor = 'azure';
};

const dragover_handler = (e) => {
  e.preventDefault();
};

const dragleave_handler = (e) => {
  e.target.style.backgroundColor = '';
};

const drop_handler = (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = '';
  let data = e.dataTransfer.getData("Text");
  console.log(e.target.parentNode.parentNode.children)
  // e.target.appendChild(document.getElementById(data));
};

const addDragListenerToItem = (item) => {
  item.addEventListener('dragstart', dragstart_handler);

  item.addEventListener('dragend', dragend_handler);

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
  addDragListenerToItem
}
