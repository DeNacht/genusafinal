class TaskManager {
  constructor() {
    this.task = [];
    this.currentId = 0;
  }
  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId++;
  }
}
const newTask = new TaskManager("newTask");
const newAdded = newTask.addTask(
  "Developer",
  "nice work",
  "Tigist",
  2021 / 10 / 02,
  "ToDo"
);
const last = newTask.push(newAdded);
console.log(newTask);
