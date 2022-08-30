jQuery(document).ready(function($){

	var sid = 0;
	var id = 0;
	// Индекс слайда слайд
	var slideIndex = 1;
	// длина шкалы
	var width = 1;
	//время проигрывания
	var slideDuration = 5;
	// количество изображений
	var	totalImages = $('.pop-slider__toggle').attr('data-items');
	//шкала прогресса
	var	progressBar = $(".pop-slider__progress-bar");
	// пауза
	var mouseOnContainer = false;


	$('body').on('mousedown', '.pop-slider__items__content', function() {
		mouseOnContainer = true;
	});
	$('body').on('mouseup', '.pop-slider__items__content', function() {
		mouseOnContainer = false;
	});

	showProgress = function() {
		progressBar.eq( slideIndex-1 ).css('width', 0);

		console.log('slideIndex: ' + slideIndex);

		id = setInterval(progress, (slideDuration / 100) * 1000);
		console.log('id:' + id);

		function progress() {
			if (width >= 100 && slideIndex >= totalImages) {
				clearInterval(id);
				clearInterval(sid);
			}
			if (mouseOnContainer == false) {
				if (width >= 100 && slideIndex >= totalImages) {
					clearInterval(id);
				} else {
					width++;
					progressBar.eq( slideIndex-1 ).css('width', width + '%');
				}
			}
		}
	};

	function plusSlides(n) {
		clearInterval(id);
		width = 0;
		showSlides(slideIndex += n);
	}

	function showSlides(n) {
		var i;
		var slides = $(".pop-slider__toggle .pop-slider__items li");

		if (n > slides.length) {
			//in case viewing last slide then keep it on that slide.
			slideIndex = slides.length;
		}
		if (n < 1) {
			slideIndex = 1;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex - 1].style.display = "block";

		if (slideIndex <= totalImages) {
			showProgress();
		}
	}


	$('body').on('click', '.is-close.is-top', function() {
		width = 0;
		slideIndex = 1;
		mouseOnContainer = false;

		clearInterval(id);
		clearInterval(sid);
	});

	$('.story-slidenav-prev').on('click', function() {
		progressBar.eq( slideIndex-1 ).css('width', 0);
		clearInterval(sid);
		plusSlides(-1);
		sid = setInterval(function() {
			if (mouseOnContainer == false && width >= 100) {
				plusSlides(1);
				if (slideIndex == totalImages) {
					clearInterval(sid);
				}
			}
		}, 100);
	});

	$('.story-slidenav-next').on('click', function() {
		progressBar.eq( slideIndex-1 ).css('width', "100%");
		clearInterval(sid);
		plusSlides(1);
		sid = setInterval(function() {
			if (mouseOnContainer == false && width >= 100) {
				plusSlides(1);
				if (slideIndex == totalImages) {
					clearInterval(sid);
				}
			}
		}, 100);
	});

	$('.story-slider .slick-slide a').on('click', function(){
		var sid = 0;
		var id = 0;


		// Индекс слайда слайд
		var slideIndex = 1;

		// длина шкалы
		var width = 1;

		// количество изображений
		var	totalImages = $('.pop-slider__toggle:visible').attr('data-items'); 

		//шкала прогресса
		var	progressBar = $(".pop-slider__progress-bar");

		showSlides(slideIndex);
	});	

	sid = setInterval(function() {
		if (mouseOnContainer == false && width >= 100) {
			if (slideIndex == totalImages) {
				clearInterval(sid);
			} else {
				plusSlides(1);
			}
		}
	}, 100);

});



