/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Admin
* @Last Modified time: 2017-05-26 19:08:34
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
			$('nav.menu_blog').css({'background-color' : '#F6F8F9', 'transition' : 'background 0.3s ease-in-out'});
		}

		else  {
			$('nav.menu_blog').css({'background' : 'none', 'transition' : 'background 0.9s ease-in-out'});
		}
	});


});

