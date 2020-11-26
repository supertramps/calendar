const todosState = [
  {
    title: "Middag med katten",
    date: new Date(),
    time: "19:00",
  },
];

function addToDos() {
  renderToDos();
}

function renderToDos() {
  const toDoContainer = document.querySelector(".todo-container");
  toDoContainer.innerHTML = "";

  for (const todo of todosState) {
    let appointment = "";

    appointment += `<h2 class="task-title">${todo.title}</h2>`;
    //  appointment += '</br>';
    appointment += `<span class="task-time">${todo.time}</span>`;
    toDoContainer.innerHTML = appointment;
  }
}

//Shows current time in the ToDo-list
const toDoTime = document.getElementById("time");
setInterval(function updateTime() {
  const date = new Date();
  var string = date.toLocaleTimeString([], { timeStyle: "short" });
  console.log(string);

  toDoTime.innerHTML = string;
}, 1000);
