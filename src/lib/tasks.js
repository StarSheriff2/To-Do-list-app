import Task from './task.js';

class Tasks {
  constructor() {
    this.toDoListArray = [];
  }

  addTaskToList = (description, completed, index) => {
    const newTask = new Task(description, completed, index);
    this.toDoListArray = this.toDoListArray.concat(newTask);
  };

  updateArray = (movedItemId, displacedItemId) => {
    const movedItem = this.toDoListArray[movedItemId];
    const displacedItem = this.toDoListArray[displacedItemId];
    this.toDoListArray.splice(movedItemId, 1);
    const targetIndex = this.toDoListArray.indexOf(displacedItem);
    this.toDoListArray.splice(targetIndex, 0, movedItem);
    this.updateIndexes();
  }

  getTask = (index) => this.toDoListArray[index];

  updateIndexes = () => {
    this.toDoListArray.forEach((task, index) => task.updateIndex(index));
    localStorage.setObj('myToDoList', this.toDoListArray);
  }

  updateDescription = (index, description) => {
    const task = this.getTask(index);
    task.description = description;
    localStorage.setObj('myToDoList', this.toDoListArray);
  }

  deleteTask = (index) => {
    this.toDoListArray = this.toDoListArray.filter((task) => task.index !== index);
    this.updateIndexes();
  }

  deleteAllTasks = (indexes) => {
    this.toDoListArray = this.toDoListArray.filter((task) => !indexes.includes(task.index));
    this.updateIndexes();
  }

  updateDomListItemId = (itemContainers) => {
    for (let i = 0; i < itemContainers.length; i += 1) {
      const div = itemContainers[i].firstChild;
      div.id = i;
      div.firstChild.id = `task-${i}`;
      div.firstChild.value = `task-${i}`;
    }
  };
}

const toDoList = new Tasks();

export default toDoList;
