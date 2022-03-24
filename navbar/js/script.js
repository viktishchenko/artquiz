const hamburger = document.querySelector(".hamburger");
const headerNavigation = document.querySelector(".header__navigation");
const headerButtons = document.querySelector(".header__buttons");
const navigation = document.querySelector(".navigation");

function showMobileMenu() {
  hamburger.classList.toggle("rt-btn");
  headerButtons.classList.toggle("show-btn");
  const wrapHeight = headerNavigation.getBoundingClientRect().height;
  const navHeight = navigation.getBoundingClientRect().height;
  if (wrapHeight === 0) {
    headerNavigation.style.height = `${navHeight}px`;
  } else {
    headerNavigation.style.height = 0;
  }
}

hamburger.addEventListener("click", showMobileMenu);

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  if (window.innerWidth >= 768) {
    headerNavigation.removeAttribute("style");
    hamburger.classList.remove("rt-btn");
    headerButtons.classList.remove("show-btn");
  }
}

window.onresize = reportWindowSize;
