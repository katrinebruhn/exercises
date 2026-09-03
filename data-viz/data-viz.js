// Finder elementet hvor antallet af personer i kø skal vises
const queueNumber = document.querySelector("#queue-number");

// Finder nålen i speedometeret
const needle = document.querySelector("#needle");

// Opretter en variabel der skal gemme det tidligere antal personer i kø
let previousNumber;

// Funktion der henter data fra API'et
function getQueueData() {
  // Henter data fra API'et
  fetch("https://kea-alt-del.dk/kata-distortion/")
    // Laver svaret om til JavaScript-data
    .then((response) => response.json())

    // Arbejder med de data vi har fået fra API'et
    .then((data) => {
      // Viser alle data fra API'et i konsollen
      console.log(data);

      // Henter værdien inQueue og gemmer den i newNumber
      const newNumber = data.inQueue;

      // Viser det nye antal personer i kø på siden
      queueNumber.textContent = newNumber;

      // Tjekker om vi har et tidligere tal,
      // og om det nye tal er anderledes end det tidligere
      if (previousNumber !== undefined && newNumber !== previousNumber) {
        // Tilføjer klassen grow, så tallet vokser
        queueNumber.classList.add("grow");

        // Venter 400 millisekunder
        setTimeout(() => {
          // Fjerner grow igen, så tallet får normal størrelse
          queueNumber.classList.remove("grow");
        }, 400);
      }

      // Bestemmer at speedometerets maksimale værdi er 50 personer
      const maxQueue = 50;

      // Bruger det nye tal, men sørger for at værdien højst kan være 50
      const queueValue = Math.min(newNumber, maxQueue);

      // Regner antallet af personer om til grader
      // 0 personer giver -90 grader
      // 25 personer giver 0 grader
      // 50 personer giver 90 grader
      const rotation = -90 + (queueValue / maxQueue) * 180;

      // Drejer nålen til den beregnede position
      needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

      // Gemmer det nuværende tal,
      // så vi kan sammenligne med det næste tal der bliver hentet
      previousNumber = newNumber;
    });
}

// Kører funktionen med det samme når siden åbnes
getQueueData();

// Kører funktionen igen hvert 10. sekund
setInterval(getQueueData, 10000);
