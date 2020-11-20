window.addEventListener("load", getHolidays());

function getHolidays() {
  fetchDays();
}

let dates = [];

/**
 * Fetch days from api
 */
async function fetchDays() {
  try {
    const url = "http://sholiday.faboul.se/dagar/v2.1/2020";
    const result = await fetch(url);
    const data = await result.json();

    dates.push(...data.dagar);

    const holidays = dates.filter((date) => date.helgdag);
    console.log(holidays);
  } catch (error) {
    console.error(error);
  }
}

function getHolidaysDate() {}
