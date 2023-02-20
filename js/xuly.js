$(document).ready(function () {
  var ctx = $("#chart-line");
  var myLineChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Công việc", "Đang làm", "Hoàn thành"],
      datasets: [
        {
          data: [80, 15, 5],
          backgroundColor: [
            "rgba(255, 0, 0, 0.5)",
            "rgba(100, 255, 0, 0.5)",
            "rgba(200, 50, 255, 0.5)",
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Tiến độ công việc",
      },
    },
  });
});
