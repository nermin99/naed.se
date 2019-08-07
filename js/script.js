/* Footer current year */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Active page on site */
const displayWidth = document.documentElement.clientWidth;

if (displayWidth >= 1200) {
  window.addEventListener("scroll", debounce(onScroll));
}

const home = document.getElementById('hem');
const services = document.getElementById('tjanster');
const about = document.getElementById('om');
const contact = document.getElementById('kontakt');

let topOfView, topOfHome, topOfServices, topOfAbout, topOfContact;

let navLinks = Array.from(document.getElementById("navbar").getElementsByTagName("a"));

function onScroll(e) {
  topOfView = window.scrollY;
  topOfHome = home.offsetTop;
  topOfServices = services.offsetTop;
  topOfAbout = about.offsetTop;
  topOfContact = contact.offsetTop;

  navLinks.forEach(a => a.classList.remove('selected'))

  if (topOfView < topOfServices) {
    navLinks[0].classList.add('selected');
  } else if (topOfView >= topOfServices && topOfView < topOfAbout) {
    navLinks[1].classList.add('selected');
  } else if (topOfView >= topOfAbout && topOfView < topOfContact) {
    navLinks[2].classList.add('selected');
  } else if (topOfView >= topOfContact) {
    navLinks[3].classList.add('selected');
  }
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


window.addEventListener("load", () => {
  // init();
});

window.addEventListener("DOMContentLoaded", () => {
  // init();
});