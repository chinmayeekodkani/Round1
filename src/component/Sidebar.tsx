import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Bell, 
  Calendar, 
  Users2, 
  Settings,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick, isCollapsed }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'classes', label: 'My Classes', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: 2 },
    { id: 'calendar', label: 'Calendar\'s', icon: Calendar },
    { id: 'community', label: 'Community', icon: Users2 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`bg-slate-800 text-white h-screen transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16 sm:w-20' : 'w-64'
    } flex flex-col overflow-hidden`}>
      {/* Logo */}
      <div className={`p-4 sm:p-6 border-b border-slate-700 flex-shrink-0 ${isCollapsed ? 'px-2 sm:px-4' : ''}`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold tracking-wide">EDUCO</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-4 sm:pt-6 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`w-full flex items-center px-3 sm:px-6 py-3 text-left transition-all duration-200 hover:bg-slate-700 relative group ${
                  isActive ? 'bg-lime-400 text-slate-800 hover:bg-lime-400' : ''
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 font-medium text-sm sm:text-base">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {isCollapsed && item.badge && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{item.badge}</span>
                  </div>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;