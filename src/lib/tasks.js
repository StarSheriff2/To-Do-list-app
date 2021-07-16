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
    let targetIndex = this.toDoListArray.indexOf(displacedItem);
    this.toDoListArray.splice(targetIndex, 0, movedItem);
    // this.updateIndexes(displacedItemId);
  }

  updateIndexes = () => {
    /* for (let i = 0; i < this.toDoListArray; i += 1) {
      this.toDoListArray[i].index = i;
    } */
    // this.toDoListArray.forEach((task, index) => console.log(index));
    // this.toDoListArray.forEach((task, index) => task.updateIndex(index));
  }
}

const toDoList = new Tasks();

export default toDoList;
