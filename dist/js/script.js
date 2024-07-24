const hamburger = document.querySelector('.hamburger');
			menu = document.querySelector('.menu'),
			menuClose = document.querySelector('.menu__close'),
			menuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu__active');
});

function modalClose(sel) {
	sel.addEventListener('click', () => {
		menu.classList.remove('menu__active');
	});
}

modalClose(menuClose);
modalClose(menuOverlay);

window.addEventListener('keydown', (e) => {
	if (e.keyCode == '27') menu.classList.remove('menu__active');
});
