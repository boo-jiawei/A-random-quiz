const addTask = () => {
    const userInput = document.getElementById("user-input");
    const task = userInput.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const noTask= document.getElementById("no-tasks");
    if (task !== "") {
        noTask.textcontenet = "";
    }

    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "li-style";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    userInput.value = "";
};

const deleteTask = (task) => {
    task.parentNode.removeChild(task);
};