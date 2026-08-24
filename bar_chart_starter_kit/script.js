// Finder <ul>-elementet i HTML og gemmer det i variablen "list"
const list = document.querySelector("ul");

// Opretter et tomt array, som skal gemme de tilfældige tal
const valueArr = [];

// Kører funktionen generateColumns hvert 1000 millisekund = hvert sekund
setInterval(generateColumns, 1000);

function generateColumns() {
  // Laver et tilfældigt helt tal mellem 0 og 100
  const randomNum = Math.floor(Math.random() * 101);

  // Tilføjer det tilfældige tal til slutningen af arrayet
  valueArr.push(randomNum);

  // Tjekker om arrayet indeholder mere end 20 tal
  if (valueArr.length > 20) {
    // console.log("Nu er arrayet længere end 20");

    // Fjerner det første/ældste tal fra arrayet
    // Så arrayet højst indeholder 20 tal
    valueArr.shift();
  }

  // Opretter et nyt <li>-element
  const li = document.createElement("li");

  // Sætter CSS-variablen --height til det tilfældige tal
  // CSS bruger denne værdi til at bestemme højden på søjlen
  li.style.setProperty("--height", randomNum);

  // Tilføjer det nye <li>-element til <ul> på hjemmesiden
  list.appendChild(li);

  // Skriver arrayet med de tilfældige tal i konsollen
  console.log("GENERATE COLUMNS", valueArr);
}
