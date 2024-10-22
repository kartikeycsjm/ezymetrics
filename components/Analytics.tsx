export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Monthly Performance</h2>
        <div className="h-64 flex items-end space-x-2">
          {[12, 19, 3, 5, 2, 3].map((value, index) => (
            <div
              key={index}
              className="bg-blue-500 w-1/6"
              style={{ height: `${value * 3}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Conversion Rate Trend</h2>
        <svg viewBox="0 0 100 50" className="w-full h-64">
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="0,45 25,40 50,30 75,20 100,10"
          />
        </svg>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  )
}