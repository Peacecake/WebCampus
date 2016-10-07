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
            if (!$(e.target).is("a") && !$(e.target).is(".expandButton")) {
                data.lat = $(this).attr("lat"),
                    data.long = $(this).attr("long");
                that.notifyAll("listItemClicked", data);
            }
        });
    }

    function update() {
        clearList();
        fillList();
        fadeIn();
    }

    function writeResultScore(data) {
        var i, entryID, score, score2, listEntries = list.getElementsByTagName("li");
        for (i = 0; i < listEntries.length; i++) {
            entryID = parseInt(listEntries[i].getAttribute("teamid"));
            if (entryID === data.TeamId) {
                score = listEntries[i].querySelector(".score p"),
                    score2 = listEntries[i].querySelector(".score2 p");

                if (data.finished) {
                    score.innerHTML = "" + data.scoreOne + " : " + data.scoreTwo + "";
                }
                if (data.secondFinished) {
                    score2.innerHTML = "" + data.secondScoreOne + " : " + data.secondScoreTwo + "";
                }
            }
        }
    }

    function clearList() {
        while (list.hasChildNodes()) {
            list.removeChild(list.childNodes[0]);
        }
    }

    function fillList() {
        var i, tmpElement, listEntry, teamLogo, expandButton, teamsStats;
        for (i = 0; i < data.length; i++) {
            listEntry = bindingFunction(data[i]);
            tmpElement = document.createElement("div");
            tmpElement.innerHTML = listEntry;

            teamLogo = tmpElement.querySelector(".teamLogo");
            teamLogo.style.backgroundImage = "url(" + data[i].logoPath + ")";

            expandButton = tmpElement.querySelector(".expandButton");
            $(expandButton).click(function (e) {
                $(this).toggleClass("clickedExpandButton");
                teamStats = $(this).parent().parent().next().get(0);

                teamStats.classList.toggle("hidden");
                setTimeout(function () {
                    teamStats.classList.toggle("shown");
                }, 200);
            });

            list.appendChild(tmpElement.children[0]);
        }
    }

    function fadeIn() {
        $(".teamInfo").each(function (i) {
            setTimeout(function () {
                $(".teamInfo").eq(i).addClass("isVisible");
            }, 300 * i);

        });
    }

    that.init = init;
    that.update = update;
    that.handleClick = handleClick;
    that.writeResultScore = writeResultScore;
    return that;
});
