$(document).ready(function() {
	//bannerSlider


  //customMenuCol
  $(".menuBlock").click(function() {
    $(".customMenuCol").addClass("customMenuColActive");
  });
  $(".customMenuColCloseBtn").click(function() {
    $(".customMenuCol").removeClass("customMenuColActive");
  });

  // searchbox
  $(".searchBtn").click(function(event) {
    event.preventDefault();
    $(".searchbox").slideToggle("medium");
  });
  $(".searchbox .searchboxClose").click(function() {
    $(".searchbox").slideUp("medium");
  });

	//parallax scrolling bg
  var $window = $(window); //You forgot this line in the above example

  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // Put together our final background position
        var coords = '100% '+ yPos + 'px';
        // Move the background
        $bgobj.css({ backgroundPosition: coords 
        });
      });
  });

  //positioned parallax element
  function parallax(){
    var scrolled = $(window).scrollTop();
      $('.bannerBottomSection .col-md-7 .row .col-sm-4:nth-of-type(1) .collectionsImgBlock').css('top', -(scrolled * 0.45) + 'px');
      $('.bannerBottomSection .col-md-7 .row .col-sm-4:nth-of-type(2) .collectionsImgBlock').css('top', -(scrolled * 0.75) + 'px');
      $('.bannerBottomSection .col-md-7 .row .col-sm-4:nth-of-type(3) .collectionsImgBlock').css('top', -(scrolled * 0.45) + 'px');
  }
  $(window).scroll(function(e){
      parallax();
  });

  




  //target link slide on click
  $('.scrollDownBtn > a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 1000);
    return false;
  });

  //scrollUp
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
      $(".navigationBar").addClass("navigationBarScroll");
    } else {
      $('.scroll-to-top').fadeOut();
      $(".navigationBar").removeClass("navigationBarScroll");
    }
  });

  $('.scroll-to-top').click(function() {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
  });





});