const toggleBtn = document.querySelector(".btn");
const root = document.querySelector(":root");
console.log("root :>> ", root);

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  //   const rootStyles = getComputedStyle(root);
  //   const current = rootStyles.getPropertyValue("--clr-bcg");
  //   const colorValue = current === "#fff" ? "#282c35" : "#fff";
  //   root.style.setProperty("--clr-bcg", colorValue);
});
