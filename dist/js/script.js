const hamburger = document.querySelector('.hamburger');
			menu = document.querySelector('.menu'),
			menuClose = document.querySelector('.menu__close'),
			menuOverlay = document.querySelector('.menu__overlay'),
			sidepanel = document.querySelector('.sidepanel'),
			skillsValue = document.querySelectorAll('.skills__item-value'),
			skillsBar = document.querySelectorAll('.skills__item-bar');

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

window.addEventListener('scroll', () => {
	if (scrollY >= 450) {
		sidepanel.classList.add('sidepanel__black')
	} else {
		sidepanel.classList.remove('sidepanel__black');
	}
});

skillsValue.forEach( (item, i) => {
	skillsBar[i].style.width = item.innerHTML;
});
