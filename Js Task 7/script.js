let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {

    let task = input.value;

    if (task === "") {

        alert("Enter a task");

    } else {

        // Create li
        let li = document.createElement("li");

        // Add task text
        li.innerText = task;

        // Create Delete button
        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete";

        // Delete task
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // Add Delete button inside li
        li.append(deleteButton);

        // Add li inside ol
        taskList.append(li);

        // Clear input
        input.value = "";
    }
});