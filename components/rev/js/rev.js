const swi = () => {
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
};
swi();
