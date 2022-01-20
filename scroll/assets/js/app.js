const burger = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const scrollLink = document.querySelectorAll(".scroll-link");
const topLink = document.querySelector(".top-link");

burger.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

scrollLink.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const ancor = el.getAttribute("href").slice(1);
    const elem = document.getElementById(ancor);
    let position = elem.offsetTop;
    window.scrollTo(0, position);
    linksContainer.style.height = 0;
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 300) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
