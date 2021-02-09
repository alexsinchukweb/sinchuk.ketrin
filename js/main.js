$(function () {



	$('.header__menu').on('click', function () {
		$('.header__nav').toggleClass('_active')
		$('body').addClass('_lock')
		$('.header').toggleClass('_active')
	});




	$('.header__nav-link').on('click', function () {
		$('.header__nav').removeClass('_active')
		$('body').removeClass('_lock')
		$('.header').removeClass('_active')

	})


	$('.pref__blur').on('click', function () {
		$(this).toggleClass('show');
	});

	$('.reviews-slider__thumb').slick({
		asNavFor: '.reviews-slider__big',
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		mobileFirst: true,
		draggable: false,
	});

	$('.reviews-slider__big').slick({
		asNavFor: '.reviews-slider__thumb',
		arrows: false,
		draggable: false,
	});


	$('.services-tabs__top-item').on('click', function (e) {
		e.preventDefault();
		$('.services-tabs__top-item').removeClass('services-tabs__top-item--active');
		$(this).addClass('services-tabs__top-item--active');

		$('.services-tabs__content-item').removeClass('services-tabs__content-item--active');
		$($(this).attr('href')).addClass('services-tabs__content-item--active');
	});


	// document.querySelectorAll('a.header__nav-link').forEach(link => {
	// 	link.addEventListener('click', function (e) {
	// 		e.preventDefault()

	// 		const href = this.getAttribute('href').substring(1)

	// 		const scrollTarget = document.getElementById(href)

	// 		const topOffset = 0
	// 		const elementPosition = scrollTarget.getBoundingClientRect().top
	// 		const offsetPosition = elementPosition - topOffset

	// 		window.scrollBy({
	// 			top: offsetPosition,
	// 			behavior: 'smooth'
	// 		})
	// 	})
	// })
	$('a.header__nav-link').on('click', function (e) {
		var $anchor = $(this)
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $($anchor.attr('href')).offset().top - 0,
				},
				{
					duration: 1000,
					specialEasing: {
						width: 'linear',
						height: 'easeInOutCubic',
					},
				}
			)
		e.preventDefault
	})

});