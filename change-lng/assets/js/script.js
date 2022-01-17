const data = {
  english: {
    title: "This is english title!",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            veritatis, dicta nesciunt repellat eius labore ea accusantium? Quisquam reiciendis earum voluptatibus,
            provident ex error debitis dolorem pariatur explicabo quae deserunt
            aut non sequi facere! Velit sunt incidunt accusantium saepe hic
            debitis totam, laudantium ab culpa optio dolores nam quo fugiat
            neque nostrum enim officia quam labore obcaecati?`,
  },
  russian: {
    title: "Ваш шедевр готов!",
    desc: ` Равным образом новая модель организационной деятельности требуют определения и уточнения систем массового участия. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности позволяет оценить значение дальнейших направлений развития. Разнообразный и богатый опыт рамки и место обучения кадров представляет собой интересный эксперимент проверки систем массового участия.`,
  },
  japanese: {
    title: "ハロー・ワールド!",
    desc: `ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。.`,
  },
};

const langWrap = document.querySelector(".lang-wrap");
const langLink = document.querySelectorAll(".lang-link");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");

langLink.forEach((el) => {
  el.addEventListener("click", function () {
    langWrap.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const language = el.getAttribute("language");
    title.innerHTML = data[language].title;
    desc.innerHTML = data[language].desc;
  });
});
