import toDoList from './tasks.js';
import addTasktoDisplay from './DOM_Renderer.js';

const loadTask = (description, completed, index) => {
  toDoList.addTaskToList(description, completed, index);
  addTasktoDisplay(toDoList.toDoListArray[toDoList.toDoListArray.length - 1]);
};

export default loadTask;
