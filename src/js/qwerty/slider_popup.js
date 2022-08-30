jQuery(document).ready(function($){
	var slideIndex = 1;
	var sid = 0;
	var id = 0;
	var width = 1;
	var	totalImages = $('.pop-slider__toggle:visible').attr('data-items');
	var	progressBar = $(".pop-slider__progress-bar");

	showProgress = function() {

		id = setInterval(progress, (5 / 100) * 1000);

		console.log('id:' + id);

		function progress() {
			if (width >= 100 && slideIndex >= totalImages) {
				clearInterval(id);
				clearInterval(sid);
			}
			
			if (width >= 100 && slideIndex >= totalImages) {
				clearInterval(id);
			} else {
				width++;
				progressBar.eq( slideIndex-1 ).css('width', width + '%');
			}
			
		}
	};

	if (slideIndex <= totalImages) {
		showProgress();
	}

	sid = setInterval(function() {
		if (width >= 100) {
			if (slideIndex == totalImages) {
				clearInterval(sid);
			} else {
				plusSlides(1);
			}
		}
	}, 100);

	function plusSlides(n) {
		clearInterval(id);
		width = 0;
		showSlides(slideIndex += n);
		showProgress();
	}

	function showSlides(n) {
		var i;
		var slides = $(".pop-slider__toggle:visible .pop-slider__items li");

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

		//set time
		if (slideIndex <= totalImages) {
			showProgress();
		}
	}

	$('.story-slider .slick-slide a').on('click', function(){
		showProgress();
	});	



	$('.story-slidenav-prev').on('click', function() {
		showProgress();
		plusSlides(-1);
		clearInterval(id);
		clearInterval(sid);
	});
	$('.story-slidenav-next').on('click', function() {
		showProgress();
		plusSlides(1);
		clearInterval(id);
		clearInterval(sid);
	});
	


});