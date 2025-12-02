const AddTask = document.getElementById('AddTask');

AddTask.addEventListener('click', function createTask() {
    console.log("Операция выполнена!");
    // Получаем "Рабочий объект"
    const todayTask = document.getElementById('TodayTask');
    const text = taskInput.value.trim()
    // Создаем новый контейнер для задачи
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container'; // опционально, для стилей
    
    // Устанавливаем внутренний HTML
    taskContainer.innerHTML = `
        <span class="task-text table__task task">${text}</span>
        <div class="task-actions">
            <button class="btn btn__delete" id="delete">Удалить</button>
        </div>
    `;
    // Добавляем новый контейнер в todayTask
    todayTask.appendChild(taskContainer);
});


// Кнопка удаления

document.getElementById('TodayTask').addEventListener('click', function(event) {
    // Проверяем все возможные селекторы
    if (event.target.matches('.delete-btn, .btn__delete, [data-action="delete"]')) {
        const taskContainer = event.target.closest('.task-container');
        if (taskContainer) {
            taskContainer.remove();
        }
    }
});







