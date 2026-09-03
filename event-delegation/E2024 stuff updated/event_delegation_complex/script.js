// min event delegation hvor man kan diskutere om det er en god ide at køre med en function
document.querySelector("#main-content").addEventListener("change", delegateEVT);
document.querySelector("#main-content").addEventListener("click", delegateEVT);

function delegateEVT(evt) {
  console.log(evt);
  const target = evt.target;
  //   const type = evt.type;
  //   console.log(type);

  if (target.classList.contains("btn")) {
    console.log("BUTTON");
    if (target.classList.contains("action-btn")) {
      console.log(target.dataset.group);
      console.log(target.dataset.id);
    }
    if (target.classList.contains("panel-btn")) {
      console.log(target.dataset.action);
      console.log(target.dataset.task);
    }
  } else if (target.classList.contains("form-control")) {
    console.log("Form Control");
    if (target.type === "checkbox") {
      console.log(target.checked);
    } else {
      console.log(target.value);
    }
  }
}

//   const currentTarget = evt.currentTarget;

//   console.log("currentTarget", currentTarget);
// console.log("target       ", target);
//   if (target.classList.contains("action-btn") || target.classList.contains("panel-btn")) {
//     console.log("I'm an action btn or a panel button");
//   } else {
//     console.log("I'm something NOT clickable");
//   }
