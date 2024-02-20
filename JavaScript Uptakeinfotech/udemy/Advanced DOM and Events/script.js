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
    // console.log(id);

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

/////////////////////////////////////////////////tabbed component///////////////////////////////////////////////////////

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
      `.operations__content--${clicked.dataset.tab}

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

//////////////////////////////////////////////////NAV-BAR STICKY//////////////////////////////////////////
//1.first way to do this
// const sticky = nav.offsetTop;
// window.onscroll = function () {
//   stickNavBar();
// };
// /* Function to stick the nav bar */
// const stickNavBar = () => {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// };
//2. this is second way to sticky way can work
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//3. this is third way to sticky can use with use of intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const obsOptions = { root: null, threshold: [0, 0.2] };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////Reveal sections///////////////////////////////////////////////////////////

const allSections = document.querySelectorAll(".section");

const revelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Lazy loading image//////////////////////////////////////////
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) return;

  //repalce img with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

////////////////////////////////////////////////////////////////////////////////////////////

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
