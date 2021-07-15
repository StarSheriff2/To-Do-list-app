class Tasks {
  constructor() {
    this.toDoListArray = [];
  }

  addTaskToList = (task) => {
    this.toDoListArray = this.toDoListArray.concat(task);
  };
}

const toDoList = new Tasks();

export default toDoList;
