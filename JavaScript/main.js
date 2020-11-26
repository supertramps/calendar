

const date = new Date();

/**
 * Renders and updates the calendar depending on month
 */
const renderCalendar = () => {
  //Variables for calendar
  date.setDate(7);

  const monthDays = document.querySelector(".days");

  //Returns the last date of the month.
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  //Returns the last day of the month. .getDay returns the index number of the weekday instead of the date.
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    +1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Clears calendar before running for-loops
  let days = "";

  //Prints current month and year to header in DOM
  document.querySelector(".date h1").innerHTML =
    months[date.getMonth()] + " " + date.getFullYear();

  //Fills calender with days from last month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  //Fills calendar with days from current month and highlights todays date
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div id="${i}" class="today">${i}</div>`;
    } else {
      days += `<div id="${i}">${i}</div>`;
    }
  }

  //Fills calender with days from next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

//EventListener for running main function on page load
window.addEventListener("load", main());



function main() {
  renderCalendar();
  addEventListeners();
  addToDos();
  printPhraseAndTimeToDom();

}

/**
 * EventListeners for calendar.
 */
function addEventListeners() {
  //Use left arrow to change to previous month

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  //Use right arrow to change to next month
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
}
