'use client'

import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import WidgetGrid from './WidgetGrid'
import LeadManagement from './LeadManagement'
import Analytics from './Analytics'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'leads' | 'analytics'>('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {activeTab === 'dashboard' && <WidgetGrid />}
          {activeTab === 'leads' && <LeadManagement />}
          {activeTab === 'analytics' && <Analytics />}
        </main>
      </div>
    </div>
  )
}