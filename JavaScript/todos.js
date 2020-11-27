let toDosState = [];
/**
 * function for adding to the array of to dos
 */
function addToDos(title, date, time) {
  const toDo = {
    title,
    date,
    time,
  };
  toDosState.push(toDo);
}

//Getting the form for adding events
const form = document.getElementById("add-event-form");
/**
 * function for adding user input as an object (adds to the toDo object)
 */
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
    console.log(toDosState);
  }
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
  const toDosContainer = document.querySelector(".todo-container");

  toDosContainer.innerHTML = "";

  for (let i = 0; i < toDosState.length; i++) {
    const containerDiv = document.createElement('div');
    let appointmentTitle = document.createElement("h2");
    appointmentTitle.className = "todo";
    appointmentTitle.setAttribute("id", i);
    let appointmentTime = document.createElement("span");

    appointmentTitle.innerHTML = i + ". " + toDosState[i].title;
    appointmentTime.innerHTML = toDosState[i].date + " " + toDosState[i].time;

    containerDiv.addEventListener('click', () => {
      toDosState.splice(i, 1);
      renderToDos();
      //ADD RENDER CALENDAR HERE
      console.log(toDosState);
    })

    containerDiv.append(appointmentTitle, appointmentTime);
    toDosContainer.append(containerDiv);

  }
}

//Shows current time in the ToDo-list
// ADD THIS TO A FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! bad code bad code bad code
const toDoTime = document.getElementById("time");
setInterval(function updateTime() {
  const date = new Date();
  var string = date.toLocaleTimeString([], { timeStyle: "short" });

  toDoTime.innerHTML = string;
}, 1000);
