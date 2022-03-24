const reviewers = [
  {
    id: 1,
    name: "Susan Smith",
    job: "UI/UX Web Desinger",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    module: {
      projects: 17,
      following: 159,
      followers: 205,
    },
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eos voluptate temporibus assumenda voluptatum mollitia unde expedita aspernatur est?`,
  },
  {
    id: 2,
    name: "Bill Anderson",
    job: "UI/UX Mobile Desinger",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    module: {
      projects: 11,
      following: 250,
      followers: 185,
    },
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at omnis voluptatibus architecto modi aliquam labore excepturi sit odio accusamus. Quam.`,
  },
  {
    id: 3,
    name: "Anna Johnson",
    job: "UI/UX Desinger",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    module: {
      projects: 23,
      following: 67,
      followers: 631,
    },
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda esse necessitatibus eum quas ducimus blanditiis corporis, vel enim error!`,
  },
  {
    id: 4,
    name: "Peter Jones",
    job: "Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    module: {
      projects: 7,
      following: 19,
      followers: 31,
    },
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum accusantium optio voluptatibus omnis excepturi reprehenderit numquam neque.`,
  },
];

const img = document.getElementById("author-img");
const names = document.getElementById("name");
const job = document.getElementById("job");
const projects = document.getElementById("projects");
const following = document.getElementById("following");
const followers = document.getElementById("followers");
const text = document.getElementById("text");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");
const dots = document.getElementById("dots");

let loadItem = 0;

function getInitialData(loadItem) {
  let item = reviewers[loadItem];
  img.src = item.img;
  names.textContent = item.name;
  job.textContent = item.job;
  projects.textContent = item.module.projects;
  following.textContent = item.module.following;
  followers.textContent = item.module.followers;
  text.textContent = item.text;
}

function getNextReviewers() {
  loadItem += 1;
  if (loadItem > reviewers.length - 1) {
    loadItem = 0;
  }
  getInitialData(loadItem);
}

function getPrevReviewers() {
  loadItem -= 1;
  if (loadItem < 0) {
    loadItem = reviewers.length - 1;
  }
  getInitialData(loadItem);
}

function getRandomReviewers() {
  let random = Math.floor(Math.random() * reviewers.length);
  getInitialData(random);
}

function getDotsInfo() {
  const el = dots.nextElementSibling.classList;
  el.contains("alert") ? el.remove("alert") : el.add("alert");
  setTimeout(() => {
    el.remove("alert");
  }, 3000);
}

dots.addEventListener("click", getDotsInfo);
next.addEventListener("click", getNextReviewers);
prev.addEventListener("click", getPrevReviewers);
random.addEventListener("click", getRandomReviewers);
window.addEventListener("DOMContentLoaded", getInitialData(0));
