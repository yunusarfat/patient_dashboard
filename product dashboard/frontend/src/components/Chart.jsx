// src/components/Chart.jsx
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ selected }) => {
  const [chartData, setChartData] = useState(null);
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    if (!selected) return;

    const history = selected.diagnosis_history;

    // Extract labels and values from this patient's history
    const labels = history.map((h) => `${h.month}, ${h.year}`);
    const systolicValues = history.map((h) => h.blood_pressure.systolic.value);
    const diastolicValues = history.map(
      (h) => h.blood_pressure.diastolic.value
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicValues,
          borderColor: "rgb(236, 72, 153)",
          backgroundColor: "rgba(236, 72, 153, 0.2)",
          pointBackgroundColor: "rgb(236, 72, 153)",
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: diastolicValues,
          borderColor: "rgb(139, 92, 246)",
          backgroundColor: "rgba(139, 92, 246, 0.2)",
          pointBackgroundColor: "rgb(139, 92, 246)",
          tension: 0.4,
        },
      ],
    });

    setLatest(history[history.length - 1]);
  }, [selected]); // 🔥 runs again whenever patient changes

  if (!chartData || !latest) return <p>Loading chart...</p>;

  return (
    <div className="bg-[#F4F0FE] shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Blood Pressure</h2>
        <span className="text-sm text-gray-500">Last 6 months ⌄</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Chart */}
        <div className="col-span-2">
          <Line data={chartData} />
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Systolic */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-pink-500"></span>
              <span className="text-pink-600 font-semibold">Systolic</span>
            </div>
            <p className="text-2xl font-bold">
              {latest.blood_pressure.systolic.value}
            </p>
            <p className="text-sm text-gray-500">
              {latest.blood_pressure.systolic.levels}
            </p>
          </div>

          {/* Diastolic */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-purple-500"></span>
              <span className="text-purple-600 font-semibold">Diastolic</span>
            </div>
            <p className="text-2xl font-bold">
              {latest.blood_pressure.diastolic.value}
            </p>
            <p className="text-sm text-gray-500">
              {latest.blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
