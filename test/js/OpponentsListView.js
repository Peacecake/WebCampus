var App = App || {};
App.OpponentsListView = (function (options) {
    var that = new EventPublisher(),
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

    function handleClick() {
        var data = {};
        $("ul.teamsList li").click(function (e) {
            if(!$(e.target).is("a")) {
                data.lat = $(this).attr("lat"),
                data.long = $(this).attr("long");
                that.notifyAll("listItemClicked", data);
            }
        });
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
        var i, tmpElement, listEntry, teamLogo, expandButton, fadeTime = 100;
        for(i = 0; i < data.length; i++) {
            listEntry = bindingFunction(data[i]);
            tmpElement = document.createElement("div");
            tmpElement.innerHTML = listEntry;

            teamLogo = tmpElement.querySelector(".teamLogo");
            teamLogo.style.backgroundImage = "url(" + data[i].logoPath + ")";

            expandButton = tmpElement.querySelector(".expandButton");
            expandButton.addEventListener("click", onExpandClick);

            $(tmpElement.children[0]).hide().appendTo(list).fadeIn(fadeTime);
            fadeTime = fadeTime + 500;
        }
    }

    function onExpandClick(event) {
        var thisButton = event.target;
        thisButton.classList.toggle("clickedExpandButton");
        console.log(event.target);
    }

    that.init = init;
    that.update = update;
    that.handleClick = handleClick;
    return that;
});
