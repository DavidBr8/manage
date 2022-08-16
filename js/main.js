const navBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav__mobile');
const shadowHandle = document.querySelector('.pageshadow');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	mobileNav.classList.toggle('--active');
	shadowHandle.classList.toggle('pageshadow-active');
};
navBtn.addEventListener('click', handleNav);
