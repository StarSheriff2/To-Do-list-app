// import storageModule from './local_storage.js';

export default class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  updateIndex = (index) => {
    this.index = index;
  }

  updateStatus = (status) => {
    this.completed = status;
  }
}
