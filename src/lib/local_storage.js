import toDoList from './tasks.js';
import { loadTask } from './loader.js';

const storageModule = (() => {
  const seedTasks = [
    { description: 'wash car', completed: false, index: 0 },
    { description: 'take fluffy to the vet', completed: false, index: 1 },
    { description: 'finish regexp tutorial', completed: false, index: 2 },
    { description: 'take trash outside', completed: false, index: 3 },
    { description: 'take pills', completed: false, index: 4 },
  ];

  // Check Browser for LocalStorage Support and Availability
  // Code source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  const storageAvailable = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && (storage && storage.length !== 0);
    }
  };

  const loadStorageTasks = (storedTasks) => {
    storedTasks.forEach((task) => {
      loadTask(task.description, task.completed, task.index);
    });
  };

  const updateStorage = () => localStorage.setObj('myToDoList', toDoList.toDoListArray);

  const setStorageAccessMethods = () => {
    Storage.prototype.setObj = function setObj(key, obj) {
      return this.setItem(key, JSON.stringify(obj));
    };

    Storage.prototype.getObj = function getObj(key) {
      return JSON.parse(this.getItem(key));
    };
  };

  const load = () => {
    if (storageAvailable('localStorage')) {
      setStorageAccessMethods();
      if (localStorage.length === 0) {
        if (toDoList.toDoListArray.length === 0) {
          loadStorageTasks(seedTasks);
        }
        updateStorage();
      } else {
        loadStorageTasks(localStorage.getObj('myToDoList'));
      }
    }
  };

  return {
    load,
  };
})();

export default storageModule;
