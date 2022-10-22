var xValues = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];
var yValues = [17.45, 34.91,52.36, 31.07, 23.39,43.28,25.48];
var barColors = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});