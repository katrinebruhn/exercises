"use strict";

// Laver en funktion der hedder beregnMoms.
// Funktionen modtager et beløb og en momsprocent.
// Hvis der ikke gives en momsprocent, bruges 25 som standard.
function beregnMoms(beloeb, moms = 25) {
  // Beregner beløbet med moms.
  // Først beregnes momsen, og derefter lægges den til det oprindelige beløb.
  const beloebMedMoms = beloeb + (beloeb * moms) / 100;

  // Skriver det færdige beløb med moms i konsollen.
  console.log(beloebMedMoms);
}

// Kalder funktionen med beløbet 100.
// Da vi ikke angiver moms, bruges standardværdien på 25 %.
// Resultatet bliver derfor 125.
beregnMoms(100);
