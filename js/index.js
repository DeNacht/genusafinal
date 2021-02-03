const task = document.getElementById("taskName");
const description = document.getElementById("Description");
const assigned = document.getElementById("assigned");
const dueDate = document.getElementById("date");
const form = document.getElementById("form");
const errorDisplay = document.getElementById("error-display");
const finalTask = document.getElementById("final-task");
const assignedTo = document.getElementById("assignedTo");
const lastDueDate = document.getElementById("due-date");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (task.value === "" || task.value === null) {
    messages.push("Task name is required");
  }
  if (description.value === "" || description.value === null) {
    messages.push("Description is blank");
  }
  if (assigned.value === "" || assigned.value === null) {
    messages.push("Assigned to is required");
  }
  if (dueDate.value === "" || dueDate.value === null) {
    messages.push("Due date is blank");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorDisplay.style.display = "block";
    for (let i = 0; i < messages.length; i++) {
      errorDisplay.innerHTML += messages[i] + "<br>";
    }
  }
  if (messages.length === 0) {
    e.preventDefault();
    finalTask.style.display = "block";
    assignedTo.innerText = "Assigned to:" + assigned.value;
    lastDueDate.innerText = "Due date :" + dueDate.value;
  }
});

let taskName2 = document.getElementsByName("task-name");
let taskName2Element = taskName2[0];
taskName2Element.onblur = checkIfNameIsEmpty;

function checkIfNameIsEmpty() {
  let taskName2ElementValue = taskName2Element.value;
  if (!taskName2ElementValue) {
    errorDisplay.style.display = "block";
    errorDisplay.innerHTML = "Task name field is required  <br>";
    // taskName2Element.style.border = "3px solid red";
    // taskName2Element.style.backgroundColor = "lightPink";
  }
}
