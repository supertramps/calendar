//EventListener for running main function on page load
window.addEventListener("load", main());

function main() {
  renderCalendar();
  addEventListeners();
  printPhraseAndTimeToDom();
  openAddEventWindow();
  toDoListClock();
}
