const navBtn = document.querySelector('.hamburger');
const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};
navBtn.addEventListener('click', handleNav);
