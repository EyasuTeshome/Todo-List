/* eslint-disable */

import myToDo from './index.js';

const clearCompleted = document.querySelector('.clear-completed');

export default function clearCompletedTasks() {
    clearCompleted.addEventListener('click', () => {
        myToDo.getToDoArray().map((todo) => {
            const newTodo = {...todo };
            if (newTodo.completed) {
                myToDo.removeToDo(newTodo.index);
            }
            return todo;
        });
    });
}