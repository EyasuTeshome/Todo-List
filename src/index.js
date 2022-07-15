/* eslint-disable */

import './style.css';
import interactive from './interactiveList.js';
import clearCompletedTasks from './addRemove.js';

class SingleToDo {
    constructor(description) {
        this.description = description;
        this.completed = false;
        this.index = 0;
    }
}
class ToDoList {
    constructor(toDoTasksArray = [], container) {
        this.toDoTasksArray = toDoTasksArray;
        this.container = document.querySelector(container);
    }

    addToDo(todo) {
        const newToDo = new SingleToDo(todo);
        this.toDoTasksArray.push(newToDo);
        // update index
        this.toDoTasksArray = this.toDoTasksArray.map((todo, index = 1) => {
            todo.index = index;
            return todo;
        });
        this.displayToDo();
        this.setListToLocal(this.toDoTasksArray);
        window.location.reload();
    }

    removeToDo(todoId) {
        const filterToDo = this.toDoTasksArray.filter((todo) => parseInt((todoId), 10) !== todo.index);
        this.toDoTasksArray = filterToDo;
        // update index
        this.toDoTasksArray = this.toDoTasksArray.map((todo, index = 1) => {
            todo.index = index;
            return todo;
        });
        this.displayToDo();
        this.setListToLocal(this.toDoTasksArray);
        window.location.reload();
    }

    setToDoArray(newToDoArray) {
        this.toDoTasksArray = newToDoArray;
        this.setListToLocal(this.toDoTasksArray);
    }

    getToDoArray() {
        return this.toDoTasksArray;
    }

    setListToLocal() {
        localStorage.setItem('lists', JSON.stringify(this.toDoTasksArray));
    }

    getListFromLocal() {
        const getList = localStorage.getItem('lists');
        if (getList) {
            this.toDoTasksArray = JSON.parse(getList);
        }
        this.displayToDo();
    }

    displayToDo() {
        this.toDoTasksArray.sort((a, b) => a.index - b.index);

        this.container.innerHTML = this.toDoTasksArray.map((todo) => `
        <article id=${todo.index} class="article">
        <div class="linn">
        <input ${todo.completed ? 'checked' : ''} type="checkbox">
        <textarea class = "${todo.completed ? 'complete' : ''} text-area-class" rows="1" cols="30">${todo.description}</textarea> 
        <button id=${todo.index} class="todo-btn" > &#128465;</button></div>
        <hr class="line-break">
        </article>`).join('');
    }
}

const myToDo = new ToDoList([], '.list-item');

document.addEventListener('click', (e) => {
    interactive(e);
    const todoId = e.target.parentElement.parentElement.id;
    if (e.target.checked) {
        const upDatedToDo = myToDo.getToDoArray().map((todo) => {
            if (todo.index === parseInt((todoId), 10)) {
                const newTodo = {...todo };
                newTodo.completed = true;
                return newTodo;
            }
            return todo;
        });
        myToDo.setToDoArray(upDatedToDo);
    } else {
        const upDatedToDo = myToDo.getToDoArray().map((todo) => {
            if (todo.index === parseInt((todoId), 10)) {
                const newTodo = {...todo };
                newTodo.completed = false;
                return newTodo;
            }
            return todo;
        });
        myToDo.setToDoArray(upDatedToDo);
    }
});

const inputField = document.querySelector('.inputField');
const inputTodo = document.getElementById('input-todo');

inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        myToDo.addToDo(inputTodo.value);
        inputTodo.value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    myToDo.getListFromLocal();
    myToDo.displayToDo();
    clearCompletedTasks();

    const btn = document.getElementsByClassName('todo-btn');

    for (let i = 0; i < btn.length; i += 1) {
        btn[i].addEventListener('click', (e) => {
            const remove = e.target.id;
            myToDo.removeToDo(remove);
        }, false);
    }
});

export default myToDo;