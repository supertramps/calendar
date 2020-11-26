let toDosState = [];
/**
 * function to add a To dos to the array of to dos
 */
function addToDos(title, date, time) {
  const toDo = {
    title,
    date,
    time,
  };
  toDosState.push(toDo);
}

const form = document.getElementById("add-event-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const whatInput = document.getElementById("what-event");
  const whenInput = document.getElementById("when-event");
  const whereInput = document.getElementById("where-event");

  const what = whatInput.value;
  const when = whenInput.value;
  const where = whereInput.value;
  if (what !== "" && when !== "" && where !== "") {
    addToDos(what, where, when);
    whatInput.value = "";
    whenInput.value = "";
    whereInput.value = "";
    whatInput.focus();
    whenInput.focus();

    console.log(toDosState);
    
  }

  console.log(what);
  console.log(where);
  console.log(when);
  renderToDos();
});

/**
 * function to open the Add Event meny
 */
function openAddEventWindow() {
  const toDoButton = document.getElementById("new-event-button");
  toDoButton.addEventListener("click", toggleWindow);
  const window = document.querySelector("#toggleHidden");
  const addEventButton = document.getElementById("close-event-window");
  addEventButton.addEventListener("click", toggleWindow);
  const submitBtn = document.getElementById("btn-for-submit");
  submitBtn.addEventListener("click", toggleWindow);
  /**
   * function to open and close the window on button press
   */
  function toggleWindow() {
    window.classList.toggle("hidden");
  }
}

/**
 * renders the array of objects containing the ToDos to the DOM
 */
function renderToDos() {
  const toDoContainer = document.querySelector(".todo-container");

  for (let i = 1; i < toDosState.length; i++) {
    let appointmentTitle = document.createElement("h2");
    let appointmentTime = document.createElement("span");

    appointmentTitle.innerHTML = toDosState[i].title;
    appointmentTime.innerHTML = toDosState[i].time;

    toDoContainer.append(appointmentTitle, appointmentTime);
  }
}

//Shows current time in the ToDo-list
// ADD THIS TO A FUNCTION FOR FUCK SAKE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! bad code bad code bad code
const toDoTime = document.getElementById("time");
setInterval(function updateTime() {
  const date = new Date();
  var string = date.toLocaleTimeString([], { timeStyle: "short" });

  toDoTime.innerHTML = string;
}, 1000);
