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
    localStorage.setObj('myToDoList', toDoList.toDoListArray);
  }
}

const toDoList = new Tasks();

export default toDoList;
