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

    appointment += `<h2 id="task-1-container">${todo.title}</h2>`;
    //  appointment += '</br>';
    appointment += `<span id="task-1-container">${todo.time}</span>`;
    toDoContainer.innerHTML = appointment;
  }
}
