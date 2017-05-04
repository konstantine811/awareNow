/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Admin
* @Last Modified time: 2017-05-03 18:36:25
*/

'use strict';




$(document).ready(function() {

$('.coaches_sld').slick({
	dots: true,
	 slidesToShow: 3,
  slidesToScroll: 1
});

$('.window_slide').slick({
	slidesToShow: 1,
  	slidesToScroll: 1,
  	cssEase: 'ease-in',
});

$('figure.one').slick({
	slidesToShow: 1,
  	slidesToScroll: 1,
  	cssEase: 'ease-in-out',
});

 $('.viewport').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  arrows: true,
  fade: false,
  dots: true,
  asNavFor: '.select-img'
});
$('.select-img').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.viewport',
  cssEase: 'ease-in-out',
  dots: true,
  centerMode: false,
  focusOnSelect: true
});



$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "cubic-bezier(0.600, 0.280, 0.735, 0.045)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

$(".main").moveTo(1);


$('.popup').click(function() {
	$('.mobile_menu').fadeIn(500);
})
$('.close_btn, ul li').click(function() {
	$('.mobile_menu').fadeOut(500);
})

});

