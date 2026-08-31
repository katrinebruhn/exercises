const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
const moreThanTwoPassengers = vehicles.filter(
  (vehicle) => vehicle.passengers > 2,
);
const electricVehiclesOwnedByJonas = vehicles.filter(
  (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas",
);

const rugbroedVehiclesMoreThanOne = vehicles.filter(
  (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1,
);

// Finder filter-knapperne
const showAllButton = document.querySelector("#showAll");
const electricButton = document.querySelector("#electric");
const moreThanTwoButton = document.querySelector("#moreThanTwo");
const electricJonasButton = document.querySelector("#electricJonas");
const rugbroedButton = document.querySelector("#rugbroed");

// Når der klikkes på en knap, vises det rigtige filter
showAllButton.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

electricButton.addEventListener("click", () => {
  showTheseVehicles(electricVehicles);
});

moreThanTwoButton.addEventListener("click", () => {
  showTheseVehicles(moreThanTwoPassengers);
});

electricJonasButton.addEventListener("click", () => {
  showTheseVehicles(electricVehiclesOwnedByJonas);
});

rugbroedButton.addEventListener("click", () => {
  showTheseVehicles(rugbroedVehiclesMoreThanOne);
});

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  // Tømmer tabellen før et nyt filter vises
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type}</td>
      <td>${each.fuel ? each.fuel : ""}</td>
      <td>${each.passengers}</td> 
      <td>${each.stops ? each.stops : ""}</td>
      <td>${each.ownedBy ? each.ownedBy : ""}</td>
      <td>${each.isElectric ? "Ja" : ""}</td>
      <td>${each.isTandem ? "Ja" : ""}</td>
    </tr>`;
  });
}
