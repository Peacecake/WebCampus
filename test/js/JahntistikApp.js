var App = App || {};
App.JahntistikApp = (function () {
    var that = {},
        db,
        map,
        listView,
        additionalData;

    function init() {
        additionalData = JSON.parse(document.querySelector("#additionalDataJSON").innerHTML);

        db = (new App.LigaDBController()).init();
        db.addEventListener("matchDataAvailable", onMatchDataAvailable);

        listView = (new App.OpponentsListView({
            data: additionalData,
            list: document.querySelector(".teamsList"),
            template: document.querySelector("#listEntry").innerHTML
        })).init();

        map = (new App.MapController({
            mapContainer: document.querySelector(".mapContainer"),
            overviewMap: document.getElementById("map")
        })).init();

        listView.update();
        listView.handleClick();
        listView.addEventListener("listItemClicked", onListItemClicked);
        addMarkersToMap();
    }

    function onMatchDataAvailable(e) {
        var i, matchData = e.data;
        for (i = 0; i < matchData.length; i++) {
            listView.writeResultScore(matchData[i]);
        }
    }

    function onListItemClicked(event) {
        map.zoomTo(event.data);
    }

    function addMarkersToMap() {
        var i;
        for (i = 0; i < additionalData.length; i++) {
            map.addStadiumToMap(additionalData[i]);
        }
    }

    that.init = init;
    return that;
}());
