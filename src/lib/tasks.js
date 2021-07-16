class Tasks {
  constructor() {
    this.toDoListArray = [];
  }

  addTaskToList = (task) => {
    this.toDoListArray = this.toDoListArray.concat(task);
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
    this.toDoListArray.splice(index, 1);
    this.updateIndexes();
  }
}

const toDoList = new Tasks();

export default toDoList;
