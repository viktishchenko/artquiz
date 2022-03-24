"use strict";
const btnWrapper = Array.from(document.querySelectorAll(".btn"));
const output = document.querySelector(".output");
let count = 0;
function counterHandler(e) {
    const styles = e.target.classList;
    if (styles.contains("increase")) {
        count += 1;
    }
    else if (styles.contains("decrease")) {
        count -= 1;
    }
    else {
        count = 0;
    }
    if (count > 0) {
        output.style.color = "green";
    }
    else if (count < 0) {
        output.style.color = "red";
    }
    else {
        output.style.color = "#e2e2e2";
    }
    output.textContent = `${count}`;
}
btnWrapper.forEach((el) => {
    el.addEventListener("click", counterHandler);
});
//# sourceMappingURL=script.js.map