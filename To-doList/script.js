document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const todoList = document.getElementById("todo-list");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-btn">Remove</button>
            `;
            todoList.appendChild(newTask);
            taskInput.value = "";

            newTask.addEventListener("click", function() {
                newTask.classList.toggle("completed");
            });

            const removeBtn = newTask.querySelector(".remove-btn");
            removeBtn.addEventListener("click", function() {
                todoList.removeChild(newTask);
            });
        }
    });

    // Press Enter to add task
    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
