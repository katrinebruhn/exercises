// Finder select-elementet med id="theme-select"
// og gemmer det i variablen themeSelect
const themeSelect = document.querySelector("#theme-select");

// Lytter efter når brugeren ændrer valget i dropdown-menuen
themeSelect.addEventListener("change", function () {
  // Finder body-elementet og ændrer dets data-theme
  // til den value brugeren har valgt i dropdown-menuen
  //
  // Hvis brugeren fx vælger Dark,
  // bliver body ændret til: data-theme="dark"
  document.body.dataset.theme = themeSelect.value;
});
