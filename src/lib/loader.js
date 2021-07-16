import Task from './task.js';
import toDoList from './tasks.js';
import addTasktoDisplay from './DOM_Renderer.js';

const loadTask = (description, completed, index) => {
  const newTask = new Task(description, completed, index);
  toDoList.addTaskToList(newTask);
  addTasktoDisplay(newTask);
};

const addTask = (e) => {
  e.preventDefault();
  const description = e.srcElement.firstChild.value;
  const index = toDoList.toDoListArray.length;
  loadTask(description, false, index);
  e.srcElement.reset();
  localStorage.setObj('myToDoList', toDoList.toDoListArray);
};

const editTask = (e) => {
  console.log('span click');
};

export {
  loadTask,
  addTask
};
