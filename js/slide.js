let slide = document.querySelectorAll("#slide");
let city01 = document.querySelector(".city01");
let city02 = document.querySelector(".city02");
let count = 0;
let moveBtn = document.querySelector(".moveBtn");

setInterval(() => {
  if (count == 0) {
    city01.classList.add("on");
    city02.classList.remove("on");
    moveBtn.classList.remove("on");
    count++;
  } else if (count == 1) {
    city01.classList.remove("on");
    city02.classList.add("on");
    moveBtn.classList.add("on");
    count = 0;
  }
}, 3000);
