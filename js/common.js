$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
	
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

$(".link-page_sidebar").click(function(e) {
	e.preventDefault();
		if ($(this).siblings(".sidebar-block__content").is(":hidden")) {
			$(this).siblings(".sidebar-block__content").slideDown(200);
			$(this).find("span").html("Свернуть");
		} else {
			$(this).siblings(".sidebar-block__content").slideUp(200);
			$(this).find("span").html("Развернуть");
		}
		
	});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	$(".question__name").click(function(e) {
		e.preventDefault();
		$(".question").removeClass("active");
		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".question__answer").slideUp(200);
		}
	});

	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$('.tab-quiz').each(function(index, element){
  $(this).attr('data-block', index);  
   index += 1;
  $('.progressbar-numbers').append('<div class="progressbar-numbers__item" >'+index+'</div>');
  $(".progressbar-numbers__item:first-child").addClass("active");
});





	$(".btn-main_next").click(function(e) {
		e.preventDefault();
		$(".tabs-name.active").next().addClass("active");
		$(this).parent().parent().fadeOut(0);
		$(this).parent().parent().next(".tabs-item").fadeIn(200);
	});

	$(".btn-main_prev").click(function(e) {
		e.preventDefault();
		$(".tabs-name.active").last().removeClass("active");
		$(this).parent().parent().fadeOut(0);
		$(this).parent().parent().prev(".tabs-item").fadeIn(200);
	});

	//слайдер

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-graph').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-advice').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-four').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-cards').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.consumers-slider').slick({
		arrows: false,
		dots: true,
		infinite: false,
		   mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			 settings: 'unslick'
		}
		]
	});

	 $('.help-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1000,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
        infinite: true,

    });

	  $('.reviews-slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000,
      prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
      nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
      infinite: true,

  });


	$(".calculator-range").ionRangeSlider({
		min: 10000,
		max: 1000000,
		from: 1,
		grid: true,
		step: 5,
		values: ["10000", "1 000 000", "2 500 000", "5 000 000", "10 000 000"],
		grid_margin: true,
	});
	$(".calculator-days").ionRangeSlider({
		min: 1,
		max: 60,
		grid: true,
		from: 2,
		step: 5,
		values: ["1", "24", "36", "48", "60"],
		grid_margin: true,

	});
	$(".calculator-rate").ionRangeSlider({
		min: 4,
		max: 30,
		grid: true,
		from: 10,
		grid_margin: true,
	});
	$(".sidebar-price").ionRangeSlider({
		min: 900,
		max: 1000000,
		from: 180000,
		grid: true,
		prettify: true,
		grid_margin: true,
	});
	$(".sidebar-deadline").ionRangeSlider({
		grid: true,
		grid_margin: true,
		values: [1 +" день", 10 + " дней", 1 + " месяц", 6 + " месяцев", 1 + " год"]
	});
	$(".sidebar-day").ionRangeSlider({
		min: 0,
		max: 6,
		grid: true,
		from: 4,
		postfix: " %",
		prettify: true,
		grid_margin: true,
	});

	$(".sidebar-old").ionRangeSlider({
		min: 18,
		max: 86,
		grid: true,
		from: 10,
		hasGrid: true,
		postfix: " лет",
	});
	$(".steps-sum").ionRangeSlider({
		min: 10000,
		max: 20000000,
		values: ["10 000", "500 000","1 000 000", "10 000 000", "20 000 000"],
		grid: true,
		from: 1,
		hasGrid: true,
		postfix: " руб",
		hideMinMax: true,
	});
	$(".steps-month").ionRangeSlider({
		min: 4,
		max: 48,
		grid: true,
		from: 2,
		values: ["1", "12","24", "36","48"],
		postfix: "  месяцев",
	});


	$(".sidebar-money").ionRangeSlider({
		min: 900,
		max: 1000000,
		grid: true,
		from:100000
	});

	$(".compare-range").ionRangeSlider({
		min: 1,
		max: 5,
		from: 4,
		grid: true,
		prettify: true,
		grid_margin: true,
	});


var c_tabs = $(".tab-quiz-credit").length;
 $('.value-quiz span').append(c_tabs);

	$('.tab-quiz-credit').each(function(index, element){
  $(this).attr('data-block', index);  
   index += 1;
  
  $('.progressbar-numbers').append('<div class="progressbar-numbers__item" ></div>');
  $(".progressbar-numbers__item:first-child").addClass("active");
});


	$(".btn-block_next").click(function(e) {
		e.preventDefault();
		var n= $( this ).parent().parent().parent().index()+2;
	 $('.value-quiz b').html(n);

		$(".progressbar-numbers__item.active").next().addClass("active");
		$(this).parent().parent().parent().fadeOut(0);
		$(this).parent().parent().parent().next(".tab-quiz-credit").fadeIn(200);
	});


	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});

window.addEventListener('DOMContentLoaded', () => {
  // get all progress bar
  const elements = [].slice.call(document.querySelectorAll('.pie'));
  // call to function
  const circle = new CircularProgressBar('pie')

  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // if IntersectionObserver is supported by the browser
  if ('IntersectionObserver' in window) {
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };

    const ovserver = new IntersectionObserver((entries, observer) => {
      entries.map((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
          circle.initial(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, config);

    elements.map((item) => {
      ovserver.observe(item);
    });
  } else {
    // if the browser does not support IntersectionObserver
    // we run all progress bars at once
    elements.map((element) => {
      circle.initial(element);
    });
  }

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

