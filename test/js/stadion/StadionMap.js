$(document).ready(function(){
    var map, mapContainer;

    mapContainer = document.getElementById("map");

    map = L.map("map");
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'peacecake.0felhajf',
        accessToken: 'pk.eyJ1IjoicGVhY2VjYWtlIiwiYSI6ImNpcHF2ajdvYzAwNzBpOW5ibWJ2MGJnbXMifQ.KojxmZe0C7bRnyQ5nwxIPw'
    }).addTo(map);

    map.setView([48.990421, 12.106993], 14);
    L.marker([48.990421, 12.106993]).addTo(map);

});
