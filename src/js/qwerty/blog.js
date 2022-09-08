jQuery(document).ready(function($){
	$(' .dropdown').on('click', function(){
		//$('.dropdown').not($(this)).removeClass('open');
		$(this).addClass('open');
		$('body').addClass('modal-open');
	});
	$('.is_subscribe').on('click', function(){
		if ($(this).hasClass('active')) {
			$('#unsubscribe').modal('show');
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}

	});

	// $('.likeblue').on('click', function(){
	// 	$(this).closest('li').toggleClass('active');
	// });
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".dropdown-menu, .dropdown__menu, .modal" ),// тут указываем ID элемента
			smartSearchInner = $('#smartSearchInner'), 
			smartSearchBtnr = $('#smart-search-btn'),
			typeID = $('#typeID'),
			publicationPrivate = $('.publicationPrivate');


		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.closest('.dropdown').removeClass('open'); // скрываем его
			$('body').removeClass('modal-open');
		}
		if ( !smartSearchInner.is(e.target) // если клик был не по нашему блоку
		    && smartSearchInner.has(e.target).length === 0 
		    && !smartSearchBtnr.is(e.target)) { // и не по его дочерним элементам
			smartSearchInner.hide(); // скрываем его
			smartSearchBtnr.removeClass('open');
		}
		if ( !typeID.is(e.target) // если клик был не по нашему блоку
		    && typeID.has(e.target).length === 0 
		    && !typeID.is(e.target)) { // и не по его дочерним элементам
			typeID.hide(); // скрываем его
			typeID.removeClass('open');
		}
		if ( !publicationPrivate.is(e.target) // если клик был не по нашему блоку
		    && publicationPrivate.has(e.target).length === 0 
		    && !publicationPrivate.is(e.target)) { // и не по его дочерним элементам
			publicationPrivate.hide(); // скрываем его
			publicationPrivate.removeClass('open');
		}
	});
	$('#showMenu').on('click', function(){
		$('.mask').toggle();
		$('.primary-nav-home').addClass('active');
	});

	$('.mask').on('click', function(){
		$(this).hide();
		$('.primary-nav-home').removeClass('active');
	});
	
	$('.dropdown-menu_wrap').on('click', function(event) {
	    event.stopPropagation();
	});

	$('#smart-search-btn').on('click', function() {
		$(this).toggleClass('open');
		$('#smartSearchInner').toggle();
	});

	$('#addID').on('click', function() {
		$(this).toggleClass('open');
		$('#typeID').toggle();
	});

	$('.publicationType').on('click', function() {
		$(this).toggleClass('open');
		$(this).closest('.modal__header').find('.publicationPrivate').toggle();
	});

	$('.search__filter__item__items .items_scroll:not(.select_all)').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.search__filter__item__items .select_all').on('click',function() {
		if ($(this).hasClass('active')) {
			$('.search__filter__item__items .items_scroll').removeClass('active');
		} else {
			$('.search__filter__item__items .items_scroll').addClass('active');
		}
		
	});


	function selectOption(target, option) {
	  	target.empty();
	  	target.append(option);
	}

 	$(".intervalcheck").change(function() {
 		var option = $("input[name='search_from']:checked").val(),
 		    target = $("#smart-search-btn span" );
   		selectOption(target, option);
 	});
 	$(".typeIdCheck").change(function(){
 		var option = $("input[name='myIdoc']:checked").val(),
 		    target = $("#addID span" );
   		selectOption(target, option);
 	});
 	$(".publicationCheck").change(function(){
 		var option = $("input[name='publicationPrivate']:checked").val(),
 		    target = $("#publicationType span" );
   		selectOption(target, option);
 	});

 	$(".feed_select").change(function(){
 		var option = $(this).closest('.dropdown').find("input[name='feed_check']:checked").val(),
 		    target = $(this).closest('.dropdown').find(".feed_target span" );
   		selectOption(target, option);
 	});

 	$(".block-aside__select").change(function(){
 		var option = $(this).closest('.dropdown').find("input[name='block-aside-check']:checked").val(),
 		    target = $(this).closest('.dropdown').find(".block-aside_target span" );
   		selectOption(target, option);
 	});

	var showChar = 357,
		showCharShort = 100,
		ellipsestext = "...",
		moretext = "More";

	$('.crop-height__txt').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<b class="morelink">' + moretext + '</b></span>';

			$(this).html(html);
		}
	});

	$('.crop-height__txt_short').each(function() {
		var content = $(this).html();

		if(content.length > showCharShort) {

			var c = content.substr(0, showCharShort);
			var h = content.substr(showCharShort, content.length - showCharShort);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';

			$(this).html(html);
		}
	});

	$('.crop-height__txt_short').on('click', function(){
		$(this).find('.moreellipses').hide();
		$(this).find('.morecontent span').show();
		$(this).find('.comment-aside__form').show();
	});
	
	if ($(window).width() < 568) {
		$('#statisticBtn').on('click', function(){
			$(this).next('.main__content__header__list__menu').toggle();
		});

		$('.main__content__header__list__menu li').on('click', function(){
			let txt = $(this).find('span').html(),
				container = $(this).closest('ul');
			$('#statisticBtn span').html(txt);
			container.hide();
		});		
	}

	$('[data-step]').on('click', function(){
		let target = $(this).attr('data-step');
		$('.tabs_step').addClass('hidden');
		$('.'+target).removeClass('hidden');
	});

	// Videojs
	document.querySelectorAll('.vjs-video').forEach((video) => {
		console.log(video)
		if(video.id) {
			var player = videojs(video.id, {
				controlBar: {
					children: [
						"playToggle",
						"progressControl",
						"currentTimeDisplay",
						"timeDivider",
						"durationDisplay",
						"volumePanel",
						"fullscreenToggle",
					],
					volumePanel: {
						inline: false
					}
				}
			});
	
			// Replace default button with custom button.
			function replaceComponent(component, placement, classes = [], innerHTML = '', order = 0) {
				var defaultComponent = videojs.getComponent(component);
				var customComponent = videojs.extend(defaultComponent);
	
				player.getChild(placement).removeChild(component, {});
				videojs.registerComponent(component, customComponent);
	
				var customComponentInstance = player.getChild(placement).addChild(component, {}, order);
	
				classes.forEach((clazz) => {
					customComponentInstance.addClass(clazz);
				});
	
				var customComponentEl = customComponentInstance.el();
	
				customComponentEl.insertAdjacentHTML('beforeend', innerHTML);
			}
	
			replaceComponent('playToggle', 'controlBar', [
				'button',
				'is-primary',
				'is-icon'
			],`
				<svg role="img" class="icon is-pause">
					<use href="/assets/sprite/sprite.svg#pause" />
				</svg>
				<svg role="img" class="icon is-play">
					<use href="/assets/sprite/sprite.svg#play" />
				</svg>
			`, 0);
	
			replaceComponent('fullscreenToggle', 'controlBar', [
				'button',
				'is-icon'
			],`
				<svg role="img" class="icon">
					<use href="/assets/sprite/sprite.svg#fullscreen" />
				</svg>
			`, 6);
	
			// Replace default volumePanel button with custom button.
			var defaultVolumePanel = videojs.getComponent('volumePanel');
			var customVolumePanel = videojs.extend(defaultVolumePanel);
	
			player.getChild('controlBar').removeChild('volumePanel', {});
			videojs.registerComponent('volumePanel', customVolumePanel);
	
			var customVolumePanelInstance = player.getChild('controlBar').addChild('volumePanel', {
				inline: false
			}, 5);
	
			var customVolumePanelEl = customVolumePanelInstance.el();
			var customVolumePanelBtn = customVolumePanelEl.querySelector('.vjs-mute-control');
	
			customVolumePanelBtn.classList.add('button');
			customVolumePanelBtn.classList.add('is-icon');
	
			customVolumePanelBtn.insertAdjacentHTML('beforeend', `
				<svg role="img" class="icon">
					<use href="/assets/sprite/sprite.svg#volume" />
				</svg>
			`);
	
		}
	});

	$('.comments_toggle').on('click', function(){
		$(this).closest('.content-card').find('.post__comments').toggle();
	});

	$('.story-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4.5,
		slidesToScroll: 1,
  		lazyLoad: 'ondemand',
		responsive: [
		{
		  	breakpoint: 1260,
		  	settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3
		  	}
		},
		{
		  	breakpoint: 670,
		  	settings: {
		    	slidesToShow: 2,
		    	slidesToScroll: 2
		  	}
		},
		{
		  	breakpoint: 520,
		  	settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
		  	}
		}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.story-card').each(function (index) {
	    var slide = $(this);
	    slide.css('background-image', 'url(' + slide.data('src') + ')');
	});


	/**
	* ---------------------------------------------------------------------------
	* TOGGLE SEARCH FORM ON MOBILES
	* ---------------------------------------------------------------------------
	*/

	var headerSearchForm = $('#header-search-form');

    $('.header__search-toggle').on('click', function(){

    	if (headerSearchForm.hasClass('is-open')) return;

    	headerSearchForm.addClass('is-open');
    	$('body').append('<div class="backdrop is-on"></div>');
    });

	$(document).mouseup( function(e){ // событие клика по веб-документу
		if ( !headerSearchForm.is(e.target) && headerSearchForm.has(e.target).length === 0 ) {
			$('.backdrop').remove();
			headerSearchForm.removeClass('is-open');
		}
	});

	$('.header__search-cancel').on('click', function(){
			$('.backdrop').remove();
			headerSearchForm.removeClass('is-open');
	});

});
