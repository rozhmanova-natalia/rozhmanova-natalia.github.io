// Усі завдання зберігаються в одному глобальному масиві.
const taskList = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskListElement = document.getElementById('task-list');
const emptyMessage = document.getElementById('empty-message');

// Поточна місцева дата у форматі РРРР-ММ-ДД ГГ:ХХ.
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Клас створює завдання з полями, зазначеними в умові.
class Task {
    constructor(title) {
        this.title = title;
        this.status = 'todo';
        this.startDate = getCurrentDate();
        this.endDate = '';
    }

    complete() {
        // Повторний клік не змінює дату виконання.
        if (this.status === 'done') {
            return;
        }

        this.status = 'done';
        this.endDate = getCurrentDate();
    }
}

// Оновлюємо список на сторінці відповідно до масиву.
function renderTasks() {
    taskListElement.innerHTML = '';
    emptyMessage.hidden = taskList.length > 0;

    taskList.forEach(function (task, index) {
        const item = document.createElement('li');
        item.className = 'list-group-item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'task-button';
        button.setAttribute('aria-pressed', task.status === 'done');

        const title = document.createElement('span');
        title.className = 'task-title';
        title.textContent = task.title;

        const dates = document.createElement('span');
        dates.className = 'task-date';
        dates.textContent = 'Створено: ' + task.startDate;

        if (task.status === 'done') {
            title.classList.add('text-decoration-line-through', 'text-muted');
            dates.textContent += ' · Виконано: ' + task.endDate;
        }

        button.addEventListener('click', function () {
            task.complete();
            renderTasks();
            taskListElement.children[index].querySelector('button').focus();
        });

        // Видаляти можна будь-яке завдання, незалежно від статусу.
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Видалити';
        deleteButton.setAttribute('aria-label', 'Видалити завдання: ' + task.title);

        deleteButton.addEventListener('click', function () {
            taskList.splice(index, 1);
            renderTasks();
            taskInput.focus();
        });

        button.append(title, dates);
        item.append(button, deleteButton);
        taskListElement.append(item);
    });
}

// Форма працює і з кнопкою «Додати», і з клавішею Enter.
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = taskInput.value.trim();

    // Не додаємо порожній текст або самі пробіли.
    if (title === '') {
        taskInput.value = '';
        taskInput.focus();
        return;
    }

    taskList.push(new Task(title));
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
});
