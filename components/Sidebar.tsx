import { X } from 'lucide-react'

interface SidebarProps {
  activeTab: 'dashboard' | 'leads' | 'analytics';
  setActiveTab: (tab: 'dashboard' | 'leads' | 'analytics') => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  const tabs: Array<{ id: 'dashboard' | 'leads' | 'analytics'; label: string }> = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'leads', label: 'Lead Management' },
    { id: 'analytics', label: 'Analytics' },
  ]

  return (
    <aside className={`
      bg-gray-800 text-white w-64 flex-shrink-0
      fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:relative lg:translate-x-0
    `}>
      <div className="flex justify-between items-center p-4 lg:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>
      <nav className="mt-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 w-full text-left ${
              activeTab === tab.id ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
            onClick={() => {
              setActiveTab(tab.id)
              setIsOpen(false)
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}