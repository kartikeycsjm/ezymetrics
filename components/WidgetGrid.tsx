'use client'

import { useEffect, useState } from 'react'
import Widget from './Widget'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title)

const widgets = [
  { id: 1, type: 'leadCount', title: 'Total Leads' },
  { id: 2, type: 'conversionRate', title: 'Conversion Rate' },
  { id: 3, type: 'revenue', title: 'Revenue' },
  { id: 4, type: 'leadSources', title: 'Lead Sources' },
  { id: 5, type: 'salesTrend', title: 'Sales Trend' },
]

export default function WidgetGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {widgets.map((widget) => (
        <Widget key={widget.id} {...widget} />
      ))}
    </div>
  )
}