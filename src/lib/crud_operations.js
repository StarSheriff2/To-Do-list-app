import loadTask from './loader.js';
import toDoList from './tasks.js';

const CRUD = (() => {
  const addTask = (e) => {
    e.preventDefault();
    const description = e.srcElement.firstChild.value;
    const index = toDoList.toDoListArray.length;
    loadTask(description, false, index);
    e.srcElement.reset();
    localStorage.setObj('myToDoList', toDoList.toDoListArray);
  };

  return {
    addTask,
  };
})();

export default CRUD;
