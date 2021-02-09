class TaskManager {
  constructor(currentId = 0) {
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
  // deleteTask(taskId) {
  //   let newTasks = [];
  //   for (let i = 0; i < tasks.length; i++) {
  //     let task = tasks[i];
  //     if (task.id !== taskId) {
  //       newTasks.push(task);
  //       this.tasks = newTasks;
  //     }
  //   }
  // }
}

let newTask = new TaskManager();
// newTask.addTask("Developer", "nice work", "hello", "2021/04/03");
// console.log(newTask);

// let newTask2 = new TaskManager();
// newTask.addTask("web", "good", "toooo", "2011/04/08", "ToDo");
console.log(newTask.tasks);