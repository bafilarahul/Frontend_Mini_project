document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
function editTask(button) {
    const li = button.parentElement;
    const taskText = prompt('Edit your task:', li.firstChild.textContent.trim());
    if (taskText) {
        li.firstChild.textContent = taskText + ' ';
    }
}
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
