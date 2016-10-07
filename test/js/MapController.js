var App = App || {};
App.MapController = (function (options) {
    var that = {},
        mapContainer,
        map,
        resetViewButton,
        mq;

    function init() {
        mapContainer = options.mapContainer;
        mq = window.matchMedia("(min-width: 800px)");
        initializeMap();
        setViewToOrigin();
        addResetViewButton();
        if (mq.matches) {
            enableAutoScroll();
        }
        return that;
    }

    function initializeMap() {
        map = L.map(options.overviewMap);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'peacecake.0felhajf',
            accessToken: 'pk.eyJ1IjoicGVhY2VjYWtlIiwiYSI6ImNpcHF2ajdvYzAwNzBpOW5ibWJ2MGJnbXMifQ.KojxmZe0C7bRnyQ5nwxIPw'
        }).addTo(map);
    }

    function setViewToOrigin() {
        map.setView([51.021090, 10.553437], 6);
    }

    function addResetViewButton() {
        //source: http://www.coffeegnome.net/control-button-leaflet/
        resetViewButton = L.Control.extend({
            options: {
                position: "topleft"
            },
            onAdd: function (map) {
                var resetButtonContainer = L.DomUtil.create("div", "resetViewButton leaflet-bar leaflet-control leaflet-control-custom");

                resetButtonContainer.onclick = function () {
                    setViewToOrigin();
                }
                return resetButtonContainer;
            }
        });
        map.addControl(new resetViewButton());
    }

    function enableAutoScroll() {
        //source: http://stackoverflow.com/questions/1638895/how-do-i-make-a-div-move-up-and-down-when-im-scrolling-the-page
        $(window).scroll(function () {
            $(mapContainer).stop().animate({
                "marginTop": ($(window).scrollTop()) + "px",
                "marginLeft": ($(window).scrollLeft()) + "px"
            }, "slow");
        });
    }

    function addStadiumToMap(data) {
        L.marker([data.lat, data.long]).addTo(map)
            .bindPopup("<h4>" + data.stadion + "</h4><p>" + data.addressStreet + "<br>" + data.addressTown + "</p>");
    }

    function zoomTo(data) {
        map.setView([data.lat, data.long], 15);
    }

    that.init = init;
    that.addStadiumToMap = addStadiumToMap;
    that.zoomTo = zoomTo;
    return that;
});
