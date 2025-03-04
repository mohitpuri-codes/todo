"use strict";

let addTask = () => {
  let btnClick = document.getElementById("addTask");

  btnClick.addEventListener("click", (event) => {
    let inputValue = document.getElementById("addTaskValue");
    let task = inputValue.value;

    if (!task) {
      alert("Task cannot be empty");
    } else {
      // console.log(task);
      let listItem = document.createElement("li");
      listItem.innerHTML = `<span class="task-text">${task}</span>
      <div class="task-actions">
        <button class="editTask">Edit</button>
        <button class="deleteTask">Delete</button>
      </div>`;
      listItem.className = "task";
      document.querySelector("ul").appendChild(listItem);
      inputValue.value = "";
    }
  });
};

addTask();

let removeTask = () => {
  let todoList = document.querySelector("#todoList");
  console.log(todoList);

  todoList.addEventListener("click", (event) => {
    // console.log(event.target.classList);

    if (event.target.classList.contains("deleteTask")) {
      event.target.closest("li").remove();
    }
  });
};

removeTask();

let editTask = () => {
  let todoList = document.querySelector("#todoList");

  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("editTask")) {
      let taskText = event.target.closest("li").querySelector(".task-text");
      let input = document.createElement("input");
      input.type = "text";
      input.value = taskText.textContent;
      input.classList.add("edit-input");
      taskText.replaceWith(input);
      input.focus();

      input.addEventListener("blur", () => {
        taskText.textContent = input.value.trim() || taskText.textContent;
        input.replaceWith(taskText);
      });

      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          input.blur();
        }
      });
    }
  });
};
editTask();
