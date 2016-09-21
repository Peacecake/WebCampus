Chart.defaults.global.defaultFontSize = 20;

var totaldata= JSON.parse(document.getElementById("data").innerHTML);
var spielTage=[];
for (var i =0; i<totaldata[0].test1516.length;i++){
  spielTage[i]=i+1;
}

var data = {
    labels: spielTage,
    datasets: [
        {
            label: "Saison 1516",
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
        },

        {
          label: "Saison 1415",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ffffff",
          borderColor: "rgba(139, 0, 0,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(139, 0, 0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(139, 0, 0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          data: totaldata[1].test1415
        },
        {
          label: "Saison 1314",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ffffff",
          borderColor: "rgba(255,255,0,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255,255,0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totaldata[2].test1314
        },
        {
          label: "Saison 1213",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ffffff",
          borderColor: "rgba(255,0,255,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255,0,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,0,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totaldata[3].test1213
        },
        {
          label: "Saison 1112",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#ffffff",
          borderColor: "rgba(128,0,255,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(128,0,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(128,0,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totaldata[4].test1112
        }


    ]
};
var ctx = document.getElementById("LineChart");

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    defaultFontSize: 2100,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 1,
                    callback: function(value, index, values) {
                      if(value === 0) return "N";
                      if(value === 1) return "U";
                      if(value === 2) return "S";
                }
              }
            }]
        }
    }

});

//Pie_Chart

var numWin = 0;
var numDraw =0;
var numLost =0;

for (var i=0; i<totaldata[0].test1516.length;i++){
  if(totaldata[0].test1516[i]==2){
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
