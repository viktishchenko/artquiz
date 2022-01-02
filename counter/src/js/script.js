const btnWrapper = [...document.querySelector(".btn-wrapper").children];

const output = document.querySelector(".output");

btnWrapper.forEach((el) => {
  el.addEventListener("click", counterHandler);
});

let count = 0;
function counterHandler(e) {
  const styles = e.target.classList;
  if (styles.contains("increase")) {
    count++;
  } else if (styles.contains("decrease")) {
    count--;
  } else {
    count = 0;
  }

  if (count > 0) {
    output.style.color = "green";
  } else if (count < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "#e2e2e2";
  }

  output.textContent = count;
}
