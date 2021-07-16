import toDoList from './tasks.js';

const statusCheckboxChange = (e) => {
  const itemId = parseInt(e.target.parentNode.id, 10);
  if (e.target.checked) {
    e.target.parentNode.children[1].style.textDecoration = 'line-through';
    const task = toDoList.getTask(itemId);
    task.updateStatus(true);
  } else {
    e.target.parentNode.children[1].style.textDecoration = '';
    const task = toDoList.getTask(itemId);
    task.updateStatus(false);
  }
  localStorage.setObj('myToDoList', toDoList.toDoListArray);
};

export default statusCheckboxChange;
