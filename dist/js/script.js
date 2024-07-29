const hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu'),
			menuClose = document.querySelector('.menu__close'),
			menuOverlay = document.querySelector('.menu__overlay'),
			menuLink = document.querySelectorAll('.menu__link'),
			sidepanel = document.querySelector('.sidepanel'),
			promo = document.querySelector('.promo'),
			skillsValue = document.querySelectorAll('.skills__item-value'),
			skillsBar = document.querySelectorAll('.skills__item-bar');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active');
	document.body.style.overflow = 'hidden';
});

window.addEventListener('scroll', () => {
	if (scrollY >= promo.scrollHeight - 20) {
		hamburger.classList.add('hamburger_black')
	} else {
		hamburger.classList.remove('hamburger_black');
	}
});

function modalClose(sel) {
	sel.addEventListener('click', () => {
		menu.classList.remove('menu_active');
		document.body.style.overflow = '';
	});
}

modalClose(menuClose);
modalClose(menuOverlay);

menuLink.forEach(item => {
	modalClose(item);
});

window.addEventListener('keydown', (e) => {
	if (e.keyCode == '27') menu.classList.remove('menu_active');
	document.body.style.overflow = '';
});

window.addEventListener('scroll', () => {
	if (scrollY >= promo.scrollHeight - 230) {
		sidepanel.classList.add('sidepanel_black')
	} else {
		sidepanel.classList.remove('sidepanel_black');
	}
});

skillsValue.forEach( (item, i) => {
	skillsBar[i].style.width = item.innerHTML;
});

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			// const topOffset = document.querySelector('.scrollto').offsetHeight;
			const topOffset = 0;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth'
			});
	});
});
