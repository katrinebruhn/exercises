// The closest() method of the Element interface traverses the
// element and its parents (heading toward the document root)
// until it finds a node that matches the specified CSS selector.

document.querySelector(".level0").addEventListener("click", klik);

//
function klik(evt) {
  console.log("target         ", evt.target);
  // skift ".level1" rd med et andet element og se hvad der sker når du klikker
  const closest = evt.target.closest(".level2");
  console.log("target  closest", closest);

  // console.log("currentTarget ", evt.currentTarget);
  document.querySelector(".level0").classList.remove("hi_lite");
  document.querySelector(".level1").classList.remove("hi_lite");
  document.querySelector(".level2").classList.remove("hi_lite");
  document.querySelector("button").classList.remove("hi_lite");
  if (closest) {
    closest.classList.add("hi_lite");
  }
}
