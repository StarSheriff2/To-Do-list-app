import Task from './task.js';
import toDoList from './tasks.js';
import addTasktoDisplay from './DOM_Renderer.js';

const loadTask = (description, completed, index) => {
  const newTask = new Task(description, completed, index);
  toDoList.addTaskToList(newTask);
  addTasktoDisplay(newTask);
};

export default loadTask;
