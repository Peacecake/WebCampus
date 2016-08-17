$(document).ready(function() {
    var regMatchData = {}, opponentsTeamData = {};
    $.getJSON("http://www.openligadb.de/api/getmatchdata/bl3/2016", onMatchDataRetrieved);

    function onMatchDataRetrieved(allMatchData){
        regMatchData = getRegMatchData(allMatchData);
        opponentsTeamData = getOpponentsTeamData(regMatchData);
        //console.log(regMatchData);
        console.log(opponentsTeamData);
        var listEntry = document.querySelector(".teamsListEntry");
        var info = getMatchById(listEntry.getAttribute("MatchID"));
        var teamLogo = document.querySelector(".teamsListEntry .teamLogo");
        teamLogo.style.backgroundImage = "url(" + info.opponent.TeamIconUrl +")";
        console.log(info);
    }

    function getMatchById(id) {
        var i, match, team1Name, team2Name;
        id = parseInt(id);
        for(i = 0; i < regMatchData.length; i++) {
            if(regMatchData[i].MatchID === id) {
                match = regMatchData[i];
                team1Name = regMatchData[i].Team1.TeamName,
                team2Name = regMatchData[i].Team2.TeamName;
                if(!team1Name.includes("Regensburg")) {
                    match.opponent = regMatchData[i].Team1;
                }
                if(!team2Name.includes("Regensburg")) {
                    match.opponent = regMatchData[i].Team2;
                }
                break;
            }
        }
        return match;
    }

    function getRegMatchData(json) {
        var i, newIndex = 0, Team1, Team2, result = [];
        for(i = 0; i < json.length; i++) {
            Team1 = json[i].Team1.TeamName, Team2 = json[i].Team2.TeamName;
            if(Team1.includes("Regensburg")||Team2.includes("Regensburg")) {
                result[newIndex] = json[i];
                newIndex++;
            }
        }
        return result;
    }

    function getOpponentsTeamData(json) {
        var i, Team1, Team2, result = [], newIndex = 0;
        for(i = 0; i < json.length; i++) {
            Team1 = json[i].Team1.TeamName, Team2 = json[i].Team2.TeamName;
            if(!Team1.includes("Regensburg")) {
                result[newIndex] = json[i].Team1;
                result[newIndex].MatchID = json[i].MatchID;
                newIndex++;
            }
            if(!Team2.includes("Regensburg")) {
                result[newIndex] = json[i].Team2;
                result[newIndex].MatchID = json[i].MatchID;
                newIndex++;
            }

        }

        return result;
    }

});
