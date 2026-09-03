document.querySelector("#main-content").addEventListener("click", klik);

function klik(evt) {
  // const currentTarget = evt.currentTarget;
  const target = evt.target;

  //   console.log("currentTarget", currentTarget);
  //   console.log("target       ", target);
  if (target.classList.contains("action-btn") || target.classList.contains("panel-btn")) {
    console.log("I'm an action btn or a panel button");
  } else {
    console.log("I'm something NOT clickable");
  }
}
