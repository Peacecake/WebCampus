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
            borderWidth: 5,
            backgroundColor: "#ffffff",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: totaldata[0].test1516

        },

        {
          label: "Saison 1415",
          fill: false,
          lineTension: 0.1,
          borderWidth: 5,
          backgroundColor: "#ffffff",
          borderColor: "rgba(139, 0, 0,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(139, 0, 0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(139, 0, 0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,

          data: totaldata[1].test1415,
          hidden: true
        },
        {
          label: "Saison 1314",
          fill: false,
          lineTension: 0.1,
          borderWidth: 5,
          backgroundColor: "#ffffff",
          borderColor: "rgba(255,255,0,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255,255,0,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,255,0,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: totaldata[2].test1314,
          hidden: true
        },
        {
          label: "Saison 1213",
          fill: false,
          lineTension: 0.1,
          borderWidth: 5,
          backgroundColor: "#ffffff",
          borderColor: "rgba(255,0,255,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255,0,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,0,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: totaldata[3].test1213,
          hidden: true
        },
        {
          label: "Saison 1112",
          fill: false,
          lineTension: 0.1,
          borderWidth: 5,
          backgroundColor: "#ffffff",
          borderColor: "rgba(128,0,255,1)",
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(128,0,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(128,0,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: totaldata[4].test1112,
          hidden: true
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

var numWin1516 = 0;
var numDraw1516 =0;
var numLost1516 =0;

for (var i=0; i<totaldata[0].test1516.length;i++){
  if(totaldata[0].test1516[i]==2){
    numWin1516++;
  }
  if(totaldata[0].test1516[i]==1){
    numDraw1516++;
  }
  if(totaldata[0].test1516[i]==0){
    numLost1516++;
  }
}
var numWin1415 = 0;
var numDraw1415 =0;
var numLost1415 =0;

for (var i=0; i<totaldata[1].test1415.length;i++){
  if(totaldata[1].test1415[i]==2){
    numWin1415++;
  }
  if(totaldata[1].test1415[i]==1){
    numDraw1415++;
  }
  if(totaldata[1].test1415[i]==0){
    numLost1415++;
  }
}
var numWin1314 = 0;
var numDraw1314 =0;
var numLost1314 =0;

for (var i=0; i<totaldata[2].test1314.length;i++){
  if(totaldata[2].test1314[i]==2){
    numWin1314++;
  }
  if(totaldata[2].test1314[i]==1){
    numDraw1314++;
  }
  if(totaldata[2].test1314[i]==0){
    numLost1314++;
  }
}
var numWin1213 = 0;
var numDraw1213 =0;
var numLost1213 =0;

for (var i=0; i<totaldata[3].test1213.length;i++){
  if(totaldata[3].test1213[i]==2){
    numWin1213++;
  }
  if(totaldata[3].test1213[i]==1){
    numDraw1213++;
  }
  if(totaldata[3].test1213[i]==0){
    numLost1213++;
  }
}

var numWin1112 = 0;
var numDraw1112 =0;
var numLost1112 =0;

for (var i=0; i<totaldata[4].test1112.length;i++){
  if(totaldata[4].test1112[i]==2){
    numWin1112++;
  }
  if(totaldata[4].test1112[i]==1){
    numDraw1112++;
  }
  if(totaldata[4].test1112[i]==0){
    numLost1112++;
  }
}
var piedata1516 = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin1516,numDraw1516,numLost1516],
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
        }


      ]
};
var piectx = document.getElementById("Pie1516");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata1516
});

var piedata1415 = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin1415,numDraw1415,numLost1415],
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
        }


      ]
};
var piectx = document.getElementById("Pie1415");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata1415
});
var piedata1314 = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin1314,numDraw1314,numLost1314],
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
        }


      ]
};
var piectx = document.getElementById("Pie1314");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata1314
});

var piedata1213 = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin1213,numDraw1213,numLost1213],
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
        }


      ]
};
var piectx = document.getElementById("Pie1213");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata1213
});

var piedata1112 = {
    labels: [
        "Sieg",
        "Unentschieden",
        "Niederlage"
    ],
    datasets: [
        {
            data: [numWin1112,numDraw1112,numLost1112],
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
        }


      ]
};
var piectx = document.getElementById("Pie1112");
var myPieChart = new Chart(piectx,{
    type: 'pie',
    data: piedata1112
});
