import storageModule from './local_storage.js';
import toDoList from './tasks.js';

const statusCheckboxChange = (e) => {
  const itemId = parseInt(e.target.parentNode.id, 10);
  if (e.target.checked) {
    e.target.parentNode.children[1].style.textDecoration = 'line-through';
    const task = toDoList.getTask(itemId);
    task.completed = true;
  } else {
    e.target.parentNode.children[1].style.textDecoration = '';
    const task = toDoList.getTask(itemId);
    task.completed = false;
  }
  storageModule.updateStorage();
};

export default statusCheckboxChange;
