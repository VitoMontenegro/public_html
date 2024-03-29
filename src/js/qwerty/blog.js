$(document).ready(function(){
    $(document).on('click', '.dropdown',function(){
        //$('.dropdown').not($(this)).removeClass('open');

        if (!$(this).hasClass('not_fixed')) {
            $('body').addClass('dropdown-open');
        }
        $(this).addClass('open');
    });

    $(document).on('click','.add_more', function(){
        $(this).prev('.hidden').show();
    });

    $(document).on('click', '.is_delite', function(){
        $('#unsubscribe').modal('show');
    });

    $('.is_subscribe').on('click', function(){
        if ($(this).hasClass('active')) {
            $('#unsubscribe').modal('show');
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $(document).on('click','.show_lside',function(){
        $('.is_audio').addClass('active');
        let $target = $(this).attr('data-target');
        $('.l-nav__modals').hide();
        $($target).show();
    });

    $(document).on('click', '#getliveMenu',function(){
        $('.l-nav__menu').show();
    });

    $(document).on('click', '.location-list a',function() {
        let tab_content = $(this).closest('.tab_content');
        tab_content.removeClass('active');
        tab_content.next().addClass('active');

    });

    $(document).on('click', '.sidebar_hide',function(){
        $('.photo-pop').toggleClass('active');
    });

    $(document).on('click', '#getLiveInfo',function(){
        $('.content-card.modal-card').show();
    });

    $(document).on('click', '.content-card.modal-card', function(){
        if ($(window).width() < 1024) {
            $(this).hide();
        }

    });

    $(document).on('click', '.l-comment__children-count', function(){
        $(this).closest('.l-thread').find('.l-thread__children').toggle();
    });

    $(document).on('click', '.tabs_items__item button', function() {
        let $target = $(this).attr('data-target');
        let $theParent = $(this).closest('.tabs_items__item');
        $('.tabs_items__item').removeClass('active');
        $('.l-nav__modals').hide();
        $($target).show();
        $theParent.addClass('active');
    });

    $(document).on('click', '.expand__action__item', function(){
        let parentWrap = $(this).closest('div');
        parentWrap.find('.expand__action__item').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    if ($(window).width() < 1024) {
        $(document).on('click', '.menu__link', function() {
            let $target = $(this).attr('data-target');
            $('.l-nav__modals').hide();
            console.log($target);
            $($target).show();
        });

        $(document).on('click', '.l-nav__modals .is_close',function(){
            $(this).closest('.l-nav__modals').hide();
        });
    }
    if ($(window).width() < 768) {
        $('.audio-sm-menu .menu__link').on('click', function() {
            $('body').addClass('hover');
        });

        $(document).on('click', '.l-nav__modals .is_close',function(){
            $(this).closest('.l-nav__modals').hide();
            $('body').removeClass('hover');
        });
    }

    // $('.modal-card__wrap').on('click', function(event) {
    //     event.stopPropagation();
    // });

    // $('.likeblue').on('click', function(){
    // 	$(this).closest('li').toggleClass('active');
    // });


    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".dropdown-menu, .dropdown__menu" ),// тут указываем ID элемента
            divModal = $('.modal'),
            smartSearchInner = $('#smartSearchInner'),
            lNavMenu = $('.l-nav__menu'),
            isAudio = $('.is_audio'),
            lNavModals = $('.l-nav__modals'),
            smartSearchBtnr = $('#smart-search-btn'),
            typeID = $('#typeID'),
            publicationPrivate = $('.publicationPrivate');


        if ( (!divModal.is(e.target))  &&// если клик был не по нашему блоку
            (divModal.has(e.target).length === 0 ) &&
            (!isAudio.is(e.target)) ) { // и не по его дочерним элементам
            $('body').removeClass('modal-open');
        }

        if ( !div.is(e.target) &&
            (div.has(e.target).length === 0) &&
            (!isAudio.is(e.target) ) &&
            isAudio.has(e.target).length === 0 ) { // и не по его дочерним элементам
            div.closest('.dropdown').removeClass('open'); // скрываем его
            $('body').removeClass('dropdown-open');
        }

        if ( !isAudio.is(e.target) && // если клик был не по нашему блоку
            isAudio.has(e.target).length === 0 ) { // и не по его дочерним элементам
            isAudio.removeClass('active');
        }

        if ( !smartSearchInner.is(e.target) && // если клик был не по нашему блоку
            smartSearchInner.has(e.target).length === 0 &&
            !smartSearchBtnr.is(e.target)) { // и не по его дочерним элементам
            smartSearchInner.hide(); // скрываем его
            smartSearchBtnr.removeClass('open');
        }

        if ( !typeID.is(e.target) && // если клик был не по нашему блоку
            typeID.has(e.target).length === 0 &&
            !typeID.is(e.target)) { // и не по его дочерним элементам
            typeID.hide(); // скрываем его
            typeID.removeClass('open');
        }

        if ( !publicationPrivate.is(e.target) && // если клик был не по нашему блоку
            publicationPrivate.has(e.target).length === 0 &&
            !publicationPrivate.is(e.target)) { // и не по его дочерним элементам
            publicationPrivate.hide(); // скрываем его
            publicationPrivate.removeClass('open');
        }

        if ( !lNavMenu.is(e.target) && // если клик был не по нашему блоку
            lNavMenu.has(e.target).length === 0 &&
            !lNavMenu.is(e.target) &&
            ($(window).width() < 768)) { // и не по его дочерним элементам
            lNavMenu.hide(); // скрываем его
        }

        // if ( !lNavModals.is(e.target) && // если клик был не по нашему блоку
        //	lNavModals.has(e.target).length === 0 &&
        //	!lNavModals.is(e.target)&&
        //	($(window).width() < 1024)) { // и не по его дочерним элементам
        // 	lNavModals.hide(); // скрываем его
        // }
    });

    $(document).on('click', '#showMenu',function(){
        $('.mask').toggle();
        $('.primary-nav-home').addClass('active');
    });

    $(document).on('click', '.mask',function(){
        $(this).hide();
        $('.primary-nav-home').removeClass('active');
    });

    $(document).on('click', '.dropdown-menu_wrap',function(event) {
        event.stopPropagation();
    });

    $(document).on('click', '#smart-search-btn',function() {
        $(this).toggleClass('open');
        $('#smartSearchInner').toggle();
    });

    $(document).on('click','#addID', function() {
        $(this).toggleClass('open');
        $('#typeID').toggle();
    });

    $(document).on('click', '.publicationType',function() {
        $(this).toggleClass('open');
        $(this).closest('.modal__header').find('.publicationPrivate').toggle();
    });

    $(document).on('click', '.search__filter__item__items .items_scroll:not(.select_all)',function(){
        $(this).toggleClass('active');
    });

    $(document).on('click', '.search__filter__item__items .select_all',function() {
        if ($(this).hasClass('active')) {
            $('.search__filter__item__items .items_scroll').removeClass('active');
        } else {
            $('.search__filter__item__items .items_scroll').addClass('active');
        }

    });

    $(document).on('change', ".air_select",function() {
        if ($('.v_select').prop("checked")) {
            $('.stream-start__form').removeClass('form-audio').addClass('form-video');
        } else {
            $('.stream-start__form').removeClass('form-video').addClass('form-audio');
        }
    });

    function selectOption(target, option) {
        target.empty();
        target.append(option);
    }

    $(document).on("change", ".intervalcheck",function() {
        var option = $("input[name='search_from']:checked").val(),
            target = $("#smart-search-btn span" );
        selectOption(target, option);
    });
    $(document).on("change", ".typeIdCheck",function(){
        var option = $("input[name='myIdoc']:checked").val(),
            target = $("#addID span" );
        selectOption(target, option);
    });
    $(document).on('change', ".publicationCheck", function(){
        var option = $("input[name='publicationPrivate']:checked").val(),
            target = $("#publicationType span" );
        selectOption(target, option);
    });

    $(document).on('change',".feed_select",function(){
        var option = $(this).closest('.dropdown').find("input[name='feed_check']:checked").val(),
            target = $(this).closest('.dropdown').find(".feed_target span" );
        selectOption(target, option);
    });

    $(document).on('change',".block-aside__select",function(){
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

    $(document).on('click','.crop-height__txt_short', function(){
        $(this).find('.moreellipses').hide();
        $(this).find('.morecontent span').show();
        $(this).find('.comment-aside__form').show();
    });

    if ($(window).width() < 568) {
        $('#statisticBtn').on('click', function(){
            $(this).next('.main__content__header__list__menu').toggle();
        });

        $(document).on('click', '.main__content__header__list__menu li',function(){
            let txt = $(this).find('span').html(),
                container = $(this).closest('ul');
            $('#statisticBtn span').html(txt);
            container.hide();
        });
    }

    $(document).on('click', '[data-step]', function(){
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
					<use href="/projects/`+PageModelInstance.extraData.domain()+`/images/sprite/sprite.svg#pause" />
				</svg>
				<svg role="img" class="icon is-play">
					<use href="/projects/`+PageModelInstance.extraData.domain()+`/images/sprite/sprite.svg#play" />
				</svg>
			`, 0);

            replaceComponent('fullscreenToggle', 'controlBar', [
                'button',
                'is-icon'
            ],`
				<svg role="img" class="icon">
					<use href="/projects/`+PageModelInstance.extraData.domain()+`/images/sprite/sprite.svg#fullscreen" />
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
					<use href="/projects/`+PageModelInstance.extraData.domain()+`/images/sprite/sprite.svg#volume" />
				</svg>
			`);

        }
    });

    $(document).on('click', '.comments_toggle',function(){
        $(this).closest('.content-card').find('.post__comments').toggle();
    });

    $('.story-slider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        nextArrow: '<button type="button" class="slider__control slider__control__next"><svg class="icon deg90" aria-hidden="true"><use href="/projects/'+PageModelInstance.extraData.domain()+'/images/sprite/sprite.svg#icon-arrow"></use></svg></button>',
        prevArrow: '<button type="button" class="slider__control slider__control__prev"><svg class="icon deg270" aria-hidden="true"><use href="/projects/'+PageModelInstance.extraData.domain()+'/images/sprite/sprite.svg#icon-arrow"></use></svg></button>',
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
                arrows: false,
                centerMode: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                arrows: false,
                centerMode: true,
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



    $('.photo-slider__items').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        initialSlide: 1,
        prevArrow: '<button type="button" class="photo-slidenav-prev"><svg class="icon deg270" aria-hidden="true"><use href="/projects/'+PageModelInstance.extraData.domain()+'/images/sprite/sprite.svg#icon-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="photo-slidenav-next"><svg class="icon deg90" aria-hidden="true"><use href="/projects/'+PageModelInstance.extraData.domain()+'/images/sprite/sprite.svg#icon-arrow"></use></svg></button>',

    });

    $('.photo-slider__items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log('nextSlide');
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

    $(document).on('click', '.header__search-toggle',function(){

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

    $(document).on('click', '.header__search-cancel', function(){
        $('.backdrop').remove();
        headerSearchForm.removeClass('is-open');
    });

});
