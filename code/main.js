/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Admin
* @Last Modified time: 2017-05-30 15:42:42
*/

jQuery(document).ready(function() {

jQuery('.coaches_sld').slick({
  dots: true,
   slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
   {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },

     {
      breakpoint: 582,
      settings: {
        slidesToShow: 1,
      }
    },

    {
      breakpoint: 488,
      settings: {
        slidesToShow: 1,
        dots: false
      }
    },
    ]
});

jQuery('.window_slide').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in',
    asNavFor: 'section.advance .link'
});

jQuery('section.advance .link').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: 'false',
    swipe: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    arrows: false,
    fade: false,
    dots: false,
    swipeToSlide: false,
    centerMode: true,
    focusOnSelect: true,
    cssEase: 'ease-in',
    asNavFor: '.window_slide'
});
/*Мой код*/
$('section.advance .link .slick-slide[aria-hidden="true"]').css("opacity","0");

var arrLinks =  $('section.advance .link .slick-slide[aria-hidden="false"]');
for(var i = 0; i < arrLinks.length; i++){
  $('section.advance .link .slick-slide[aria-hidden="true"]').css("opacity","0");
  arrLinks.eq(i).addClass("style"+i);
}
$('.advance .slick-arrow').click(function() {
  var allLinks = $('section.advance .link .slick-slide');
  for (var i = 0; i < allLinks.length; i++) {
    $('section.advance .link .slick-slide').css("opacity","1");
    allLinks.eq(i).removeClass("style0 style1 style2 style3 style4 style5 style6 style7 style8");
  }
});
$('.advance .slick-arrow').mouseup(function(){
  setTimeout(function(){
    var arrLinks =  $('section.advance .link .slick-slide[aria-hidden="false"]');
    for(var i = 0; i < arrLinks.length; i++){
      $('section.advance .link .slick-slide[aria-hidden="true"]').css("opacity","0");
      arrLinks.eq(i).addClass("style"+i);
    }
  }, 100);
});
/*-end-*/
jQuery('figure.one').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
});



 jQuery('.viewport').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  arrows: true,
  fade: false,
  dots: true,
  asNavFor: '.select-img',
  responsive: [
   {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
    ]
});
jQuery('.select-img').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.viewport',
  cssEase: 'ease-in-out',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});




//поменять responsiveFallback: false на 768
//
//
//
//

jQuery(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "cubic-bezier(0.600, 0.280, 0.735, 0.045)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: 768,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});

//end
//
//
//
//
jQuery(".main").moveTo(0);


jQuery('nav.menu .popup').click(function() {
  jQuery('nav.mobile_menu').fadeIn(500);
})
jQuery('.close_btn, ul li').click(function() {
  jQuery('.mobile_menu').fadeOut(500);
});

jQuery('nav.menu_blog .popup').click(function() {
  jQuery('nav.mobile_menu').fadeIn(500);
})
jQuery('.close_btn, ul li').click(function() {
  jQuery('.mobile_menu').fadeOut(500);
});

//sign hover
$( ".sign" ).hover(
  function() {
    $( this ).parent().find('.login').removeClass( "active" );
  }, function() {
    $( this ).parent().find('.login').addClass( "active" );
  }
);



});