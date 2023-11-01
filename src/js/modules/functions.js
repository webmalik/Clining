
export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function burgerMenu() {
	const burger = document.querySelector('.header__burger');
	const box = document.querySelector('.header__box');
	const body = document.body;

	burger.addEventListener('click', () => {
		burger.classList.toggle('open');
		box.classList.toggle('active');
		body.classList.toggle('lock');
	});

}

export function accordion(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	// Додати обробник подій для кожного заголовку
	accordionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			if (mode) {
				// Закрити всі аккордеони, крім того, який був клікнутий
				accordionTriggers.forEach(otherTrigger => {
					if (otherTrigger !== trigger) {
						otherTrigger.classList.remove('active');
						const otherContent = otherTrigger.nextElementSibling;
						let parentContainer = otherTrigger.parentNode.parentNode;
						otherContent.classList.remove('active');
					}
				});
			}

			trigger.classList.toggle('active');

			const content = trigger.nextElementSibling;
			const wrapper = trigger.parentNode;

			const img = wrapper.nextElementSibling;

			content.classList.toggle('active');
			img.classList.toggle('active');
		});
	});
}

export function accordionMobile(mode = true) {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger-mobile');
	if (window.innerWidth < 767) {
		accordionTriggers.forEach(trigger => {
			trigger.addEventListener('click', () => {
				if (mode) {
					// Закрити всі аккордеони, крім того, який був клікнутий
					accordionTriggers.forEach(otherTrigger => {
						if (otherTrigger !== trigger) {
							otherTrigger.classList.remove('active');
							const otherContent = otherTrigger.nextElementSibling;
							let parentContainer = otherTrigger.parentNode.parentNode;
							otherContent.classList.remove('active');
						}
					});
				}

				trigger.classList.toggle('active');

				const content = trigger.nextElementSibling;

				content.classList.toggle('active');
			});
		});
	}
}

export function tabs(container) {
	if (container) {
		document.addEventListener("DOMContentLoaded", function () {
			const tabButtons = container.querySelectorAll(".tab__button");
			const tabContents = container.querySelectorAll(".tab__content");

			tabButtons.forEach(function (button) {
				button.addEventListener("click", function (e) {
					e.preventDefault();
					const tabId = this.getAttribute("data-tab");
					showTab(tabId);
				});
			});

			function showTab(tabId) {
				tabContents.forEach(function (content) {
					if (content.getAttribute("data-tab") === tabId) {
						content.style.opacity = 0;
						content.style.display = "flex";
						content.classList.add('active');
						setTimeout(function () {
							content.style.opacity = 1;
						}, 50);
					} else {
						content.style.opacity = 0;
						content.style.display = "none";
						setTimeout(function () {
							content.classList.remove('active');
							content.style.opacity = 0;
						}, 50);
					}
				});
				tabButtons.forEach(function (button) {
					if (button.getAttribute("data-tab") === tabId) {
						button.classList.add("active");
					} else {
						button.classList.remove("active");
					}
				});

			}

			showTab(tabButtons[0].getAttribute("data-tab"));
		});
	}

}