export default class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  updateIndex = (index) => {
    this.index = index;
  }
}
