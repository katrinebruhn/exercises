"use strict";

// Det laveste og højeste tal computeren kan gætte
let min = 0;
let max = 100;

// Holder styr på hvor mange gæt computeren har brugt
let antalGaet = 0;

// Her gemmes computerens nuværende gæt
let computerGaet;

// Finder knapperne fra HTML og gemmer dem i variabler
const startBtn = document.querySelector("#start");
const forLavtBtn = document.querySelector("#forLavt");
const forHoejtBtn = document.querySelector("#forHoejt");
const rigtigtBtn = document.querySelector("#rigtigt");

// Finder de steder i HTML hvor gæt og resultat skal vises
const gaetTekst = document.querySelector("#gaet");
const resultatTekst = document.querySelector("#resultat");

// Når der klikkes på Start, kaldes funktionen startSpil
startBtn.addEventListener("click", startSpil);

function startSpil() {
  // Nulstiller spillet til området 0-100
  min = 0;
  max = 100;
  // Nulstiller antal gæt
  antalGaet = 0;

  // Fjerner resultatet fra tidligere spil
  resultatTekst.textContent = "";

  // Computeren finder tallet i midten mellem min og max
  // Første gæt bliver derfor 50
  computerGaet = Math.floor((min + max) / 2);
  // Lægger 1 til antal gæt
  antalGaet++;

  // Viser computerens gæt på hjemmesiden
  gaetTekst.textContent = "Er dit tal " + computerGaet + "?";

  // Start-knappen deaktiveres mens spillet kører
  startBtn.disabled = true;

  // Knapperne til spillet aktiveres
  forLavtBtn.disabled = false;
  forHoejtBtn.disabled = false;
  rigtigtBtn.disabled = false;
}

// Når brugeren klikker på "For lavt"
forLavtBtn.addEventListener("click", forLavt);

function forLavt() {
  // Hvis gættet er for lavt, ved computeren at tallet
  // skal være mindst 1 højere end det nuværende gæt
  min = computerGaet + 1;

  // Computeren gætter på midten af det nye område
  computerGaet = Math.floor((min + max) / 2);

  // Viser det nye gæt
  gaetTekst.textContent = "Er dit tal " + computerGaet + "?";

  // Lægger 1 til antal gæt
  antalGaet++;
}

// Når brugeren klikker på "For højt"
forHoejtBtn.addEventListener("click", forHoejt);

function forHoejt() {
  // Hvis gættet er for højt, ved computeren at tallet
  // skal være mindst 1 lavere end det nuværende gæt
  max = computerGaet - 1;

  // Computeren gætter på midten af det nye område
  computerGaet = Math.floor((min + max) / 2);

  // Viser det nye gæt
  gaetTekst.textContent = "Er dit tal " + computerGaet + "?";

  // Lægger 1 til antal gæt
  antalGaet++;
}

// Når brugeren klikker på "Rigtigt"
rigtigtBtn.addEventListener("click", rigtigt);

function rigtigt() {
  // Viser hvilket tal computeren fandt og hvor mange gæt den brugte
  resultatTekst.textContent =
    "Yes! Dit tal er " + computerGaet + " \nJeg brugte " + antalGaet + " gæt";

  // Fortæller at spillet er færdigt
  gaetTekst.textContent = "Jeg gættede dit tal!";

  // Deaktiverer spil-knapperne
  forLavtBtn.disabled = true;
  forHoejtBtn.disabled = true;
  rigtigtBtn.disabled = true;

  // Aktiverer Start igen, så man kan starte et nyt spil
  startBtn.disabled = false;

  // Starter konfetti-effekten
  lavKonfetti();
}

// Disse knapper er deaktiveret når siden åbnes
// Man skal først trykke på Start
forLavtBtn.disabled = true;
forHoejtBtn.disabled = true;
rigtigtBtn.disabled = true;

// Funktion der laver konfetti når computeren gætter rigtigt
function lavKonfetti() {
  // De forskellige farver konfettien kan få
  const farver = [
    "#ff4d6d",
    "#ffd60a",
    "#4cc9f0",
    "#7209b7",
    "#06d6a0",
    "#ff8500",
    "#f72585",
  ];

  // Løkken kører 1000 gange og laver 1000 stykker konfetti
  for (let i = 0; i < 1000; i++) {
    // Opretter et nyt div-element
    const konfetti = document.createElement("div");

    // Giver elementet CSS-klassen "konfetti"
    konfetti.classList.add("konfetti");

    // Tilfældig placering vandret
    konfetti.style.left = Math.random() * 100 + "vw";
    // Starter tilfældigt over skærmen
    konfetti.style.top = -(Math.random() * 80 + 10) + "vh";

    // Vælger en tilfældig farve fra farver-arrayet
    konfetti.style.backgroundColor =
      farver[Math.floor(Math.random() * farver.length)];

    // Giver konfettien en tilfældig størrelse
    const stoerrelse = Math.random() * 8 + 5;

    konfetti.style.width = stoerrelse + "px";
    konfetti.style.height = stoerrelse + "px";

    // Giver hvert stykke konfetti forskellig faldhastighed
    konfetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    // Gør at konfettien ikke starter på præcis samme tidspunkt
    konfetti.style.animationDelay = Math.random() * 0.5 + "s";

    // Tilføjer konfettien til hjemmesiden
    document.body.appendChild(konfetti);

    // Fjerner konfettien igen efter 5 sekunder
    setTimeout(() => {
      konfetti.remove();
    }, 5000);
  }
}
