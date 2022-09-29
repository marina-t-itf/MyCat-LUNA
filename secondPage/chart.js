let xValues = ["somn", "joaca", "doresc plic", "imi trezesc stapanii", "sunt cuminte"];
let yValues = [50, 20, 15, 12, 3];
let barColors = [
  "#2a6e28",
  "#eeb414",
  "#209e1b",
  "#ce8600",
  "#0a4d1a"
];

new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
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
