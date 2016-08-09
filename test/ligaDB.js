$.getJSON("http://www.openligadb.de/api/getmatchdata/bl1/2014/15", function(json){
    console.log(json[2].Team1.TeamName);
})
