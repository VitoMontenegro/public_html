jQuery(document).ready(function($){
	$(' .dropdown').on('click', function(){
		//$('.dropdown').not($(this)).removeClass('open');
		$(this).addClass('open');
	});

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".dropdown-menu, .dropdown__menu" ),
			smartSearchInner = $('#smartSearchInner'), // тут указываем ID элемента
			smartSearchBtnr = $('#smart-search-btn'), // тут указываем ID элемента
			typeID = $('#typeID'), // тут указываем ID элемента
			publicationPrivate = $('.publicationPrivate'); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.closest('.dropdown').removeClass('open'); // скрываем его
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
	$('.main__content__header__actions .expand__action__item button').on('click', function(){
		$(this).closest('li').toggleClass('active');
	});


	changeHeaderFormView.call();
	changeModalFormView.call();
	changePublicationPrivate.call();

 	$(".intervalcheck").change(function(){
   		changeHeaderFormView.call();
 	});
 	$(".typeIdCheck").change(function(){
   		changeModalFormView.call();
 	});
 	$(".publicationCheck").change(function(){
   		changePublicationPrivate.call();
 	});
 
	function changeHeaderFormView(){
	  	var intervalCheck = $("input[name='search_from']:checked").val();
	 
	  	$("#smart-search-btn span" ).empty();
	  	$("#smart-search-btn span" ).append(intervalCheck);
	}
 
	function changeModalFormView(){
	  	var typeIdCheck = $("input[name='myIdoc']:checked").val();
	 
	  	$("#addID span" ).empty();
	  	$("#addID span" ).append(typeIdCheck);
	}
 
	function changePublicationPrivate(){
	  	var publicationCheck = $("input[name='publicationPrivate']:checked").val();
	 
	  	$("#publicationType span" ).empty();
	  	$("#publicationType span" ).append(publicationCheck);
	}

	$('.custom-radio').on('click', function() {
		console.log($(this).find('input'));
	});

	var showChar = 357,
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
		  	breakpoint: 1024,
		  	settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3,
			    infinite: true,
			    dots: true
		  	}
		},
		{
		  	breakpoint: 600,
		  	settings: {
		    	slidesToShow: 2,
		    	slidesToScroll: 2
		  	}
		},
		{
		  	breakpoint: 480,
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



});
