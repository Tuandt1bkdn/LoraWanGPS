import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ data, label }) {
  return (
    <div style={{ width: "700px", height: "400px" }}>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: "Temparature",
              data: data,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
