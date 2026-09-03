// Finder knappen i HTML
const button = document.querySelector("#netflix-button");

// Gemmer om handlingen allerede er sket
let actionDone = false;

// Funktion der stopper animationen
function stopAnimation() {
  // Tilføjer klassen paused til knappen
  button.classList.add("paused");
}

// Lytter efter om brugeren bevæger musen
window.addEventListener("mousemove", stopAnimation);

// Funktion der udfører handlingen
function doAction() {
  // Tjekker om handlingen allerede er udført
  if (actionDone === false) {
    // Ændrer sidens baggrundsfarve
    document.body.style.backgroundColor = "#5b1a63";

    // Gemmer at handlingen er udført
    actionDone = true;
  }
}

// Når animationen er færdig
button.addEventListener("animationend", function () {
  // Udfører handlingen automatisk
  doAction();
});

// Hvis brugeren klikker på knappen
button.addEventListener("click", function () {
  // Udfører handlingen
  doAction();
});
