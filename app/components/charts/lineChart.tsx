import {
  Chart,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartOptions,
  Filler,
  ScriptableContext,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Months } from "~/data/zaimu/months.data";
import Transaction from "~/interfaces/entities/transaction.interface";
import { getExpenses } from "~/services/zaimu/entities/transactions";
import FormatNumber from "~/utils/formatNumber";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
  const [expenses, setExpenses] = useState<Transaction[]>([]);

  const handleGetExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    handleGetExpenses();
  }, []);

  const getMonthlyExpenses = () => {
    const monthlyExpenses = Array(12).fill(0);
    expenses.forEach((expense) => {
      const month = new Date(expense.createdAt).getMonth();
      monthlyExpenses[month] += expense.amount;
    });
    return monthlyExpenses;
  };

  const chartData = {
    labels: Months,
    datasets: [
      {
        label: "Monthly Expenses",
        data: getMonthlyExpenses(),
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return undefined;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0.2, "#ff8d3559");
          gradient.addColorStop(1, "#ffca3500");
          return gradient;
        },
        borderColor: "#ff8d35",
        borderWidth: 4,
        tension: 0.4,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 3,
        pointHoverBorderColor: "#fff",
        pointBorderWidth: 3,
        pointBackgroundColor: "#ff8d35",
        pointBorderColor: "#fff",
        fill: "start",
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          padding: 10,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 20,
          boxHeight: 20,
        },
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => {
            if (tooltipItems.length > 0) {
              const item = tooltipItems[0];
              return Months[item.dataIndex];
            }
            return "";
          },
          label: (tooltipItem) => {
            const value = String(tooltipItem.raw || "");
            return `$${FormatNumber(parseFloat(value) || 0)}`;
          },
        },
        backgroundColor: "#222222c9",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full justify-center items-center p-4">
        <Line id="1" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
