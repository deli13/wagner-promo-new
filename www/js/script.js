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
      center : true,
      items : 6,
      autoplay: false,
      lazyLoad: true,
      margin: 30,
      dots: false,

      responsive: {
        1160:{
          items: 6,
          margin : 30,
          dots: false
        },
        960:{
          items: 4,
          margin : 30,
          dots: false
        },
        671:{
          items: 4,
          margin : 15,
          dots: false
        },
        0:{
          items: 1,
          margin: 0,
          dots: true
        }
      }
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
      dots : true,

      responsive:{
        1160:{
          items: 6,
          margin : 30
        },
        960:{
          items: 4,
          margin : 30
        },
        576:{
            items: 4,
            margin : 15
        },
        0:{
          items: 2,
          dots : false,
          nav : true,
          navText : ["",""],
          margin : 15
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
   var haveSelect = $(".input__select");
   if(haveSelect.length != 0 ) {
      $('.input__select').select2();
   };

   var haveSelectCar = $(".input__forSelectCar");
   if(haveSelectCar.length != 0 ) {
      $('.input__forSelectCar select').select2({
        theme: 'car-select-list'
      });
   };

   //burger
   function MobBurger(e) {
    e.preventDefault();     
    $('#burger').toggleClass('burger--open');
    $('#top-menu').slideToggle(300);   
  };
  $("#burger").on("click", MobBurger);  
  $("#burger-close").on("click", MobBurger);  

  /*Маска для телефона*/
  $(function() {
   $(".phone-mask").mask("+7 (999) 999-9999");
  });

  //Form validate
  $('.article-form__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      phone: {
        required: true
      },
      email: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 3-ех символов в поле 'Имя'"
      },
      phone: {
        required: "Поле 'Телефон' обязательно к заполнению"
      },
      email: {
       required: "Поле 'Email' обязательно к заполнению"
     }
   },
   submitHandler: function(form) {
      $('.form-error').html('Форма отправлена');
      $('.form-error').css('display', "block");
      $('.form-error').css('color', "green");
    },
    invalidHandler: function() {
      $('.form-error').css('display', "block");
    }
 });

  $('.contactform__form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      },
      comment: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению"
      },
      phone: {
        required: "Поле 'Телефон' обязательно к заполнению"
      },
      email: {
       required: "Поле 'Email' обязательно к заполнению"
     },
     comment: {
       required: "Поле 'Сообщение' обязательно к заполнению"
     }
   },
   submitHandler: function(form) {
      $('.form-error').html('Форма отправлена');
      $('.form-error').css('display', "block");
      $('.form-error').css('color', "green");
    },
    invalidHandler: function() {
      $('.form-error').css('display', "block");
    }
 });

  $('.car-form__form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению"
      },
      phone: {
        required: "Поле 'Телефон' обязательно к заполнению"
      },
      email: {
       required: "Поле 'Email' обязательно к заполнению"
     }
   },
   submitHandler: function(form) {
      $('.form-error').html('Форма отправлена');
      $('.form-error').css('display', "block");
      $('.form-error').css('color', "green");
    },
    invalidHandler: function() {
      $('.form-error').css('display', "block");
    }
 });

  //Аккордион
  function Accordion(e) {
    e.preventDefault();     
    $(this).parent().toggleClass('accordion--open');
    $(this).parent().find(".accordion__info").slideToggle(300);   
    $(this).parent().find(".accordion__icon").toggleClass("accordion__icon--open");
  };
  $(".accordion__main").on("click", Accordion);

  //закрытие аккордина по доп. кнопке на моб.
  function AccordionClose(e) {
    e.preventDefault();     
    $(this).parent().parent().toggleClass('accordion--open');
    $(this).parent().parent().find(".accordion__info").slideToggle(300);   
    $(this).parent().parent().find(".accordion__icon").toggleClass("accordion__icon--open");
  };
  $(".accordion__icon--mob").on("click", AccordionClose);

   

});
