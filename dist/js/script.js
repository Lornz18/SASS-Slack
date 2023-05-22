const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav__content");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  header.classList.toggle("open");
});

const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}

//  head LINKS
const header_links = document.querySelectorAll(".header__nav__content__text__links a");
header_links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

//  LINKS
const links = document.querySelectorAll(".links__item h4");
links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});


// scroll
const head = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300) {
    head.classList.add("fixed");
  } else {
    head.classList.remove("fixed");
  }
});