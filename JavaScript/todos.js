let toDosStates = {};

function addToDos(title, date, time) {
  const toDo = { title, date, time };

  if (toDosStates[date] === undefined) {
    toDosStates[date] = [toDo];
  } else {
    toDosStates[date].push(toDo);
  }
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
  const dateInput = document.getElementById("where-event");

  const what = whatInput.value;
  const when = whenInput.value;
  const date = dateInput.value;
  if (what !== "" && when !== "" && date !== "") {
    addToDos(what, date, when);
    whatInput.value = "";
    whenInput.value = "";
    dateInput.value = "";
    console.log(toDosStates);
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

  for (const [date, toDosState] of Object.entries(toDosStates)) {
    const containerDiv = document.createElement("div");

    for (let i = 0; i < toDosState.length; i++) {
      let appointmentTitle = document.createElement("h2");
      appointmentTitle.className = "todo";
      appointmentTitle.setAttribute("id", i);
      let appointmentTime = document.createElement("span");
      appointmentTitle.innerHTML = toDosState[i].title;
      appointmentTime.innerHTML = date + " " + toDosState[i].time;

      // remove todo
      containerDiv.addEventListener("click", () => {
        toDosState.splice(i, 1);
        renderToDos();
  
      });
      containerDiv.append(appointmentTitle, appointmentTime);
      toDosContainer.append(containerDiv);
    }
    const eventDay = document.getElementById(date);
    let countShowCase = eventDay.querySelector(".counter");
    
    if (countShowCase === null) {
      countShowCase = document.createElement("span");
      countShowCase.className = "counter";
      eventDay.append(countShowCase);
    } else if (!toDosState.length) {
      //Add code to remove from dom if there are no to dos on date
      countShowCase.remove();
    }
    if (toDosState.length > 0) {
      countShowCase.innerHTML = toDosState.length;
    }
  }
}

/**
 * Renders the time in the sidebar
 */
function toDoListClock() {
  const toDoTime = document.getElementById("time");
  setInterval(function updateTime() {
    const date = new Date();
    var string = date.toLocaleTimeString([], { timeStyle: "short" });

    toDoTime.innerHTML = string;
  }, 10);
}
