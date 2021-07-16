const statusCheckboxChange = (e) => {
  if (e.target.checked) {
    e.target.parentNode.children[1].style.textDecoration = 'line-through';
  } else {
    e.target.parentNode.children[1].style.textDecoration = '';
  }
};

export default statusCheckboxChange;
