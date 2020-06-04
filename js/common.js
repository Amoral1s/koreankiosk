$(document).ready(function () {

  //Всплывающее меню
  jQuery('li.cat-parent').hover(function(){
    jQuery(this).children('ul').slideDown(100);
  }, function(){
    jQuery(this).children('ul').slideUp(100);
  });
  
  if (jQuery(window).width() <= 768 ) {
    jQuery('.header-mobile-burger').on('click', function () { 
      jQuery(this).toggleClass('header-mobile-burger-active');
      jQuery('.header-mobile-menu').slideToggle(300);
      setTimeout(() => {
        jQuery('.header-mobile').toggleClass('header-mobile-active');
      }, 300);
      jQuery('.header-mobile-search').removeClass('header-mobile-search-active');
      jQuery('.header-mobile-search-form').slideUp(300);
     });
     jQuery('.header-mobile-search').on('click', function() {
        jQuery(this).toggleClass('header-mobile-search-active');
        jQuery('.header-mobile-search-form').slideToggle(300);
        jQuery('.header-mobile-burger').removeClass('header-mobile-burger-active');
        jQuery('.header-mobile-menu').slideUp(300);
        setTimeout(() => {
          jQuery('.header-mobile').removeClass('header-mobile-active');
        }, 300);
     });
  }
  $('.offer-wrap-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  });
});