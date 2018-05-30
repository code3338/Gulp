"use strict"

let btn = document.getElementById("btn");
let clickMePara = document.getElementById("clickMePara");

clickMePara.style.display = "none";
btn.addEventListener("click", function() {
  if (clickMePara.style.display == "none") {
    clickMePara.style.display="block"
  }
  else {
    clickMePara.style.display = "none";
  }
})
