"use strict";

function beregnMoms(beloeb, moms = 25) {
  const momsBeloeb = (beloeb * moms) / 100;
  const beloebMedMoms = beloeb + momsBeloeb;

  return {
    momsBeloeb,
    beloebMedMoms,
  };
}

const beregnKnap = document.querySelector("#beregn");

beregnKnap.addEventListener("click", function () {
  // Henter beløbet fra hjemmesiden
  const beloeb = Number(document.querySelector("#beloeb").value);

  // Henter momsprocenten fra hjemmesiden
  const moms = Number(document.querySelector("#moms").value);

  // Beregner moms
  const resultat = beregnMoms(beloeb, moms);

  // Viser resultatet på hjemmesiden
  document.querySelector("#resultat").textContent =
    "Moms: " +
    resultat.momsBeloeb +
    " kr. | Beløb med moms: " +
    resultat.beloebMedMoms +
    " kr.";
});
