'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
				menu = document.querySelector('.menu'),
				menuClose = document.querySelector('.menu__close'),
				menuOverlay = document.querySelector('.menu__overlay'),
				menuLink = document.querySelectorAll('.menu__link'),
				sidepanel = document.querySelector('.sidepanel'),
				promo = document.querySelector('.promo'),
				skillsValue = document.querySelectorAll('.skills__item-value'),
				skillsBar = document.querySelectorAll('.skills__item-bar'),
				contactsForm = document.querySelector('.contacts__form'),
				intElements = ['a', 'button', 'input', 'textarea', '[tabindex]'];;

	hamburger.addEventListener('click', (e) => {
		e.preventDefault();

		let elements = document.querySelectorAll(intElements.toString());

		menu.classList.add('menu_active');
		document.body.style.overflow = 'hidden';

		elements.forEach((item) => {
			if (!menu.contains(item)) {
				if (item.getAttribute('tabindex') !== '-1') {
					item.setAttribute('tabindex', '-1');
				}
			}
		});
	});

	window.addEventListener('scroll', () => {
		if (scrollY >= promo.scrollHeight - 20) {
			hamburger.classList.add('hamburger_black')
		} else {
			hamburger.classList.remove('hamburger_black');
		}
	});

	function modalClose(sel) {
		sel.addEventListener('click', (e) => {
			if (sel == menuClose) e.preventDefault();

			let elements = document.querySelectorAll(intElements.toString());

			menu.classList.remove('menu_active');
			document.body.style.overflow = '';

			elements.forEach((item) => {
				if (!menu.contains(item)) {
					if (item.getAttribute('tabindex') !== '0') {
						item.setAttribute('tabindex', '0');
					}
				}
			});
		});
	}

	modalClose(menuClose);
	modalClose(menuOverlay);

	menuLink.forEach(item => {
		modalClose(item);
	});

	window.addEventListener('keydown', (e) => {
		if (e.key == 'Escape') {
			let elements = document.querySelectorAll(intElements.toString());

			menu.classList.remove('menu_active');
			document.body.style.overflow = '';

			elements.forEach((item) => {
				if (!menu.contains(item)) {
					if (item.getAttribute('tabindex') !== '0') {
						item.setAttribute('tabindex', '0');
					}
				}
			});
		}
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

	contactsForm.addEventListener('submit', async (e) => {
		e.preventDefault();

		let formData = new FormData(contactsForm);

		await fetch('mailer/send_mail.php', {
			method: 'POST',
			body: formData
		});

		contactsForm.reset();
	});


});
