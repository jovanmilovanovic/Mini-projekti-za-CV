// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Get the task value from the input
    const taskValue = taskInput.value;

    // Check if the input is not empty
    if (taskValue.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;

        // Add a delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            listItem.remove();
        };

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}
