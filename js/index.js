let newTask2 = new TaskManager();

//  newTask2.getTaskById(0)
// document.getElementById("form").reset();
// ***************indexedDB.js***********************

// ************all form**************************
let form = document.getElementById("form");

// form part variables
let task = document.getElementById("taskName");
let description = document.getElementById("Description");
let assigned = document.getElementById("assigned");
let dueDate = document.getElementById("date");
let errorDisplay = document.getElementById("error-display");
let taskSubmit = document.getElementById("subAddTask");

// card part
let finalTask = document.getElementById("final-task");
let taskN = document.getElementById("taskN");
let DescriptionT = document.getElementById("DescriptionT");
let assignedTo = document.getElementById("assignedTo");
let lastDueDate = document.getElementById("due-date");

// Mark as done and delete
let id = 0;
let deleteS = document.getElementById("deleteS");
let inProgress = document.getElementById("inProgress");
let newAddedTask = document.getElementById("newAddedTask");
// to get value
// let newAddedTaskValue = newAddedTask.value;
let listContainer = document.getElementsByClassName("list-group")[0];
let taskNumber = 1;
let formattedDate;
let count = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  let taskValue = task.value;
  let descriptionValue = description.value;
  let assignedValue = assigned.value;
  let dueDateValue = dueDate.value;
  // let date = new Date(this.tasks.dueDate);
  // formattedDate = date.toDateString();
  let myDate = new Date(dueDateValue);
  // let year = myDate.getFullYear();
  // let day = myDate.getDate() + 1;
  // let month = myDate.getMonth() + 1;
  // formattedDate = `${month}/${day}/${year}`;
  formattedDate = myDate.toDateString();

  if (taskValue === "" || taskValue === null) {
    messages.push("Task name is required");
    count.push(1);
  }
  if (descriptionValue === "" || descriptionValue === null) {
    messages.push("Description is blank");
    count.push(2);
  }
  if (assignedValue === "" || assignedValue === null) {
    messages.push("Assigned to is required");
    count.push(3);
  }
  if (dueDateValue === "" || dueDateValue === null) {
    messages.push("Due date is blank");
    count.push(4);
  }

  if (messages.length > 0 && count.length < 5) {
    e.preventDefault();
    errorDisplay.style.display = "block";
    for (let i = 0; i < messages.length; i++) {
      errorDisplay.innerHTML += messages[i] + "<br>";
    }
  }
  if (messages.length === 0) {
    e.preventDefault();
    finalTask.style.display = "block";
    addNewTask();
    taskNumber++;
    // id++;
  }
  task.value = "";
  description.value = "";
  assigned.value = "";
  dueDate.value = "";

  // newTask2.addTask("hhhh", "uuuu", "huuhh", "mmm", status);
  // console.log(newTask2.tasks[0].name);

  // newTask2.render();
  // let taskHtml = tasksHtmlList();
  // console.log(taskHtml);
});

function addNewTask() {
  let newHtml = `
  <li id = "${id}" class="list-group list-group-horizontal">
      <div class="card border-primary">
        <h5
          id="newAddedTask"
          class="card-header list-part font-weight-bold text-center"
          >
          Task ${taskNumber}
        </h5>
        <div class="card-body">
            <p class="card-text" id="taskN">Task Name: ${task.value}</p>
            <p class="card-text" id="DescriptionT">Description: ${description.value}</p>
            <p class="card-text" id="assignedTo">Not Assigned To: ${assigned.value}</p>
            <p class="card-text" id="due-date">Due date: ${formattedDate}</p>
            <p class="card-text status">Status:TODO </p>
            <button type="submit" id="markAsDone" class="btn btn-success">Mark as Done</button>
            <button type="submit" id="deleteS" class="btn btn-danger">Delete</button>
       </div>
      </div>
    </li>`;
  listContainer.insertAdjacentHTML("beforeend", newHtml);
}

listContainer.addEventListener("click", (e) => {
  let selected = e.target;
  if (selected.classList.contains("btn-danger")) {
    let test = selected.parentElement.parentElement.parentElement;
    let selectedId = test.getAttribute("id");
    // console.log(newTask2.tasks);
    newTask2.tasks.splice(selectedId, 1);
    // console.log(newTask2.tasks);
    test.remove();
  }
});
listContainer.addEventListener("click", (event) => {
  let selected1 = event.target;
  let selectContainer = selected1.parentElement.parentElement.parentElement;
  // console.log(selectContainer);
  if (selected1.classList.contains("btn-success")) {
    let status = selectContainer.getElementsByClassName("status")[0];
    selected1.innerText = "Done";
    status.innerText = "Status: DONE";

    // newTask2.deleteTask(1);
  }
});

function showToConsole() {
  let taskValue = task.value;
  let descriptionValue = description.value;
  let assignedValue = assigned.value;
  let dueDateValue = dueDate.value;
  newTask2.addTask(
    taskValue,
    descriptionValue,
    assignedValue,
    dueDateValue,
    status
  );

  console.log(newTask2.tasks);
}
taskSubmit.onclick = showToConsole;
