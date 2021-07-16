import Task from './task.js';
import toDoList from './tasks.js';
import addTasktoDisplay from './DOM_Renderer.js';

const loadTasks = (tasks) => {
  tasks.forEach((task) => {
    const newTask = new Task(task.description, task.completed, task.index);
    toDoList.addTaskToList(newTask);
    addTasktoDisplay(newTask);
  });
};

export default loadTasks;
