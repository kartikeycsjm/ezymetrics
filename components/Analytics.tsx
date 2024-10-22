'use client'

import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { ChartData, ChartOptions } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export default function Analytics() {
  const monthlyData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 2000, 3000, 15000, 21000, 18000, 23000, 17000, 29000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Leads',
        data: [100, 120, 80, 90, 70, 85, 110, 130, 115, 140, 125, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  }

  const conversionData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Conversion Rate',
        data: [10, 12, 15, 18],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  }

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue and Leads by Month',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weekly Conversion Rate',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%'
          },
        },
      },
    },
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Monthly Performance</h2>
        <Bar data={monthlyData} options={barOptions} />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Conversion Rate Trend</h2>
        <Line data={conversionData} options={lineOptions} />
      </div>
    </div>
  )
}