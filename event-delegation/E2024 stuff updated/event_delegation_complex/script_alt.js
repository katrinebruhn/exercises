// chat GPTs event delegation splittet i to functioner, link til denne JS for at se den
document.querySelector("#main-content").addEventListener("click", function (event) {
  // Handle button clicks
  if (event.target.classList.contains("action-btn")) {
    const group = event.target.getAttribute("data-group");
    const buttonId = event.target.getAttribute("data-id");
    console.log(`Button from Group ${group} with ID ${buttonId} clicked.`);
    alert(`Button ${group}${buttonId} clicked!`);
  }

  // Handle action panel buttons
  if (event.target.classList.contains("panel-btn")) {
    const action = event.target.getAttribute("data-action");
    const task = event.target.getAttribute("data-task");
    console.log(`Panel ${action} - Task: ${task}`);
    alert(`Task "${task}" clicked on Panel ${action}`);
  }
});

document.getElementById("main-content").addEventListener("change", function (event) {
  // Handle text field inputs
  if (event.target.type === "text") {
    const inputId = event.target.getAttribute("data-id");
    const value = event.target.value;
    console.log(`Text input ${inputId} changed to: ${value}`);
    alert(`Text input ${inputId} value changed to: "${value}"`);
  }

  // Handle checkbox toggles
  if (event.target.type === "checkbox") {
    const checkboxId = event.target.getAttribute("data-id");
    const checked = event.target.checked;
    console.log(`Checkbox ${checkboxId} changed to: ${checked}`);
    alert(`Checkbox ${checkboxId} is now: ${checked ? "checked" : "unchecked"}`);
  }

  // Handle dropdown selection
  if (event.target.tagName === "SELECT") {
    const selectId = event.target.getAttribute("data-id");
    const selectedValue = event.target.value;
    console.log(`Dropdown ${selectId} changed to: ${selectedValue}`);
    alert(`Dropdown ${selectId} selected: "${selectedValue}"`);
  }
});
