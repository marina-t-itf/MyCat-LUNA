let xValues = ["dorm", "ma joc", "doresc plic", "imi trezesc stapanii", "sunt cuminte"];
let yValues = [50, 20, 15, 12, 3];
let barColors = [
  "rgb(9, 61, 121)",
  "rgb(243, 89, 0)",
  "rgb(9, 121, 116)",
  "#ce8600",
  "rgb(35, 121, 9)"
];

new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues ,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Activitatea mea intr-o zi",
      }
    }
  });
