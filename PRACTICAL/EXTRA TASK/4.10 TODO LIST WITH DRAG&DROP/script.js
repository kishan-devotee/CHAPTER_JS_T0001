let list = document.querySelector('.list');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

list.addEventListener('dragstart', (e) => {
    let select = e.target;

    right.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    right.addEventListener('drop', (e) => {
        right.appendChild(select);
        select = null;
    });
});

const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');
const todoList = document.getElementById('left');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        todoList.appendChild(newTask);
        newTaskInput.value = '';
    }
});

function createTaskElement(taskText) {
    const task = document.createElement('div');
    task.classList.add('list');
    task.setAttribute('draggable', 'true');
    task.textContent = taskText;

    task.addEventListener('dragstart', (e) => {
        let select = e.target;

        right.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        right.addEventListener('drop', (e) => {
            right.appendChild(select);
            select = null;
        });
    });

    return task;
}
