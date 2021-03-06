const displayWidth = document.documentElement.clientWidth;

/* Footer current year */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Open and close navigation menu on mobile */

(function initMenuTogglers() {
	const toggleButton = document.querySelector('#toggle-menu-button');
	toggleButton.addEventListener('click', toggleMenu);
}());

function toggleMenu(e) {
	e.stopPropagation();

	const navbar = document.getElementById('navbar');
	const menuButton = document.getElementById('toggle-menu-button');
	const menuIcon = document.getElementById('toggle-menu-icon')

	if (navbar.style.display === "block") { // hide menu
		menuIcon.src = "images/bars-solid.svg";
		navbar.style.display = "none";
		menuButton.classList.remove('showMenu');

	} else { // show menu
		menuIcon.src = "images/times-solid.svg";
		navbar.style.display = "block";
		menuButton.classList.add('showMenu');

		document.addEventListener('click', toggleMenu, {
			once: true,
			capture: true
		})
	}
}

/* Active page on site */
const home = document.getElementById('hem');
const services = document.getElementById('tjanster');
const about = document.getElementById('om');
const contact = document.getElementById('kontakt');

let topOfView, topOfHome, topOfServices, topOfAbout, topOfContact;

let navLinks = Array.from(document.getElementById("navbar").getElementsByTagName("a"));

window.addEventListener("scroll", debounce(onScroll));
onScroll(); // initial highlight when not scrolled

function onScroll() {
	topOfView = window.scrollY;
	topOfHome = home.offsetTop;
	topOfServices = services.offsetTop;
	topOfAbout = about.offsetTop;
	topOfContact = contact.offsetTop;

	navLinks.forEach(a => a.classList.remove('selected'))

	if (topOfView < (topOfServices - 1)) {
		navLinks[0].classList.add('selected'); // home
	} else if (topOfView >= (topOfServices - 1) && topOfView < (topOfAbout - 1)) {
		navLinks[1].classList.add('selected'); // services
	} else if (topOfView >= (topOfAbout - 1) && topOfView < (topOfContact - 1)) {
		navLinks[2].classList.add('selected'); // about
	} else if (topOfView >= (topOfContact - 1)) {
		navLinks[3].classList.add('selected'); // contact
	}
}

function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
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