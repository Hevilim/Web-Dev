const input = document.getElementById('task-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('task-list');

button.addEventListener('click', function() {
    const taskText = input.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    checkbox.addEventListener('change', function() {
        taskSpan.classList.toggle('completed');
    });


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
});