import toDoList from './tasks.js';
import addTasktoDisplay from './DOM_Renderer.js';

const loadTask = (description, completed, index) => {
  toDoList.addTaskToList(description, completed, index);
  addTasktoDisplay(toDoList.toDoListArray[toDoList.toDoListArray.length - 1]);
};

const addTask = (e) => {
  e.preventDefault();
  const description = e.srcElement.firstChild.value;
  const index = toDoList.toDoListArray.length;
  loadTask(description, false, index);
  e.srcElement.reset();
  localStorage.setObj('myToDoList', toDoList.toDoListArray);
};

export {
  loadTask,
  addTask,
};
