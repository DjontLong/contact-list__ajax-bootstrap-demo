	// грузим библиотеку jQuery и запустим функцию, когда DOM уже загружен
$(document).ready(function() {

	var hash = window.location.hash.substr(1);
	var href = $('#nav a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}
	});

	$('#nav a').click(function() {  // определить ссылки в меню навигации и запускать эту функцию при щелчке на них
	
		var toLoad = $(this).attr('href')+' #content';
// получаем аттрибут href нажатой ссылки,
// из которого будет загружаться инфа и и добавляем метку
// "content" откуда будет загружаться содержимое
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() { 
// Функция loadContent вызывает запрошенную страницу, 
// а когда это уже выполнено, вызывает функцию ‘showNewContent’ (показ нового содержимого)
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
    		$('#load').fadeOut('normal');
		}
    	return false;
    
    });
    
});

