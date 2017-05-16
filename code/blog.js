/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Abrams
* @Last Modified time: 2017-05-07 18:27:05
*/

'use strict';



$(document).ready(function() {

	$('.popup').click(function() {
		$('.mobile_menu').fadeIn(500);
	});
	$('.close_btn, ul li').click(function() {
		$('.mobile_menu').fadeOut(500);
	});


	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		if(wScroll > 55) {
			$('nav.menu').css({'background-color' : '#F6F8F9', 'transition' : 'background 0.3s ease-in-out'});
		}

		else  {
			$('nav.menu').css({'background' : 'none', 'transition' : 'background 0.9s ease-in-out'});
		}
	});


});

