const toDosState = [
  {
    title: "Middag med katten",
    date: new Date(),
    time: "19:00",
  },
  {
    title: "Middag med pappsen",
    date: new Date(),
    time: "17:00",
  },
  {
    title: "Middag med poopsen",
    date: new Date(),
    time: "18:00",
  },
];

function addToDos() {
  renderToDos();
}

function renderToDos() {
  const toDoContainer = document.querySelector(".todo-container");

  for (let i = 0; i < toDosState.length; i++) {
    let appointmentTime = document.createElement("span");
    let appointmentTitle = document.createElement("h2");

    appointmentTime.innerHTML = toDosState[i].time;
    appointmentTitle.innerHTML = toDosState[i].title;

    toDoContainer.append(appointmentTime, appointmentTitle);
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
