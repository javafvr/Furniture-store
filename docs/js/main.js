$(document).ready(function(){
	var pull=$("#navigation-toggle"),
		menu = $(".navigation ul");

	$(pull).on('click', function(e){
		
		e.preventDefault();

		$(menu).slideToggle();

		//Добавим модификатор
		$(this).toggleClass("navigation__toggle-button--active");
	});

	// Owl-carousel version 2
	$("#top-slider").owlCarousel({
		items:1,
		rewind:true,
		// nav:false,
		dots:true,
		navText:["",""],
		responsive : {
		// breakpoint from 0 up
			0 : {
				nav:false,
				dots:true,

			},
		// breakpoint from 480 up
			320 : {
				nav:false,
				dots:true,
			},
		// breakpoint from 768 up
			768 : {
				dots:true,

			},
		// breakpoint from 1200 up
			1200 : {
				dots:true,

			}
		}
	});

	// var w = $(window).width();
	// if(w < 992){
	// 	console.log("Клик по ссылке " + w);
	// 	$('nav.navigation a').on("click", function(){
	// 		menu.slideToggle();
	// 	});
	// }


	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav.navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};


	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && menu.is(':hidden')){
			menu.removeAttr('style');
		}

	});

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector:"nav a"
	});


});