import loadTask from './loader.js';
import toDoList from './tasks.js';

const CRUD = (() => {
  const addTask = (e) => {
    e.preventDefault();
    const description = e.srcElement.firstChild.value;
    const index = toDoList.toDoListArray.length;
    loadTask(description, false, index);
    e.srcElement.reset();
    localStorage.setObj('myToDoList', toDoList.toDoListArray);
  };

  const editTask = (e) => {

  }

  /*
  const removeTask = (bookTitle) => {
    const book = getBook(bookTitle);
    const bookLibraryIndex = myLibrary.indexOf(book);
    myLibrary.splice(bookLibraryIndex, 1);
  }; */

  return {
    addTask,
  };
})();

export default CRUD;

/* const addBook = (e) => {
  e.preventDefault();
  bookCollection.addBookToCollection(
    formAddBook.title.value,
    formAddBook.author.value,
  );
  formAddBook.reset();
  updateStorage();
  addOneBookToDom(1);
  displayContainer(0);
}; */
