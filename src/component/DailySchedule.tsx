import React from 'react';
import { ChevronRight } from 'lucide-react';

const DailySchedule: React.FC = () => {
  const scheduleItems = [
    {
      title: 'Design System',
      subtitle: 'Lecture - Class',
      bgColor: 'bg-orange-100',
      iconBg: 'bg-orange-200',
      icon: '🎨'
    },
    {
      title: 'Typography',
      subtitle: 'Group - Test',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-200',
      icon: '📝'
    },
    {
      title: 'Color Style',
      subtitle: 'Group - Test',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-200',
      icon: '🎨'
    },
    {
      title: 'Visual Design',
      subtitle: 'Lecture - Test',
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-200',
      icon: '✨'
    },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20">
      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Daily Schedule</h3>
      
      <div className="space-y-3 sm:space-y-4">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-xl p-3 sm:p-4 flex items-center justify-between hover:scale-102 transition-all duration-200 cursor-pointer`}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-base sm:text-lg">{item.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 truncate">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;