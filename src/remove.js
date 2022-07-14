const removeTodo = (el) => {
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
};

const clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
};

export { removeTodo, clearFields };