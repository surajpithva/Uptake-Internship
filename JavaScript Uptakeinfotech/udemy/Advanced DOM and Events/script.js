"use strict";

/////////////////////////////////////////////////////////////////
// Modal window
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//ForEach Method
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScroll.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  /////////////////////////////////////==================morden view of this scroll===========================//////////////////
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

//////////////////////==Page navigation(slow down their position)==[1]/////////////////////
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//////////////////////==Page navigation(slow down their position)==[2]/////////////////////

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  ////match the condition (how possible if we click on specific portion)
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

/////////////////////////////////////////////////tabbed component///////////////////////////////////////////////////////

// tabs.forEach((t) => t.addEventListener("click", () => console.log("hello")));

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //Guard cluase
  if (!clicked) return;
  //remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //activated tab
  clicked.classList.add("operations__tab--active");

  //active content area

  document
    .querySelector(
      `.operations__content--$ {
        clicked.dataset.tab
      }

      `
    )
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////MADE FADE ANIMATION//////////////////////////////////////////////

const handleHoverNavbar = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibilings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sibilings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing "" another argument
nav.addEventListener("mouseover", handleHoverNavbar.bind(0.5));

nav.addEventListener("mouseout", handleHoverNavbar.bind(1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const h1 = document.querySelector("h1");

// const alretH1 = function (e) {
//   alert("helllo");
//   h1.removeEventListener("mouseenter", alretH1);
// };
// h1.addEventListener("mouseenter", alretH1);

/////////////////////////////////////GENERATE RANDOM COLOR ON NAV BAR WITH EXAMPLE OF BUBBLING AND CAPTURING/////////////////////////////
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector("nav__link").addEventListener("click", function (e) {
//   //this.style.backgroundColor = randomColor();
// });

//////////////////////////////example of parent and child elements siblings//////////////////////////////////////////////////////////
// const h1 = document.querySelector("h1");
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// console.log(h1.parentElement.children);
