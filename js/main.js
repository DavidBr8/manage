const navBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav__mobile');
const shadowHandle = document.querySelector('.pageshadow');
const mobileNavItems = document.querySelectorAll('.nav__mobile-items-link');
const navScrollHandle = document.querySelector('.nav');
const footerYear = document.querySelector('.year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	mobileNav.classList.toggle('--active');
	shadowHandle.classList.toggle('pageshadow-active');
};

const handleScroll = () => {
	if (window.scrollY >= 50) {
		navScrollHandle.classList.add('nav--scroll');
	} else {
		navScrollHandle.classList.remove('nav--scroll');
	}
};

mobileNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		mobileNav.classList.toggle('--active');
		shadowHandle.classList.toggle('pageshadow-active');
		navBtn.classList.toggle('is-active');
	})
);
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleScroll);
