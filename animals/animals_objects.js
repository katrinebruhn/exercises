"use strict";

// Kører funktionen start, når HTML-siden er færdig med at loade
window.addEventListener("DOMContentLoaded", start);

// Opretter et tomt array, hvor alle de færdige animal-objekter gemmes
const allAnimals = [];

// Prototype for alle animal-objekterne
// Alle dyr får properties: name, desc, type og age
const Animal = {
  name: "",
  desc: "",
  type: "",
  age: 0,
};

// Funktionen kører, når siden er indlæst
function start() {
  // Skriver "ready" i konsollen, så vi kan se at JavaScript virker
  console.log("ready");

  // Finder knappen med data-filter="cat"
  // og lytter efter et klik på knappen
  document
    .querySelector('[data-filter="cat"]')
    .addEventListener("click", filterClicked);

  // Finder knappen med data-filter="dog"
  // og lytter efter et klik på knappen
  document
    .querySelector('[data-filter="dog"]')
    .addEventListener("click", filterClicked);

  // Finder knappen med data-filter="all"
  // og lytter efter et klik på knappen
  document
    .querySelector('[data-filter="all"]')
    .addEventListener("click", filterClicked);

  // Kalder funktionen, der henter vores JSON-data
  loadJSON();
}

// Kører når brugeren klikker på en af filter-knapperne
function filterClicked(event) {
  // Finder værdien fra data-filter på den knap, der blev klikket på
  // Det kan fx være "cat", "dog" eller "all"
  const filter = event.target.dataset.filter;

  // Sender det valgte filter videre til setFilter
  setFilter(filter);
}

// Filtrerer dyrene ud fra det filter brugeren har valgt
function setFilter(filter) {
  // Opretter en variabel, hvor den filtrerede liste skal gemmes
  let filteredList;

  // Hvis filteret er "all", skal alle dyr vises
  if (filter === "all") {
    filteredList = allAnimals;
  } else {
    // Gennemgår alle dyr og laver et nyt array
    // med de dyr, hvis type passer til det valgte filter
    // Fx beholder den kun cats, hvis filter er "cat"
    filteredList = allAnimals.filter((animal) => animal.type === filter);
  }

  // Sender den filtrerede liste videre, så den kan vises
  displayList(filteredList);
}

// Henter data fra JSON-filen
function loadJSON() {
  // Henter animals.json
  fetch("animals.json")
    // Laver svaret om til JavaScript-data
    .then((response) => response.json())

    // Når data er hentet, sendes det videre til prepareObjects
    .then((jsonData) => {
      prepareObjects(jsonData);
    });
}

// Forbereder objekterne fra JSON-filen
function prepareObjects(jsonData) {
  // Gennemgår hvert dyr fra JSON-filen ét ad gangen
  jsonData.forEach((jsonObject) => {
    // Opretter et nyt objekt, som bruger Animal som prototype
    const animal = Object.create(Animal);

    // Deler fullname op ved hvert mellemrum
    // Fx "Mandu the amazing cat"
    // bliver til ["Mandu", "the", "amazing", "cat"]
    const words = jsonObject.fullname.split(" ");

    // Henter dyrets navn
    // words[0] er det første element, fx "Mandu"
    const name = words[0];

    // Henter beskrivelsen
    // words[2] er det tredje element, fx "amazing"
    const desc = words[2];

    // Henter dyretypen
    // words[3] er det fjerde element, fx "cat"
    const type = words[3];

    // Gemmer navnet på det nye animal-objekt
    animal.name = name;

    // Gemmer beskrivelsen på det nye animal-objekt
    animal.desc = desc;

    // Gemmer typen på det nye animal-objekt
    animal.type = type;

    // Henter alderen direkte fra JSON-objektet
    animal.age = jsonObject.age;

    // Tilføjer det færdige animal-objekt til allAnimals-arrayet
    allAnimals.push(animal);
  });

  // Viser alle dyr første gang siden bliver indlæst
  displayList(allAnimals);
}

// Viser den liste af dyr, som funktionen modtager
function displayList(list) {
  // Tømmer tabellen, så den gamle liste fjernes
  document.querySelector("#list tbody").innerHTML = "";

  // Gennemgår hvert dyr i listen
  // og kalder displayAnimal for hvert dyr
  list.forEach(displayAnimal);
}

// Viser ét dyr i tabellen
function displayAnimal(animal) {
  // Laver en kopi af animal-template fra HTML
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // Indsætter dyrets navn i tabellen
  clone.querySelector("[data-field=name]").textContent = animal.name;

  // Indsætter dyrets beskrivelse i tabellen
  clone.querySelector("[data-field=desc]").textContent = animal.desc;

  // Indsætter dyrets type i tabellen
  clone.querySelector("[data-field=type]").textContent = animal.type;

  // Indsætter dyrets alder i tabellen
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // Tilføjer den færdige række til tabellen på hjemmesiden
  document.querySelector("#list tbody").appendChild(clone);
}
