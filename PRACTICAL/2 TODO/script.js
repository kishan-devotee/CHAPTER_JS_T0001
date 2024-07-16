let inp = document.getElementById("inp");
let TodoBox = document.getElementById("todo-list");
let Store = JSON.parse(localStorage.getItem("tasks")) || [];

// Add ToDo
const onSubmitTask = (event) => {
  event.preventDefault();
  let task = inp.value;
  Store.unshift({ task: task, completed: false });
  localStorage.setItem("tasks", JSON.stringify(Store));
  inp.value = "";
  window.location.href = "#";
  window.location.reload();
};

//Close Pop-up
const onClose = () => {
  inp.value = "";
};

// Filter Todo All, Complete & pending
let Taskstatus = "All";
const comp = () => {
  Taskstatus = "Complete";
  showAllTasks();
  console.log(Taskstatus);
};

const pend = () => {
  Taskstatus = "Pending";
  showAllTasks();
  console.log(Taskstatus);
};

const allTask = () => {
  Taskstatus = "All";
  showAllTasks();
  console.log(Taskstatus);
};

// Show ToDo
const showAllTasks = () => {
  TodoBox.innerHTML = "";

  if (Taskstatus === "Complete") {
    // check all tasks if complete then filter it out
    Store.map((task, index) => {
      if (task.completed) {
        TodoBox.innerHTML += `
                <div class="${task.completed ? "box-todo" : "Comp-box-todo"}">
                    <div class="Check">
                        <input type="checkbox" id="IsComp${index}" class="checkbox" ${
          task.completed ? "checked" : ""
        } onchange="CheckStatus(${index})"/>
                        <span class="material-symbols-outlined del" id="${
                          index + 1
                        }" onclick="deleteTask(event)"> delete </span>
                        <span class="material-symbols-outlined edi" id="${
                          index + 1
                        }" onclick="EditTask(event)"> edit_note </span>
                    </div>
                    <div class="contentTask">
                        <p id="task_${index}" class="${
          task.completed ? "TaskComp" : "TaskInComp"
        }">${task.task}</p>
                    </div>
                    <div class="${task.completed ? "complete" : "NotComp"}">
                        ${task.completed ? "Complete ✔" : "!Not Complete"}
                    </div>
                </div>
            `;
      }
    });
  } else if (Taskstatus === "Pending") {
    // check all tasks if not complete then filter it out
    Store.map((task, index) => {
      if (!task.completed) {
        TodoBox.innerHTML += `
                <div class="${task.completed ? "box-todo" : "Comp-box-todo"}">
                    <div class="Check">
                        <input type="checkbox" id="IsComp${index}" class="checkbox" ${
          task.completed ? "checked" : ""
        } onchange="CheckStatus(${index})"/>
                        <span class="material-symbols-outlined del" id="${
                          index + 1
                        }" onclick="deleteTask(event)"> delete </span>
                        <span class="material-symbols-outlined edi" id="${
                          index + 1
                        }" onclick="EditTask(event)"> edit_note </span>
                    </div>
                    <div class="contentTask">
                        <p id="task_${index}" class="${
          task.completed ? "TaskComp" : "TaskInComp"
        }">${task.task}</p>
                    </div>
                    <div class="${task.completed ? "complete" : "NotComp"}">
                        ${task.completed ? "Complete ✔" : "!Not Complete"}
                    </div>
                </div>
            `;
      }
    });
  } else {
    Store.map((task, index) => {
      TodoBox.innerHTML += `
                <div class="${task.completed ? "box-todo" : "Comp-box-todo"}">
                    <div class="Check">
                        <input type="checkbox" id="IsComp${index}" class="checkbox" ${
        task.completed ? "checked" : ""
      } onchange="CheckStatus(${index})"/>
                        <span class="material-symbols-outlined del" id="${
                          index + 1
                        }" onclick="deleteTask(event)"> delete </span>
                        <span class="material-symbols-outlined edi" id="${
                          index + 1
                        }" onclick="EditTask(event)"> edit_note </span>
                    </div>
                    <div class="contentTask">
                        <p id="task_${index}" class="${
        task.completed ? "TaskComp" : "TaskInComp"
      }">${task.task}</p>
                    </div>
                    <div class="${task.completed ? "complete" : "NotComp"}">
                        ${task.completed ? "Complete ✔" : "!Not Complete"}
                    </div>
                </div>
            `;
    });
  }
};

// Delete Task
const deleteTask = (event) => {
  let id = event.target.id - 1;
  Store.splice(id, 1);
  localStorage.setItem("tasks", JSON.stringify(Store));
  showAllTasks();
};

// Edit Task
const EditTask = (event) => {
  let id = event.target.id - 1;
  let taskElement = document.getElementById(`task_${id}`);
  let task = taskElement.innerText;

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", task);
  input.className = "edit-task";
  taskElement.innerHTML = "";
  taskElement.appendChild(input);
  input.focus();

  input.addEventListener("blur", (e) => {
    Store[id].task = e.target.value;
    localStorage.setItem("tasks", JSON.stringify(Store));
    showAllTasks();
  });
};

// Check Status
const CheckStatus = (index) => {
  Store[index].completed = !Store[index].completed;
  localStorage.setItem("tasks", JSON.stringify(Store));
  showAllTasks();
};

showAllTasks();