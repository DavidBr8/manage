const navBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav__mobile');
const shadowHandle = document.querySelector('.pageshadow');
const mobileNavItems = document.querySelectorAll('.nav__mobile-items-link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	mobileNav.classList.toggle('--active');
	shadowHandle.classList.toggle('pageshadow-active');
};
mobileNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		mobileNav.classList.toggle('--active');
		shadowHandle.classList.toggle('pageshadow-active');
		navBtn.classList.toggle('is-active');
	})
);
navBtn.addEventListener('click', handleNav);
