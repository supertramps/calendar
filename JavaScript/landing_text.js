const textField = document.getElementById("random-landing-text");
const timeField = document.getElementById("landing-time");

const listOfGreetings = [
  "Hey User, another day another dollar am I right.",
  "Hey User, how's your day going?",
  "Well howdy partner, busy busy week!",
  "Hello User, how are you feeling today?",
];

const greetingsPhrase = pickRandomPhrase();

function pickRandomPhrase() {
  const random = Math.floor(Math.random() * listOfGreetings.length);
  const randomGreetingPhrase = listOfGreetings[random];

  return randomGreetingPhrase;
}

function printPhraseAndTimeToDom() {
  pickRandomPhrase();
  textField.innerHTML = greetingsPhrase;

  setInterval(function updateTime() {
    const date = new Date();
    
    timeField.innerHTML = date.toDateString() + " " + date.toLocaleTimeString('sv-SE');
  }, 100);
}
