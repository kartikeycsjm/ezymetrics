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
          <svg viewBox="0 0 100 100" className="w-full h-40">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e0e0e0" strokeWidth="20" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="188.5 251.3" />
            <text x="50" y="50" textAnchor="middle" dy=".3em" className="text-xl font-bold">75%</text>
          </svg>
        )
      case 'salesTrend':
        return (
          <svg viewBox="0 0 100 50" className="w-full h-40">
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              points="0,50 20,30 40,35 60,15 80,25 100,10"
            />
          </svg>
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