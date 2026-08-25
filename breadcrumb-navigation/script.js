// Array med navn og link til hvert punkt i brødkrummestien
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Finder knappen og kører funktionen, når der klikkes på den
document
  .querySelector("button")
  .addEventListener("click", addBreadcrumbsToPage);

// Tilføjer den genererede brødkrummesti til ul
function addBreadcrumbsToPage() {
  console.log("Tilføj krummer");
  document.querySelector("ul").innerHTML = generateBreadcrumbPath();
}

// Laver selve brødkrummestien
function generateBreadcrumbPath() {
  let breadcrumbHTML = "";

  // Går igennem alle elementerne i bc-arrayet
  bc.forEach(function (item, index) {
    // Hvis det er det sidste element, bliver det lavet uden link
    if (index === bc.length - 1) {
      breadcrumbHTML += `<li>${item.name}</li>`;
    } else {
      // Ellers bliver elementet lavet som et link
      breadcrumbHTML += `<li><a href="${item.link}">${item.name}</a></li>`;
    }
  });

  // Sender den færdige HTML tilbage
  return breadcrumbHTML;
}
