import './reset.css';
import './style.css';
import EnterIcon from './images/enter-icon.png';
import storageModule from './lib/local_storage.js';
import { addTask, deleteCompletedTasks } from './lib/CRUD_methods.js';

const formAddTask = document.querySelector('.main-app__form-add-task');

formAddTask.innerHTML = `<input type="text" name="task" id="task" placeholder="Add to your list..." class="form-add-task__input" required>
<img alt="enter icon" src="${EnterIcon}" class="form-add-task__icon">`;
const inputAdd = document.querySelector('.form-add-task__input');
formAddTask.addEventListener('submit', addTask);
inputAdd.style.width = '100%';
const clearAllBtn = document.querySelector('.form-check-task__clear-btn');
clearAllBtn.addEventListener('click', deleteCompletedTasks);

window.onload = storageModule.load();
