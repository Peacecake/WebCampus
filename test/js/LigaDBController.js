var App = App || {};
App.LigaDBController = (function () {
    var that = new EventPublisher(),
        regensburgMatchData = {},
        opponentsData = {};

    function init() {
        $.getJSON("http://www.openligadb.de/api/getmatchdata/bl3/2016", onMatchDataRetrieved);
        return that;
    }

    function onMatchDataRetrieved(allData) {
        regensburgMatchData = getRegensburgMatchData(allData);
        opponentsData = getOpponentsData(regensburgMatchData);
        opponentsData = getSortedData(opponentsData);
        opponentsData.length = 19;
        that.notifyAll("matchDataAvailable", opponentsData);
    }

    function getRegensburgMatchData(allData) {
        var i, newIndex = 0,
            Team1, Team2, result = [];
        for (i = 0; i < allData.length; i++) {
            Team1 = allData[i].Team1.TeamName, Team2 = allData[i].Team2.TeamName;
            if (Team1.includes("Regensburg") || Team2.includes("Regensburg")) {
                result[newIndex] = allData[i];
                newIndex++;
            }
        }
        return result;
    }

    function getOpponentsData(json) {
        var i, Team1, Team2, result = [],
            newIndex = 0;
        for (i = 0; i < json.length; i++) {
            Team1 = json[i].Team1.TeamName, Team2 = json[i].Team2.TeamName;
            if (!Team1.includes("Regensburg")) {
                result[newIndex] = json[i].Team1;
                result[newIndex].MatchID = json[i].MatchID;
                result[newIndex].finished = json[i].MatchIsFinished;
                if (result[newIndex].finished) {
                    result[newIndex].scoreOne = json[i].MatchResults[1].PointsTeam2;
                    result[newIndex].scoreTwo = json[i].MatchResults[1].PointsTeam1;
                }
                newIndex++;
            }
            if (!Team2.includes("Regensburg")) {
                result[newIndex] = json[i].Team2;
                result[newIndex].MatchID = json[i].MatchID;
                result[newIndex].finished = json[i].MatchIsFinished;
                if (result[newIndex].finished) {
                    result[newIndex].scoreOne = json[i].MatchResults[1].PointsTeam1;
                    result[newIndex].scoreTwo = json[i].MatchResults[1].PointsTeam2;
                }
                newIndex++;
            }
        }
        return result;
    }

    function getSortedData(json) {
        var i, j;
        for (i = 0; i < json.length; i++) {
            for (j = i + 1; j < json.length; j++) {
                if (json[i].TeamId === json[j].TeamId) {
                    json[i].secondFinished = json[j].finished;
                    if (json[i].secondFinished) {
                        json[i].secondScoreOne = json[j].MatchResults[1].PointsTeam1;
                        json[i].secondScoreTwo = json[j].MatchResults[1].PointsTeam2;
                    }
                }
            }
        }
        return json;
    }

    that.init = init;
    return that;
});
