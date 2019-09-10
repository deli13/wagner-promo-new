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

  /*вычисляем отступ от fixed подвала*/   
  function FooterHeigh() {    
    var footerheight = $('.page-footer').outerHeight();  
    $(".page-main").css({"padding-bottom":footerheight});  
    $(".page").css({"padding-bottom":footerheight+60});  
  };
  FooterHeigh();

  $(window).resize(function(){
    FooterHeigh();
  });

  /*Функции для ползунка цены*/
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  var handleMin = $( "#custom-handle-min" );
  var handleMax = $( "#custom-handle-max" );
  $( "#slider-range" ).slider({
    range: true,
    min: 400000,
    max: 2000000,
    values: [ 550000, 1600000 ],
    create: function() {
      handleMin.html( "<span>" + numberWithSpaces( $( "#slider-range" ).slider( "values", 0 ) ) + "</span>" );
      handleMax.html( "<span>" + numberWithSpaces( $( "#slider-range" ).slider( "values", 1 ) ) + "</span>" );
    },
    slide: function( event, ui ) {     
      var MinPrice = numberWithSpaces( ui.values[0] );
      var MaxPrice = numberWithSpaces( ui.values[1] );
      handleMin.html( "<span>" + MinPrice  + "</span>" );
      handleMax.html( "<span>" + MaxPrice  + "</span>" );
    }
  });

  /*Открыть все параметры*/
  function OpenOtherParametrs(e) {
    e.preventDefault();
    $('#configurator__other-info').slideToggle('300');
    $("#OtherParametrs").toggleClass("configurator__more-info-btn--open");
    $(".configurator__reset-filter-btn").toggleClass("configurator__reset-filter-btn--open");
  };
  $("#OtherParametrs").on("click", OpenOtherParametrs);

  //фиксированная менюшка в мобилке на странице каталога 
  var catalogMobNav = $(".catalog-mob-nav");

  if(catalogMobNav.length != 0 ) {

    var catalogMobNavPosition = $(".catalog-mob-nav").offset().top;
    $(window).resize(function(){     
        catalogMobNavPosition = $(".catalog-mob-nav").offset().top;
    });  
    $(window).scroll(function () {
      if(  $(window).scrollTop() > catalogMobNavPosition ) {
            $(".catalog-mob-nav").addClass("catalog-mob-nav--fixed");
        }      
        else {         
            $(".catalog-mob-nav").removeClass("catalog-mob-nav--fixed");
        }; 
    });

  };

  //слайдер галереи фотографии
  $("#car-gallery-slider").owlCarousel({       
      nav:false,
      pagination: false,     
      loop : true,    
      center : false,
      items : 4,
      autoplay: false,
      lazyLoad: true,
      margin: 30,
      dots: false
    });

  $('#car-gallery-slider .owl-item').on('click', function(e) {
      const carousel = $('#car-gallery-slider').data('owl.carousel');
      carousel.to(carousel.relative($(this).index()), false, true);
  });


  function CarGalleryClick(e) {
    //код функции
    e.preventDefault();
    var mylink = $(this).attr('href');
    $("#car-gallery-mainimg").attr('src', mylink);
  };

  $(".car-gallery__slider-item").on("click", CarGalleryClick);

  //слайдер награды
   $("#awards-slider").owlCarousel({       
      nav:false,
      pagination: false,     
      loop : true,    
      center : true,
      autoplay: false,
      lazyLoad: true,      
      margin : 30,
      dots : true,

      responsive:{
        960:{
          items: 6
        },
        576:{
            items: 4
        },
        0:{
          items: 2,
          dots : false,
          nav : true,
          navText : ["",""]
        }
      }
    });

   //функция открытия фильтра (для моб.) в новостях и акциях
   function OpenNewsNav(e) {
    //код функции
    e.preventDefault();
    $('.news__filter-mob').toggleClass('news__filter-mob--open');
    $('.news__nav').slideToggle(300);
  };

  $("#filter-mob").on("click", OpenNewsNav);

  //функция открытия поиска (для моб.) в новостях и акциях
  function OpenSearch(e) {
    //код функции
    e.preventDefault();
    $('.news__search-mob').toggleClass('news__search-mob--open');
    $('.news__search').slideToggle(300);
  };

  $("#search-mob").on("click", OpenSearch);

  //слайдер новость
   $("#new-slider").owlCarousel({       
      pagination: false,     
      loop : true,    
      center : true,
      autoplay: false,
      lazyLoad: true,      
      margin : 30,
      dots : true,
      items: 1,

      responsive:{
        960:{
          nav : true,
          navText : ["",""]
        },
        576:{
          nav : false
        },
        0:{          
          nav : false
        }
      }
    });
    //слайдер акция
   $("#action-slider").owlCarousel({       
      pagination: false,     
      loop : true,    
      center : true,
      autoplay: false,
      lazyLoad: true,      
      margin : 30,
      dots : true,
      nav : false,
      items: 1
    });

   //select2
   var haveSelect = $("select");
   if(haveSelect.length != 0 ) {
      $('select').select2();
   };

   //burger
   function MobBurger(e) {
    e.preventDefault();     
    $('#burger').toggleClass('burger--open');
    $('#top-menu').slideToggle(300);   
  };
  $("#burger").on("click", MobBurger);  

  /*Маска для телефона*/
  $(function() {
   $(".phone-mask").mask("+7 (999) 999-9999");
  });

});
