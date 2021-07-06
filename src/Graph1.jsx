import React from "react";
import { Bar } from "react-chartjs-2";

function Graph1() {
  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        data: [0, 20000, 20000, 5000],
        label: "1",
        backgroundColor: ["red"],
        maxBarThickness: 100,
      },
      {
        data: [40000, 20000, 10000, 5000],
        label: "2",
        backgroundColor: ["green"],
        maxBarThickness: 100,
      },
      {
        data: [40000, 20000, 20000],
        label: "3",
        backgroundColor: ["blue"],
        maxBarThickness: 100,
      },
    ],
  };
  const options = {
    type: "line",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Финансовый отчёт",
      },
    },
    scales: {
      y: {
        title: {
          stacked: true,
        },
      },
    },
  };
  return (
    <div>
      <Bar height={250} width={500} data={data} options={options} />
    </div>
  );
}

export default Graph1;
