function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Do the chores");
const task2 = newTask("Learn JS", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();

task2.complete;
task2.logState;
