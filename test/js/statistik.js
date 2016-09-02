
var totaldata= JSON.parse(document.getElementById("data").innerHTML);
var spielTage=[];
for (var i =0; i<totaldata[0].test1516.length;i++){
  spielTage[i]=i+1;
}

var data = {
    labels: spielTage,
    datasets: [
        {
            label: "Punkte:",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#ffffff",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: totaldata[0].test1516
        }
    ]
};
var ctx = document.getElementById("LineChart");

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data

});

//Pie_Chart

var numWin = 0;
var numDraw =0;
var numLost =0;

for (var i=0; i<totaldata[0].test1516.length;i++){
  if(totaldata[0].test1516[i]==3){
    numWin++;
  }
  if(totaldata[0].test1516[i]==1){
    numDraw++;
  }
  if(totaldata[0].test1516[i]==0){
    numLost++;
  }
}
console.log(numWin);
var piedata = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin,numDraw,numLost],
            backgroundColor: [
                "#FFCE56",
                "#36A2EB",
                "#FF6384"
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "#36A2EB",
              "#FF6384"
            ]
        }]
};
var piectx = document.getElementById("Pie1516");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata
});
