// Data
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://via.placeholder.com/450x300",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://via.placeholder.com/450x300",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://via.placeholder.com/450x300",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://via.placeholder.com/450x300",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://via.placeholder.com/450x300",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://via.placeholder.com/450x300",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://via.placeholder.com/450x300",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://via.placeholder.com/450x300",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://via.placeholder.com/450x300",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://via.placeholder.com/450x300",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category: "shmule",
    price: 50.99,
    img: "https://via.placeholder.com/450x300",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

/* const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

function getLoopData(menuItem) {
  let displayMenuItem = menuItem.map((el) => {
    return `<article class="menu-item">
              <img
                src="${el.img}"
                alt="${el.title}"
                class="photo"
              />
              <div class="item-info">
                <header>
                  <h4>${el.title} </h4>
                  <h4 class="price">${el.price} </h4>
                </header>
                <p class="item-text">
                  ${el.desc}
                  </p>
                 <h4> ${el.category}</h4>
              </div>
            </article>`;
  });
  displayMenuItem = displayMenuItem.join("");
  sectionCenter.innerHTML = displayMenuItem;
}

function getGategories() {
  const categories = menu.reduce(
    (acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    },
    ["all"]
  );
  const categoryItem = categories
    .map((el) => {
      return `<button type="button" class="filter-btn" data-id="${el}">
               ${el}
            </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryItem;
  const filterBtn = btnContainer.querySelectorAll(".filter-btn");
  filterBtn.forEach((el) => {
    el.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((el) => {
        if (el.category === category) {
          return el;
        }
      });
      if (category === "all") {
        getLoopData(menu);
      } else {
        getLoopData(menuCategory);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  getLoopData(menu);
  getGategories();
}); */

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

function displayMenuItems(menuItem) {
  let itemsContent = menuItem.map((el) => {
    return `<article class="menu-item">
            <img
              src="${el.img}"
              alt="${el.title}"
              class="photo"
            />
            <div class="item-info">
              <header>
                <h4>${el.title}</h4>
                <h4 class="price">${el.price}</h4>
              </header>
              <p class="item-text">
                ${el.desc}
              </p>
              <h4>${el.category}</h4>
            </div>
          </article>`;
  });
  itemsContent = itemsContent.join("");
  sectionCenter.innerHTML = itemsContent;
}

function displayMenuBtns() {
  const filterBtns = ["all", ...new Set(menu.map((el) => el.category))];
  const allBtns = filterBtns
    .map((el) => {
      return `<button type="button" class="filter-btn" data-id="${el}">
          ${el}
        </button>`;
    })
    .join("");
  btnContainer.innerHTML = allBtns;
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach((el) => {
    el.addEventListener("click", function () {
      let category = el.dataset.id;
      const menuCategory = menu.filter((el) => {
        if (el.category === category) {
          return el;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});
