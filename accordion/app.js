const questionBtn = document.querySelectorAll(".question-btn");

function eventHandler(el) {
  let parent = el.currentTarget.parentElement.parentElement;
  parent.classList.toggle("show-text");
  const question = document.querySelectorAll(".question");
  question.forEach((el) => {
    if (parent !== el) {
      el.classList.remove("show-text");
    }
  });
}

questionBtn.forEach((el) => {
  el.addEventListener("click", eventHandler);
});

/* 
============
other variant
============
*/
/* 
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
 */
