'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { StakingData } from '../../../config/stakingConfig';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CustomBarChart() {
  const [barThickness, setBarThickness] = useState<number>(30);
  const [showShadow, setShowShadow] = useState<boolean>(true);

  useEffect(() => {
    const updateChartSettings = () => {
      if (window.innerWidth < 768) {
        setBarThickness(12);
        setShowShadow(false);
      } else {
        setBarThickness(30);
        setShowShadow(true);
      }
    };

    updateChartSettings();
    window.addEventListener('resize', updateChartSettings);
    return () => window.removeEventListener('resize', updateChartSettings);
  }, []);

  const data = {
    labels: StakingData.labels,
    datasets: [
      {
        label: 'Months',
        data: StakingData.data,
        backgroundColor: StakingData.background,
        borderColor: StakingData.border,
        borderWidth: 4,
        borderRadius: 3,
      },
    ],
  };

  const boxShadowPlugin = {
    id: 'barBoxShadow',
    beforeDraw: (chart: Chart) => {
      const ctx = chart.ctx;
      const dataset = chart.getDatasetMeta(0);
      dataset.data.forEach((bar) => {
        const props = (bar as any).getProps(['x', 'y', 'width', 'height'], true);
        ctx.save();
        ctx.fillStyle = '#003E58';
        ctx.translate(-4, 4);
        ctx.fillRect(props.x, props.y, props.width, props.height);
        ctx.restore();
      });
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      ...(showShadow ? { barBoxShadow: {} } : {}),
    },
    scales: {
      y: { display: false },
      x: { display: false },
    },
    elements: {
      bar: { borderSkipped: false },
    },
    datasets: {
      bar: { barThickness },
    },
  };

  return (
    <div className="h-[350px] w-full lg:py-8 lg:pr-6 lg:pl-[60px] py-5">
      <Bar data={data} options={options} plugins={showShadow ? [boxShadowPlugin] : []} />
    </div>
  );
}
