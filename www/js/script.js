$(document).ready(function() { 	

  $('#fullpage').fullpage({
    /*sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],*/
    anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],
    menu: '#menu',
    scrollingSpeed: 1000
  });

   $("#new-car-slider").owlCarousel({       
      nav:false,
      pagination: false,     
      loop : true,    
      center : false,
      items : 1,
      autoplay: false,
      lazyLoad: true,      
      URLhashListener:true,
      startPosition: 'Mercedes',
      dotsContainer: '#new-car-slider__nav'
    });

  /*вычисляем отступ от fixed шапки*/   
  function FooterHeigh() {    
    var footerheight = $('.page-footer').outerHeight();  
    $(".page-main").css({"padding-bottom":footerheight});  
  };
  FooterHeigh();

  $(window).resize(function(){
    FooterHeigh();
  });

});
