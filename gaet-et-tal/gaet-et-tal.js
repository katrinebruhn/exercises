"use strict";

import { generateRandomNumBetween0AndMax } from "../utils_lib/utils_lib.js";
import { $ } from "../utils_lib/utils_lib.js";
// const compGuess = generateRandomNumBetween0And100(100);

// Opretter en funktion, der laver et tilfældigt tal mellem 1 og 100
// function lavEtTalMellem1og100() {
//   // Math.random() laver et tilfældigt tal, * 100 gør det til 0-100,
//   // og Math.ceil() runder tallet op til et helt tal mellem 1 og 100
//   return Math.ceil(Math.random() * 100);
// }

// Kalder funktionen og gemmer tallet som det hemmelige tal
let hemmeligtTal = generateRandomNumBetween0AndMax(100);

// Starter antal forsøg på 0
let antalForsøg = 0;

// Skriver det tilfældige tal i konsollen
console.log(hemmeligtTal);

// Finder knappen med class="guessButton" og gemmer den i en variabel
const guessButton = document.querySelector(".guessButton");

// Lytter efter om brugeren klikker på Gæt-knappen
guessButton.addEventListener("click", function () {
  // Finder det tal brugeren har skrevet i inputfeltet
  // Number gør værdien om til et tal
  let brugerensGæt = Number(document.querySelector(".guess").value);

  // Lægger 1 til antal forsøg
  antalForsøg++;

  // Viser det nye antal forsøg på hjemmesiden
  document.querySelector(".attempts").textContent = antalForsøg;

  // Skriver brugerens gæt i konsollen, så vi kan teste om det virker
  console.log(brugerensGæt);

  // Tjekker om brugerens gæt er mindre end det hemmelige tal
  if (brugerensGæt < hemmeligtTal) {
    // Skriver beskeden på hjemmesiden, hvis gættet er for lavt
    document.querySelector(".result").textContent = "For lavt! Gæt højere.";
  }

  // Tjekker om brugerens gæt er større end det hemmelige tal
  else if (brugerensGæt > hemmeligtTal) {
    // Hvis gættet er for højt
    document.querySelector(".result").textContent = "For højt! Gæt lavere.";
  }

  // Hvis tallet hverken er for lavt eller for højt, er det rigtigt
  else {
    // Viser at brugeren har gættet rigtigt og hvor mange forsøg det tog
    document.querySelector(".result").textContent =
      "Du gættede rigtigt på " + antalForsøg + " forsøg! 🎉";
  }
});

// Lytter efter om brugeren trykker på en tast
document.querySelector(".guess").addEventListener("keydown", function (event) {
  // Tjekker om den tast brugeren trykker på er Enter
  if (event.key === "Enter") {
    // Klikker automatisk på Gæt-knappen
    guessButton.click();
  }
});
