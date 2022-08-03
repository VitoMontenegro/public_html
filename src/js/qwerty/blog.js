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
		$('.dropdown').not($(this)).removeClass('open');
		$(this).toggleClass('open');
	});

	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".dropdown-menu" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.closest('.dropdown').removeClass('open'); // скрываем его
		}
	});



});