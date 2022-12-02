import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ data }) {
  return (
    <div style={{ width: "700px", height: "400px" }}>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
