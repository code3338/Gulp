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


let heading2 = document.getElementById("heading2");
let btn2 = document.getElementById("btn2");

heading2.style.color="blue";

btn2.addEventListener("click", function() {
  if(heading2.style.color=="blue") {
    heading2.style.color="green";
  }
  else if(heading2.style.color=="green") {
    heading2.style.color="blue";
  }
})
