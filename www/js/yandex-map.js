//Yandex Map
var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.969416, 30.302587], // 
        zoom: 10,
        // Отключаем все элементы управления
        controls: ['zoomControl']
    });
    //myPlacemark = new ymaps.Placemark([59.947944, 30.303637]);  

    myPlacemark1 = new ymaps.Placemark([59.808822, 30.165555], {     
            //balloonContent: 'Центр Таллинский'       
            balloonContentHeader: '<strong>Центр Таллинский</strong>',
            balloonContentBody: 'Санкт-Петербург, Таллинское шоссе 157, литера А',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/icon-map-black.svg',
            // Размеры метки.
            iconImageSize: [30, 41],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
           // iconImageOffset: [-21, -60]
        });
    myPlacemark2 = new ymaps.Placemark([60.094030, 30.254307], {         
            //balloonContent: 'Центр Выборгский'   
            balloonContentHeader: '<strong>Центр Выборгский</strong>',
            balloonContentBody: 'Санкт-Петербург, Выборгское шоссе, дом 352, литера А',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/icon-map-black.svg',
            // Размеры метки.
            iconImageSize: [30, 41],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
          //  iconImageOffset: [-21, -60]
        });
    myPlacemark3 = new ymaps.Placemark([59.810460, 30.317979], {         
            //balloonContent: 'Центр Выборгский'   
            balloonContentHeader: '<strong>Центр Пулково</strong>',
            balloonContentBody: 'Санкт-Петербург, Ул. Стартовая 5, литера А',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icon-map-black.svg',
            iconImageSize: [30, 41]
        });
    myPlacemark4 = new ymaps.Placemark([59.997145, 30.248962], {         
            //balloonContent: 'Центр Выборгский'   
            balloonContentHeader: '<strong>Главный офис Wagner, Центр Лахта</strong>',
            balloonContentBody: 'Санкт-Петербург, ул. Оптиков, 3А ',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icon-map-black.svg',
            iconImageSize: [30, 41]
        });

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.behaviors.disable('scrollZoom'); //запрет прокрутки по скроллу
};