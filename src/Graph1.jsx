import React from "react";
import { Bar } from "react-chartjs-2";

function Graph1() {
  const data = {
    height: 1000,
    type: "bar",
    labels: ["", "", "", ""],
    datasets: [
      {
        data: [0, 15000, 25000, 15000],
        label: "1",
        backgroundColor: ["red"],
        maxBarThickness: 100,
      },
      {
        data: [15000, 6000, 12000, 6000],
        label: "2",
        backgroundColor: ["green"],
        maxBarThickness: 100,
      },
      {
        data: [6000, 20000, 40000],
        label: "3",
        backgroundColor: ["blue"],
        maxBarThickness: 100,
      },
    ],
  };
  const options = {
    type: "bar",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
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
