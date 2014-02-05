(function (window, ymaps) {
    'use strict';

    ymaps.ready(function () {
        var map = new ymaps.Map('map', {
            center: [57.997521, 56.284573],
            zoom: 15,
            controls: ['zoomControl']
        });

        var placemark = new ymaps.Placemark(map.getCenter(), {
            balloonContentBody: 'Этот дом'
        }, {
            preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(placemark);
    });
}(window, ymaps));