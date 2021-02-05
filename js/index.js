// import TaskManager from "./taskManager";

// ***************TaskManager.js************************************
class TaskManager {
  constructor(currentId = 1) {
    this.currentId = currentId;
    this.tasks = [];
  }

  addTask(name, description, assignedTo, dueDate, status) {
    this.tasks.push({
      currentId: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    });
    this.currentId++;
  }
}

let newTask = new TaskManager();
newTask.addTask("Developer", "nice work", "Tigist", "2021/04/03", status);
// console.log(newTask);

// let newTask2 = new TaskManager();
newTask.addTask("web", "good", "toooo", "2011/04/08", status);
console.log(newTask.tasks);

// ***************indexedDB.js***********************
const task = document.getElementById("taskName");
const description = document.getElementById("Description");
const assigned = document.getElementById("assigned");
const dueDate = document.getElementById("date");
const form = document.getElementById("form");
const errorDisplay = document.getElementById("error-display");
const finalTask = document.getElementById("final-task");
const assignedTo = document.getElementById("assignedTo");
const lastDueDate = document.getElementById("due-date");
const taskN = document.getElementById("taskN");
const DescriptionT = document.getElementById("DescriptionT");
const taskSubmit = document.getElementById("sub");
const markAsDone = document.getElementById("markAsDone");
const deleteS = document.getElementById("deleteS");
const inProgress = document.getElementById("inProgress");
const newAddedTask = document.getElementById("newAddedTask");
// to get value
let taskValue = task.value;
let descriptionValue = description.value;
let assignedValue = assigned.value;
let dueDateValue = dueDate.value;
let newAddedTaskValue = newAddedTask.value;

let count = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (task.value === "" || task.value === null) {
    messages.push("Task name is required");
    count.push(1);
  }
  if (description.value === "" || description.value === null) {
    messages.push("Description is blank");
    count.push(2);
  }
  if (assigned.value === "" || assigned.value === null) {
    messages.push("Assigned to is required");
    count.push(3);
  }
  if (dueDate.value === "" || dueDate.value === null) {
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
    assignedTo.innerText = "Assigned To: " + assigned.value;
    lastDueDate.innerText = "Due Date : " + dueDate.value;
    taskN.innerText = "Task Name: " + task.value;
    DescriptionT.innerText = "Description: " + description.value;
  }
});
function deleteButton(e) {
  e.preventDefault();
  finalTask.style.display = "none";
  taskValue === " " &&
    descriptionValue === " " &&
    assignedValue === " " &&
    dueDateValue === " ";
}
deleteS.onclick = deleteButton;

function markAsB() {
  markAsDone.style.display = "none";
  inProgress.style.display = "block";
}

markAsDone.onclick = markAsB;

// function createsNewTask() {
//   if (messages.length === 0) {
//     finalTask.style.display = "block";
//     newAddedTaskValue = newAddedTaskValue++;
//   }
// }

// taskSubmit.onsubmit = "return false";

taskSubmit.addEventListener("click", function () {
  newTask.addTask();
  console.log(newTask.tasks);
});
