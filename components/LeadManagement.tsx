const dummyLeads = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Qualified' },
]

export default function LeadManagement() {
  return (
    <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Lead Management</h2>
      <table className="w-full min-w-[500px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyLeads.map((lead) => (
            <tr key={lead.id} className="border-b">
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.email}</td>
              <td className="p-2">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}