const toDosState = [];
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

const form = document.getElementById('add-event-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const whatInput = document.getElementById('what-event');
  const whenInput = document.getElementById('what-event');
  const wereInput = document.getElementById('what-event');

  const what = whatInput.value;
  if (what !== '') {
    addToDos(what);
    whatInput.value = '';
    whatInput.focus();
    console.log(toDosState);
  }
  const when = whenInput.value;
  if (when !== '') {
    addToDos(when);
    whenInput.value = '';
    whenInput.focus();
  }
  const where = whatInput.value;
  if (what !== '') {
    addToDos(what);
    whatInput.value = '';
    whatInput.focus();
    console.log(toDosState);
  }
  renderToDos();
})

/**
 * function to open the Add Event meny
 */
function openAddEventWindow() {
  const toDoButton = document.getElementById("new-event-button");
  toDoButton.addEventListener('click', toggleWindow);
  const window = document.querySelector('#toggleHidden')
  const addEventButton = document.getElementById('close-event-window');
  addEventButton.addEventListener('click', toggleWindow);
  /**
   * function to open and close the window on button press
   */
  function toggleWindow() {
    window.classList.toggle('hidden');
  }
}





/**
 * renders the array of objects containing the ToDos to the DOM
 */
function renderToDos() {
  const toDoContainer = document.querySelector(".todo-container");

  for (let i = 0; i < toDosState.length; i++) {
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
