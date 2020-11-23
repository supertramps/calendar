const date = new Date();
date.setDate(1);
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const firstDayIndex = date.getDay();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

window.addEventListener("load", main());

function main() {
  getMonthsCurrent();
  renderDays();
}

function getMonthsCurrent() {
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
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
}

function renderDays() {
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
  }
}
