import React from 'react';
import { Search, Menu, X, Bell } from 'lucide-react';

interface HeaderProps {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
  isMobile?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCollapsed, onToggleSidebar, isMobile = false }) => {
  return (
    <header className="bg-white/20 backdrop-blur-lg border-b border-white/10 p-4 sm:p-6 sticky top-0 z-30">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 truncate">
            <span className="hidden sm:inline">Welcome back Taylor 👋</span>
            <span className="sm:hidden">Dashboard 👋</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          {/* Search - Hidden on mobile, shown on larger screens */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses"
              className="pl-10 pr-4 py-2 w-48 lg:w-64 bg-white/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm text-slate-700 placeholder-slate-500 text-sm"
            />
          </div>
          
          {/* Mobile Search Button */}
          <button className="sm:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Search className="w-5 h-5 text-slate-600" />
          </button>
          
          {/* Notifications - Hidden on mobile */}
          <button className="hidden sm:block p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          
          {/* Profile */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Search Bar - Shown below header on mobile */}
      <div className="sm:hidden mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses"
            className="w-full pl-10 pr-4 py-2 bg-white/30 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent backdrop-blur-sm text-slate-700 placeholder-slate-500 text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;