'use client'

import { Pie, Line } from 'react-chartjs-2'

export default function Widget({ type, title }) {
  const renderContent = () => {
    switch (type) {
      case 'leadCount':
        return <div className="text-4xl font-bold">1,234</div>
      case 'conversionRate':
        return <div className="text-4xl font-bold">12.3%</div>
      case 'revenue':
        return <div className="text-4xl font-bold">$45,678</div>
      case 'leadSources':
        return (
          <Pie
            data={{
              labels: ['Organic', 'Paid', 'Referral'],
              datasets: [
                {
                  data: [300, 150, 100],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
          />
        )
      case 'salesTrend':
        return (
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  label: 'Sales',
                  data: [12, 19, 3, 5, 2, 3],
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        )
      default:
        return <div>No data</div>
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {renderContent()}
    </div>
  )
}