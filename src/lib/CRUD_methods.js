import toDoList from './tasks.js';
/* eslint-disable */
import addTasktoDisplay from './DOM_Renderer.js';
/* eslint-enable */

const addTask = (e) => {
  e.preventDefault();
  const description = e.srcElement.firstChild.value;
  const index = toDoList.toDoListArray.length;
  toDoList.addTaskToList(description, false, index);
  addTasktoDisplay(toDoList.toDoListArray[toDoList.toDoListArray.length - 1]);
  e.srcElement.reset();
  localStorage.setObj('myToDoList', toDoList.toDoListArray);
};

const deleteTask = (e) => {
  const index = parseInt(e.target.parentNode.id, 10);
  const selectedTask = e.target.parentNode.parentNode;
  const itemContainers = selectedTask.parentNode.childNodes;
  selectedTask.remove();
  toDoList.updateDomListItemId(itemContainers);
  toDoList.deleteTask(index);
};

const editTask = (e) => {
  const divContainer = e.target.parentNode;
  const storedEllipsisIcon = divContainer.children[2];
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.classList.add('form-check-task__list__item__input-edit');
  newInput.setAttribute('value', e.target.textContent);
  const storedSpan = e.target;
  const temp = e.target;
  divContainer.insertBefore(newInput, divContainer.children[1]);
  const trashCan = document.createElement('i');
  trashCan.addEventListener('click', deleteTask);
  trashCan.classList.add('form-check-task__list__item__icon', 'far', 'fa-trash-alt');
  trashCan.style.cursor = 'pointer';
  trashCan.style.color = 'grey';

  newInput.addEventListener('focus', (e) => {
    temp.remove();
    const val = newInput.value;
    e.target.value = '';
    e.target.value = val;
    divContainer.children[2].remove();
    divContainer.appendChild(trashCan);
    divContainer.style.backgroundColor = 'aliceblue';
  });

  newInput.focus();

  newInput.addEventListener('blur', () => {
    setTimeout(() => {
      trashCan.remove();
      divContainer.appendChild(storedEllipsisIcon);
    }, 300);
    newInput.remove();
    divContainer.insertBefore(storedSpan, divContainer.children[1]);
    divContainer.style.backgroundColor = 'white';
  });

  newInput.addEventListener('change', (e) => {
    storedSpan.textContent = e.target.value;
    toDoList.updateDescription(parseInt(divContainer.id, 10), e.target.value);
    newInput.remove();
    divContainer.insertBefore(storedSpan, divContainer.children[1]);
    trashCan.remove();
    divContainer.appendChild(storedEllipsisIcon);
    divContainer.style.backgroundColor = 'white';
  });
};

const deleteCompletedTasks = (e) => {
  let allTaskContainers = Array.from(e.target.form.firstChild.childNodes);
  const completedTasksByIndex = [];
  allTaskContainers.forEach((container) => {
    if (container.firstChild.firstChild.checked) {
      completedTasksByIndex.push(allTaskContainers.indexOf(container));
    }
  });
  toDoList.deleteAllTasks(completedTasksByIndex);
  allTaskContainers = e.target.form.firstChild.childNodes;
  for (let i = 0; i < completedTasksByIndex.length; i += 1) {
    allTaskContainers[completedTasksByIndex[i] - i].remove();
  }
  toDoList.updateDomListItemId(allTaskContainers);
};

export {
  addTask,
  editTask,
  deleteCompletedTasks,
};
