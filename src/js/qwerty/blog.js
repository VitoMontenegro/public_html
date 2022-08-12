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
	$('.dropdown').on('click', function(){
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
	$('.expand__action__item button').on('click', function(){
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

});