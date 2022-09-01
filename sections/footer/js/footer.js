const handleFooter = () => {
	const footerYear = document.querySelectorAll('.year');
	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.forEach((footerYear) => {
			footerYear.innerText = year;
		});
	};

	handleCurrentYear();
};

handleFooter();
