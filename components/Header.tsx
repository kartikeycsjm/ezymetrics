import { Menu } from 'lucide-react'

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">EzyMetrics</h1>
      <button onClick={toggleSidebar} className="lg:hidden">
        <Menu size={24} />
      </button>
    </header>
  )
}