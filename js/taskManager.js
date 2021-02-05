class TaskManager {
  constructor(currentId = 0) {
    this.task = [];
    this.currentId = currentId; 
  }
  addTask(taskName, desc, assign, due, stat) {
    this.currentId++;    
    const jobName = {
      name: taskName,
      description: desc,
      assignedTo: assign,
      dueDuate: due,
      status: stat
    } 
    this.task.push(jobName);
  }
}
const taskArray = new TaskManager ();

taskArray.addTask('final', 'project', 'denise', 'today', 'TODO')
taskArray.addTask('final', 'project', 'denise', 'today', 'TODO')
taskArray.addTask('final', 'project', 'denise', 'today', 'TODO')

console.log(taskArray);