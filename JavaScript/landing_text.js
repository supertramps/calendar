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

  setInterval(function updateTime() {
    
    timeField.innerHTML = date.toDateString() + " " + date.toLocaleTimeString('sv-SE');
  }, 100);

/**
 * Changes the background of sidebar depending on if its day or night
 */
setInterval
(function changeDayNight() {
  
    const timeForCycle = date.getHours();
  
    console.log(timeForCycle);
  
    //night 
    if (timeForCycle.to > 19 && timeForCycle < 5) {
      document.getElementById('side').style.backgroundImage="url(./imgs/Task-bar.png)"
      // morning 
    } else if (timeForCycle > 5 && timeForCycle < 9) {
      document.getElementById('side').style.background="url(./imgs/Task-bar.png)linear-gradient(180deg, #47CFFA 23.96%, rgba(95, 248, 238, 0.84) 47.49%, rgba(225, 255, 162, 0.66) 92.01%);"      
      
      //day
    } else {
      document.getElementById('side').style.background="url(./imgs/Task-bar.png)linear-gradient(180deg, #FED97C 23.96%, rgba(255, 188, 109, 0.84) 59.9%, rgba(255, 136, 109, 0.33) 100%);"      

    }
    
  
  
  }, 1000 );
}

