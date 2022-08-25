const navHandle = () => {
	const navBtn = document.querySelector('.hamburger');
	const bodyScroll = document.querySelector('.scroll');
	const mobileNav = document.querySelector('.nav__mobile');
	const shadowHandle = document.querySelector('.pageshadow');
	const mobileNavItems = document.querySelectorAll('.nav__mobile-items-link');
	const navScrollHandle = document.querySelector('.nav');
	const navScrollPadding = document.querySelector('.nav__items');

	const handleNav = () => {
		navBtn.classList.toggle('is-active');
		mobileNav.classList.toggle('--active');
		shadowHandle.classList.toggle('pageshadow-active');
		bodyScroll.classList.toggle('scroll--off');
	};

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			navScrollHandle.classList.add('nav--scroll');
			navScrollPadding.classList.add('nav__items--scroll');
		} else {
			navScrollHandle.classList.remove('nav--scroll');
			navScrollPadding.classList.remove('nav__items--scroll');
		}
	};

	mobileNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			mobileNav.classList.toggle('--active');
			shadowHandle.classList.toggle('pageshadow-active');
			navBtn.classList.toggle('is-active');
			bodyScroll.classList.toggle('scroll--off');
		})
	);

	navBtn.addEventListener('click', handleNav);
	window.addEventListener('scroll', handleScroll);
	shadowHandle.addEventListener('click', handleNav);
};

navHandle();
