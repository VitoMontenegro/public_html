// function searchblog() {
//   // prettier-ignore
//   if ({$user_id} === 0) {
//     //quickreg();
//     return;
//   }
//   const searchstr = document.getElementById('blogsearch').value;
//   if (searchstr === '') {
//     window.location.href = '{$addpath}{$blogpath}';
//   } else {
//     window.location.href = `{$addpath}/search/${searchstr}`;
//   }
// }

jQuery(document).ready(function($){
	$(' .dropdown').on('click', function(){
		//$('.dropdown').not($(this)).removeClass('open');
		$(this).addClass('open');
	});

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".dropdown-menu, .dropdown__menu" ),
			smartSearchInner = $('#smartSearchInner'), // тут указываем ID элемента
			smartSearchBtnr = $('#smart-search-btn'); // тут указываем ID элемента
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
	});
	
	$('.dropdown-menu_wrap').on('click', function(event) {
	    event.stopPropagation();
	});

	$('#smart-search-btn').on('click', function() {
		$(this).toggleClass('open');
		$('#smartSearchInner').toggle();
	});

	$('.items_scroll:not(.select_all)').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.select_all').on('click',function() {
		if ($(this).hasClass('active')) {
			$('.items_scroll').removeClass('active');
		} else {
			$('.items_scroll').addClass('active');
		}
		
	});
	$('.main__content__header__actions .expand__action__item button').on('click', function(){
		$(this).closest('li').toggleClass('active');
	});


	myFunc.call();

 	$(".intervalcheck").change(function(){
   		myFunc.call();
 	});
 
	function myFunc(){
	  	var intervalCheck = $("input[name='search_from']:checked").val();
	 
	  	$("#smart-search-btn span" ).empty();
	  	$("#smart-search-btn span" ).append(intervalCheck);
	}
	$('.custom-radio').on('click', function() {
		console.log($(this).find('input'));
	});

	var showChar = 357,
		ellipsestext = "...",
		moretext = "More",
		lesstext = "Less";
	$('.crop-height__txt').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}
	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
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



});