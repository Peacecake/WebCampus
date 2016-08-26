
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
            backgroundColor: "rgba(75,192,192,0.4)",
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
var ctx = document.getElementById("myChart");

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data

});
