class TaskManager {
  constructor() {
    this.task = [];
    this.currentId = 0;
  //  this.name =  '';
  //   this.description ='';
  //  this.assignedTo ='';
  //   this.dueDate = Date;
  //   this.status = ''
  }
  getCurrentID (){
   // this.currentId = 0;
    this.currentId++;
  } 
  addTask(name, description, assignedTo, dueDate, status) {
    
    this.name =  name;
    this.description = description;
   this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status
       
  }

 }
let newTask = new TaskManager('myTask');
myTask = newTask.addTask(
  newTask.getCurrentID(),
  "Developer",
  "nice work",
  "Tigist",
  Date,
  "ToDo"
);
newTask.task.push(myTask);
console.log(newTask);

let addTask = new TaskManager('todo')
todo = addTask.addTask(
  addTask.getCurrentID(),
  "group5",
  "good",
  "Addis",
  2021/02/23,
  "ToDo"
);
addTask.task.push(todo)
console.log(addTask);
console.log(addTask.task.length)
