var App = App || {};
App.OpponentsListView = (function (options) {
    var that = {},
        list,
        data,
        template,
        bindingFunction;

    function init() {
        list = options.list;
        data = options.data;
        template = options.template;

        bindingFunction = _.template(template);

        return that;
    }

    function update() {
        clearList();
        fillList();
    }

    function clearList() {
        while(list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
    }

    function fillList() {
        var i, tmpElement, listEntry, teamLogo;
        for(i = 0; i < data.length; i++) {
            listEntry = bindingFunction(data[i]);
            tmpElement = document.createElement("div");
            tmpElement.innerHTML = listEntry;

            teamLogo = tmpElement.querySelector(".teamLogo");
            teamLogo.style.backgroundImage = "url(" + data[i].logoPath + ")";

            list.appendChild(tmpElement.children[0]);
        }
    }

    that.init = init;
    that.update = update;
    return that;
});
