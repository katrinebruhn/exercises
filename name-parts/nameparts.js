"use strict";

// Gemmer hele navnet i en konstant
const fullName = "Katrine Boelt Bruhn";

// Finder placeringen af det første mellemrum i navnet
const firstSpace = fullName.indexOf(" ");

// Finder fornavnet fra starten af navnet til det første mellemrum
const firstName = fullName.substring(0, firstSpace);

// Finder placeringen af det andet mellemrum
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

// Finder mellemnavnet mellem det første og andet mellemrum
const middleName = fullName.substring(firstSpace + 1, secondSpace);

// Finder efternavnet fra det andet mellemrum til slutningen
const lastName = fullName.substring(secondSpace + 1);

// Udskriver de tre dele af navnet i konsollen
console.log(firstName);
console.log(middleName);
console.log(lastName);
