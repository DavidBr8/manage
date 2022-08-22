const handlePage = () => {
	var swiper = new Swiper('.mySwiper', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});

	const navBtn = document.querySelector('.hamburger');
	const mobileNav = document.querySelector('.nav__mobile');
	const shadowHandle = document.querySelector('.pageshadow');
	const mobileNavItems = document.querySelectorAll('.nav__mobile-items-link');
	const navScrollHandle = document.querySelector('.nav');
	const footerYear = document.querySelectorAll('.year');
	const navScrollPadding = document.querySelector('.nav__items');

	const handleNav = () => {
		navBtn.classList.toggle('is-active');
		mobileNav.classList.toggle('--active');
		shadowHandle.classList.toggle('pageshadow-active');
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
		})
	);
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.forEach((footerYear) => {
			footerYear.innerText = year;
		});
	};
	handleCurrentYear();
	navBtn.addEventListener('click', handleNav);
	window.addEventListener('scroll', handleScroll);
	AOS.init();

	Stickyfill.forceSticky();
	Stickyfill.add(document.querySelectorAll('.sticky'));
};

handlePage();
