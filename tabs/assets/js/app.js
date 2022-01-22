const dataImg = {
  history: "https://via.placeholder.com/450x300?text=photo+1",
  vision: "https://via.placeholder.com/450x300?text=photo+2",
  goals: "https://via.placeholder.com/450x300?text=photo+3",
};

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const aboutImg = document.querySelector(".about-img");
console.log("aboutImg :>> ", aboutImg);

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log("id :>> ", id);
  if (id) {
    btns.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    articles.forEach((el) => {
      el.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    aboutImg.childNodes[1].src = dataImg[id];
    console.log("dataImg.id :>> ", dataImg[id]);
  }
});
