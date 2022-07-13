/* eslint-disable */
import './style.css';

function showTodo(todo) {
    const list = document.querySelector('.list');
    const newlist = document.createElement('li');
    newlist.classList.add('newlist');
    newlist.innerHTML = `
      <input id="${todo.index}" class="check" type="checkbox"/>
      <span class="text">${todo.description}</span>
      <button class="delete"><img src="https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png"></button>
    `;
    list.append(newlist);
}

const todoList = [];
let id = 1;

function add(text) {
    const todo = {
        description: text,
        completed: false,
        index: id += 1,
    };
    todoList.push(todo);
    showTodo(todo);
}

const form = document.querySelector('.main');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('.action');
    const text = input.value.trim();
    if (text !== '') {
        add(text);
        input.value = '';
        input.focus();
    }
});