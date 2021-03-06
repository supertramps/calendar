const date = new Date();
const dateID = "";

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
    // adds 0 to date if date is single digit
    let prefixDate = i;
    if (i < 10) {
      prefixDate = "0" + i;
    }

    // adds a 0 to month if month is single digit
    let prefixMonth = date.getMonth() + 1;
    if (date.getMonth() + 1 < 10) {
      prefixMonth = "0" + (date.getMonth() + 1);
    }

    const dateID = date.getFullYear() + "-" + prefixMonth + "-" + prefixDate;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div id="${dateID}" class="today toDoMark">${i}</div>`;
    } else {
      days += `<div id="${dateID}" class="toDoMark"><p class="date-number">${i}</p></div>`;
    }
  }

  //Fills calender with days from next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  //   function renderToDosInCalendar() {
  //     // Match ID for days with toDosState.date and then render to calendar
  //     // if toDosState.date = calendarDate.ID render number to calendar

  //     const date = document.querySelector(".days > div");
  //     for (let index = 0; index <= 31; index++) {
  //       if (!date.classList.contains("prev-dates")) {
  //         console.log(date);
  //       }
  //     }
  //   }
  //   renderToDosInCalendar();
};

/**
 * EventListeners for calendar.
 */
function addEventListeners() {
  //Use left arrow to change to previous month

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    renderToDos();
  });

  //Use right arrow to change to next month
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    renderToDos();
  });
}
