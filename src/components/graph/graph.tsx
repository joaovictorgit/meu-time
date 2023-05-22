import { useState } from "react";
import Chart from "react-apexcharts";
import "./graph-style.css";

const Graph = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "bar",
    },
    xaxis: {
      categories: [
        "0-15",
        "16-30",
        "31-45",
        "46-60",
        "61-75",
        "76-90",
        "91-105",
        "106-120",
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series",
      data: [6, 3, 7, 9, 3, 5, 3, 0],
    },
  ]);
  return (
    <div className="container-graph">
      <label className="text-graph">Gráfico de gols marcados por tempo</label>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="bar" width="500" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Graph;
