
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
