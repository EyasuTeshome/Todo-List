const getTodo = () => {
    let todoList;
    if (localStorage.getItem('todoList') === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }
    return todoList;
};

const addTodo = (todo) => {
    const todoList = getTodo();
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
};

const deleteTodo = (author) => {
    const todoList = getTodo();

    todoList.forEach((todo, index) => {
        if (todo.author === author) {
            todoList.splice(index, 1);
        }
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));
};

export { getTodo, addTodo, deleteTodo };