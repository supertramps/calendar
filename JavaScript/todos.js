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
  let count = 0;
  let eventCountForDate = [];
  toDosContainer.innerHTML = "";

  for (let i = 0; i < toDosState.length; i++) {
    const containerDiv = document.createElement("div");
    let appointmentTitle = document.createElement("h2");
    appointmentTitle.className = "todo";
    appointmentTitle.setAttribute("id", i);
    let appointmentTime = document.createElement("span");

    appointmentTitle.innerHTML = i + ". " + toDosState[i].title;
    appointmentTime.innerHTML = toDosState[i].date + " " + toDosState[i].time;

    // remove todo
    containerDiv.addEventListener("click", () => {
      toDosState.splice(i, 1);
      renderToDos();
      markDayWithToDo();
      renderCalendar();
      //ADD RENDER CALENDAR HERE
    });
    containerDiv.append(appointmentTitle, appointmentTime);
    toDosContainer.append(containerDiv);

    // Targets days with same ID as event date
    let dateOfToDo = toDosState[i].date;

    const getDaysDiv = document.querySelectorAll(".toDoMark");
    
    for (let index = 0; index < getDaysDiv.length; index++) {
      if (getDaysDiv[index].id === dateOfToDo) {
        count++;
        eventCountForDate.push(count);
        const eventDay = document.getElementById(dateOfToDo);
        eventDay.style.color = "red";

        // creates a <p> in the calendar, TODO: make the <p> show number of events on that day
        let eventCounter = document.createElement("p");
        eventCounter.innerHTML = count;
        eventDay.append(eventCounter);
      }
    }
  }
  console.log(count);
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
