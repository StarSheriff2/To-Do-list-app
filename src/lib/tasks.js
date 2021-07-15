class Tasks {
  constructor() {
    this.toDoListArray = [];
  }

  addTaskToList = (task) => {
    this.toDoListArray = this.toDoListArray.concat(task);
  };

  updateArray = (movedItemId, displacedItemId) => {
    const movedItem = this.toDoListArray[movedItemId];
    this.toDoListArray.splice(movedItemId, 1);
    this.toDoListArray.splice(displacedItemId, 0, movedItem);
  }
}

const toDoList = new Tasks();

export default toDoList;
