$(function () {
  $(".main-menu__logo .btn").click(function () {
    $(".overlay").addClass("open");
    $(".main-menu__links").addClass("open");
  });
  function closeMenu() {
    $(".overlay").removeClass("open");
    $(".main-menu__links").removeClass("open");
  }
  $(".main-menu__close").click(function () {
    closeMenu();
  });
  $(".overlay").click(function () {
    closeMenu();
  });
});

var myCarousel = document.querySelector(".carouselExampleCaptions");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  // keyboard: true,
});

AOS.init({});

let header__top = document.querySelector(".header__top");
let header = document.querySelector(".header");
let sticky;
window.onscroll = function () {
  calcScroll();
  if (window.pageYOffset > 164) {
    header__top.classList.add("display-none");
  }
  if (window.pageYOffset >= 165) {
    header.classList.add("from-top");
    sticky = setTimeout(() => header.classList.add("sticky"), 0);
  } else {
    header__top.classList.remove("display-none");
    header.classList.remove("sticky");
    clearTimeout(sticky);
  }
};
/*
 ** Scroll To Top Button
 */
let calcScroll = () => {
  let scrollProgress = document.querySelector(".scroll-to-top");

  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 240) {
    scrollProgress.style.bottom = `20px`;
  } else {
    scrollProgress.style.bottom = `100%`;
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#2be4ac ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onload = calcScroll;
