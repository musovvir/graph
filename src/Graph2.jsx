import React from "react";
import { Bar } from "react-chartjs-2";

function Graph2() {
  const data = {
    labels: [
      "Пешеходько Альберт Иванов",
      "Пешеходько Альберт Иванов",
      "Пешеходько Альберт Иванов",
    ],
    datasets: [
      {
        label: "",
        data: [5, 1, 2],
        borderColor: "blue",
        backgroundColor: "blue",
        stack: "combined",
        type: "bar",
        maxBarThickness: 200,
      },
      {
        label: "",
        data: [5, 1, 3],
        borderColor: "green",
        backgroundColor: "green",
        stack: "combined",
        maxBarThickness: 200,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Chart.js Stacked Line/Bar Chart",
        },
      },
      scales: {
        y: {
          stacked: true,
          height: 1000,
        },
      },
    },
  };
  return (
    <div>
      <Bar type={"line"} height={250} width={500} data={data} config={config} />
    </div>
  );
}

export default Graph2;
