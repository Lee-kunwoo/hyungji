let headerCover = document.querySelector(".headerCover");
let header = document.querySelector("header");
let menuList = document.querySelectorAll(".menuList");
let xiArrowDown = document.querySelector(".icon > li:nth-child(1)");
let xiArrowDownIcon = document.querySelector(".xi-arrow-down");
let lang = document.querySelector(".lang");
let xiBars = document.querySelector(".xi-bars");
let menuModal = document.querySelector(".menuModal");
let xiClose = document.querySelector(".xi-close");

header.addEventListener("mouseenter", function () {
  headerCover.classList.add("on");
  menuList.forEach(function (item) {
    item.classList.add("on");
  });
});

headerCover.addEventListener("mouseleave", function () {
  headerCover.classList.remove("on");
  menuList.forEach(function (item) {
    item.classList.remove("on");
  });
});

xiArrowDown.addEventListener("click", function () {
  xiArrowDownIcon.classList.toggle("on");
  lang.classList.toggle("on");
});

xiBars.addEventListener("click", function () {
  menuModal.classList.add("on");
});

xiClose.addEventListener("click", function () {
  menuModal.classList.remove("on");
});
