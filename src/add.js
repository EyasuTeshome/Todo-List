import { getTodo } from './save.js';

const addToList = () => {
    const newlist = document.querySelector('.list1');
    newlist.innerHTML = todoList.map((todo) => `
  <li class="newlist1">
        <input id="${todo.index}" class="check" type="checkbox"/>
        <span class="text">${todo.description}</span>
        <button class="delete"><img src="https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png"></button>
        </li>
      `);
};

const showTodo = () => {
    const todoList = getTodo();
    todoList.forEach((todo) => addToList(todo));
};

export { addToList, showTodo };