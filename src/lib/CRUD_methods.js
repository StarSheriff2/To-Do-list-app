import toDoList from './tasks.js';

const editTask = (e) => {
  // console.log(e.target);
  e.stopPropagation();
  const divContainer = e.target.parentNode;
  const storedEllipsisIcon = divContainer.children[2];
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.classList.add('form-check-task__list__item__input-edit');
  newInput.setAttribute('value', e.target.textContent);
  const storedSpan = e.target;
  e.target.remove();
  divContainer.insertBefore(newInput, divContainer.children[1]);
  newInput.focus();
  divContainer.children[2].remove();
  const trashCan = document.createElement('i');
  trashCan.classList.add('form-check-task__list__item__icon', 'far', 'fa-trash-alt');
  trashCan.style.cursor = 'pointer';
  trashCan.style.color = 'grey';
  divContainer.appendChild(trashCan);
  divContainer.style.backgroundColor = 'rgb(237, 223, 148)';

  window.addEventListener('click', (e) => {
    if (e.target !== newInput && e.target !== divContainer) {
      newInput.remove();
      divContainer.insertBefore(storedSpan, divContainer.children[1]);
      trashCan.remove();
      divContainer.appendChild(storedEllipsisIcon);
      divContainer.style.backgroundColor = 'white';
    }
  });

  // let editedInput;
  newInput.addEventListener('change', (e) => {
    storedSpan.textContent = e.target.value;
    toDoList.updateDescription(parseInt(divContainer.id, 10), e.target.value);
    newInput.remove();
    divContainer.insertBefore(storedSpan, divContainer.children[1]);
    trashCan.remove();
    divContainer.appendChild(storedEllipsisIcon);
    divContainer.style.backgroundColor = 'white';
  });

  // console.log(newInput);
};

export {
  editTask,
};
