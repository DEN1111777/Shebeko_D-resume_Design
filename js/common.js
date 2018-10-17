; (function ($) {
	'use strict';

// ========== изменение свойств main-nav при скролле ============================
	var scrollTop = 0;
	$(window).scroll(function () {
		scrollTop = $(window).scrollTop();
		if (scrollTop >= 40) {
			$(".main-nav").addClass('main-nav--scrolled');
		} else if (scrollTop < 40) {
			$(".main-nav").removeClass('main-nav--scrolled');
		}
	});

// ========== hero наведение на фото ============================
	$(document).ready(function () {

		var heroLeftBlock = $('.hero__content--left');
		var heroRightBlock = $('.hero__content--right');
		var mql = window.matchMedia('all and (max-width: 767px)');

		if (mql.matches) {
			// размер окна 767px или меньше
			heroLeftBlock
				.mouseover(function () {
					heroRightBlock.css({
						'transform': 'translateY(230px)'
					});
				})
				.mouseout(function () {
					heroRightBlock.css({
						'transform': 'translateY(0)'
					});
				});
		} else {
			heroLeftBlock
				.mouseover(function () {
					$('.hero__content').css({
						'background-size': '50%'
					});
					heroRightBlock.css({
						'transform': 'translate(90px)'
					});
				})
				.mouseout(function () {
					$('.hero__content').css({
						'background-size': '40%'
					});
					heroRightBlock.css({
						'transform': 'translate(0)'
					});
				});
		}

	});


// ========= плавный скролл к якорю ==============================================
	$('a[href*=\\#]').on('click', function () {
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 44
		}, 300);
	});

// ========= перезапуск анимации лого и подписи при клике ==========================
	window.onload = function () {

		$('.main-logo').on('click', function () {
			$(this).hide();

			setTimeout(function () {
				$('.main-logo').show();
			}, 50);
		});

		$('.my-logo').on('click', function () {
			$('#my-logo').hide();

			setTimeout(function () {
				$('#my-logo').show();
			}, 50);
		});
	};


//==== запуск анимации лого подписи когда досроллил до неё, запуск только один раз =====
	var marker = true;
	var target = $('.my-logo');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;

	function count() {
		$('#my-logo').hide();

		setTimeout(function () {
			$('#my-logo').show();
		}, 50);

		marker = false;
	}

	$(window).scroll(function () {
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			if (marker) {
				count();
			}
		}
	});

// ========= переключение позиций списка в секции сервисы =======================
	$(document).ready(function () {

		var educationButton = $('.education__icons-item');
		var educationDescription = $('.education__description');
		// var progressValueOne = $('.progress__value--first');

		educationButton.on('click', function (evt) {
			evt.preventDefault();

			// Добавлять/убирать класс active кнопкам
			$(this)
				.addClass('active')
				.siblings().removeClass('active');

			var activeEducationButtonIndex = educationButton.index(this);

			educationDescription.eq(activeEducationButtonIndex)
				.addClass('education__description--active')
				.siblings().removeClass('education__description--active');
		});

	});

// =========== секция work, сетка masonry с помощью isotope, плюс фильтрация===========
	$(document).ready(function () {
		var grid = $('#grid').isotope({
			itemSelector: '.portfolio__grid-item',
			layoutMode: 'masonry',
			masonry: {
				// horizontalOrder: true
			}
		});

		$('.portfolio__list-item').click(function () {
			var filterValue = $(this).attr('data-category');
			grid.isotope({ filter: filterValue });

			$(this)
				.addClass("portfolio__list-item--active")
				.siblings().removeClass("portfolio__list-item--active");
		});
	});

// =========== слайдер =================================================================
	$(document).ready(function () {
		$('.information__slider').slick({
			slide: '.information__slide-wrapper',
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'ease-out',
			autoplay: true,
			autoplaySpeed: 4000
		});
	});

// ========= google-map ==================================================
	// $(document).ready(function () {
	// 	var map;
	// 	var mapContainer = $('#map')[0];
	// 	var mapCenter = { lat: 49.0704525, lng: 33.405257 };
	// 	map = new google.maps.Map(mapContainer, {
	// 		center: mapCenter,
	// 		zoom: 17,
	// 	});

	// 	var marker = new google.maps.Marker({
	// 		position: mapCenter,
	// 		map: map,
	// 		title: 'Hello, I am here.',
	// 		icon: 'img/map-marker.png'
	// 	});

	// 	var infowindow = new google.maps.InfoWindow({
	// 		content: 'Hello World'
	// 	});

	// 	marker.addListener('click', function () {
	// 		infowindow.open(map, marker);
	// 	});
	// });

})($);