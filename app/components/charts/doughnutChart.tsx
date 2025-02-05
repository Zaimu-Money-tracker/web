import { Chart, Tooltip, Legend, ArcElement, ChartOptions } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Category from "~/interfaces/entities/category.interface";
import FormatNumber from "~/utils/formatNumber";

Chart.register(Tooltip, Legend, ArcElement);

export default function DoughnutChart({
  data,
  incomes,
  expenses,
  total,
}: {
  data: Category[];
  incomes: number;
  expenses: number;
  total: { [key: string]: number } | undefined;
}) {
  const [labels, setLabels] = useState<string[]>([]);
  const [info, setInfo] = useState<string[]>([]);
  const [bgColors, setBgColors] = useState<string[]>([]);

  useEffect(() => {
    setLabels([
      ...data
        .filter((data) => total && total[data._id || 0])
        .map((data) => data.name),
      "Remaining incomes",
    ]);

    setBgColors([
      ...data
        .filter((data) => total && total[data._id || 0])
        .map((data) => data.color),
      "#D094FF",
    ]);

    setInfo([
      ...data
        .filter((data) => total && total[data._id || 0])
        .map((data) =>
          FormatNumber(
            parseFloat(
              total ? ((total[data._id || 0] / incomes) * 100).toString() : "0"
            )
          )
        ),
      FormatNumber(((incomes - expenses) / incomes) * 100),
    ]);
  }, [data, total, incomes, expenses]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: info,
        backgroundColor: bgColors,
        borderColor: "#fff",
        borderWidth: 4,
        borderRadius: 8,
        hoverOffset: 16,
        hoverBorderColor: "#fff",
      },
    ],
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    layout: {
      padding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 50,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "Glory",
            size: 18,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 20,
          boxHeight: 20,
        },
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: () => [],
          label: (tooltipItem) => {
            const value = String(tooltipItem.raw || "");
            return `${value}%`;
          },
        },
        backgroundColor: "#222222d9",
      },
    },
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-150 w-full justify-center items-center">
        <Doughnut id="1" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
