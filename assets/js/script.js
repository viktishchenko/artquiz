const year = document.getElementById("year");
const button = document.querySelectorAll("button");
const output = document.querySelector(".output");
const rgba = document.getElementById("rgba");
const hex = document.getElementById("hex");
const change = document.getElementById("change");
const colorArea = document.querySelector(".color-area");
let isRgba = false;

year.textContent = `© ${new Date().getFullYear()}`;

let res = [...document.querySelector(".btn-container__header").children];

res.forEach((el) => {
  el.addEventListener("click", clickHandler);
});

function clickHandler(e) {
  if (e.target.id === "rgba") {
    output.textContent = "rgba(222, 4, 14, 0.73)";
    colorArea.style.backgroundColor = "rgba(222, 4, 14, 0.73)";
    hex.style.backgroundColor = "transparent";
    rgba.style.backgroundColor = "#4d4d4d";
    isRgba = true;
  } else {
    output.textContent = "#24BA66";
    colorArea.style.backgroundColor = "#24BA66";
    rgba.style.backgroundColor = "transparent";
    hex.style.backgroundColor = "#4d4d4d";
    isRgba = false;
  }
}

/* check Color Handler */
function checkColorHandler() {
  if (isRgba) {
    setBackgrounColor(getRgbaColor);
  } else {
    setBackgrounColor(getHexColor);
  }
}

change.addEventListener("click", checkColorHandler);

/* get Hex Color */
function getHexColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const hexRange = 6;
  let hexColor = "#";
  for (let i = 1; i <= hexRange; i++) {
    hexColor += hex[Math.floor(getRandomNumber() * hex.length)];
  }
  return hexColor;
}

/* set Background Color */
function setBackgrounColor(fn) {
  const res = fn();
  output.textContent = res;
  colorArea.style.backgroundColor = res;
}

/* get Random */
function getRandomNumber() {
  return Math.random();
}

/* get RGBA */
function getRgbaColor() {
  const rgbaRange = 256;
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    arr.push(Math.floor(getRandomNumber() * rgbaRange));
  }
  arr.push(+(Math.floor(getRandomNumber() * 1000) / 1000).toFixed(2));
  return `rgba(${arr.join(",")})`;
}

/* ripple Btn */
button.forEach((el) => {
  el.addEventListener("click", rippleEffect);
});

function rippleEffect(e) {
  const btn = e.currentTarget;
  const circle = document.createElement("span");
  const rippleSize = btn.clientWidth;
  const rippleRadius = btn.clientWidth / 2;

  circle.style.width = circle.style.height = `${rippleSize}px`;
  circle.style.left = `${e.clientX - btn.offsetLeft - rippleRadius}px`;
  circle.style.top = `${e.clientY - btn.offsetTop - rippleRadius}px`;
  circle.classList.add("ripple");

  const ripple = btn.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  btn.appendChild(circle);
}
