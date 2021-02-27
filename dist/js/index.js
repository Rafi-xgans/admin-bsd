const statsCtx = document.querySelector("#stats").getContext("2d");
const goalsChartCtx = document.querySelector("#goals-chart").getContext("2d");
new Chart(statsCtx, {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [100, 40, 50, 7, 3],
        backgroundColor: ["transparent"],
        borderColor: ["white"],
        borderWidth: 4,
        lineTension: 0,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
new Chart(goalsChartCtx, {
  type: "pie",
  data: {
    labels: ["70%", "30%"],
    datasets: [
      {
        label: "",
        data: [70, 30],
        backgroundColor: ["#f0555b", "white"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
  },
});
