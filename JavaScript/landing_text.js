const textField = document.getElementById("random-landing-text");
const timeField = document.getElementById("landing-time");

// list of greetings
const listOfGreetings = [
  "Hey User, another day another dollar am I right.",
  "Hey User, how's your day going?",
  "Well howdy partner, busy busy week!",
  "Hello User, how are you feeling today?",
];

const greetingsPhrase = pickRandomPhrase();

/**
 * picks a random pharese from listOFGreetings
 */
function pickRandomPhrase() {
  const random = Math.floor(Math.random() * listOfGreetings.length);
  const randomGreetingPhrase = listOfGreetings[random];

  return randomGreetingPhrase;
}

/**
 * prints the time of the day and the greeting pharase to DOM
 */
function printPhraseAndTimeToDom() {
  pickRandomPhrase();

  textField.innerHTML = greetingsPhrase;

  function updateTime() {
    timeField.innerHTML =
      date.toDateString() + " " + date.toLocaleTimeString("sv-SE");
  }
  setInterval(updateTime(), 100);

  /**
   * Changes the background of sidebar depending on if its day or night
   */

  function changeDayNight() {
    const timeForCycle = date.getHours();
    const card = document.getElementById("side");

    console.log(timeForCycle);

    if (timeForCycle > 19 && timeForCycle < 5) {
      card.classList.add("night");
      //night
    } else if (timeForCycle > 5 && timeForCycle < 9) {
      card.classList.add("morning");
      // morning
    } else {
      //day
      card.classList.add("day");
    }
  }
  setInterval(changeDayNight(), 1000000);
}
