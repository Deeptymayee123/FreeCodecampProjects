//local reviews data
const reviews = [
  {
    id: 1,
    name: "sara jones",
    job: "ux designer",
    image: "./person-1.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?  Iste, doloremque nihil?",
  },
  {
    id: 2,
    name: "Kishan Kumar Ojha",
    job: "Web developer",
    image: "./boy_pic4.jpg",
    text: "A powerful short story for adults is the 'Two Shoe Salesmen', a parable highlighting how mindset shapes reality. Sent to a foreign country, the first salesman sees no potential because 'nobody wears shoes'.",
  },
  {
    id: 3,
    name: "Dinesh Rout",
    job: "Backend developer",
    image: "./bpy_pic5.jpg",
    text: "Growth Mindset: Focus on opportunities rather than obstacles.The second sees a massive opportunity for the same reason, demonstrating that perspective determines success.",
  },
  {
    id: 4,
    name: "Laximi parida",
    job: "API Developer",
    image: "./boy_pic6.jpg",
    text: "An API developer is a specialized software engineer who designs, builds, secures, and maintains Application Programming Interfaces (APIs) to enable different software systems and applications to communicate",
  },
];

//select items

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item, it is a globar variable.
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    //currentItem = reviews.length - 1
    currentItem = 3;
  }
  showPerson(currentItem);
});

//show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);

  console.log(reviews[currentItem].name);
});
//let num
