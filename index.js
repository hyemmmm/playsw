const header = document.querySelector("header");
const fixed = document.querySelector(".fixed");
const leftBtn = document.querySelector("#buttonLeft");
const rightBtn = document.querySelector("#buttonRight");
const eduList = document.querySelector(".eduList");

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll >= 80) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll >= 1200 && scroll < 3400) {
    fixed.classList.add("visible");
  } else {
    fixed.classList.remove("visible");
  }
});

let currentIdx = 1;

function moveSlide(num) {
  eduList.style.transform = `translate(${num * -416}px)`;
  currentIdx = num;
}

rightBtn.onclick = function () {
  if (currentIdx < 4) {
    moveSlide(currentIdx);
    currentIdx++;
    console.log(currentIdx);
  }
};

leftBtn.onclick = function () {
  if (currentIdx > 1) {
    moveSlide(currentIdx - 2);
    currentIdx++;
    console.log(currentIdx);
  }
};
