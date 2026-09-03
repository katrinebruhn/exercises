// Finder overskriften
const heading = document.querySelector("h1");

// Lytter efter hver gang musen bevæger sig på siden
window.addEventListener("mousemove", function (event) {
  // Finder musens vandrette position
  const mouseX = event.clientX;

  // Finder bredden på browservinduet
  const windowWidth = window.innerWidth;

  // Regner musens position om til procent
  const lightness = (mouseX / windowWidth) * 100;

  // Ændrer CSS-variablen --lightness
  document.documentElement.style.setProperty("--lightness", lightness + "%");

  // Hvis baggrunden er mørkere end 80%
  if (lightness < 80) {
    // Gør teksten hvid
    heading.style.color = "white";
  } else {
    // Ellers gør teksten sort
    heading.style.color = "black";
  }
});
