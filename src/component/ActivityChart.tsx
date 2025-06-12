import React from 'react';
import { TrendingUp } from 'lucide-react';

const ActivityChart: React.FC = () => {
  const data = [
    { day: 'Su', hours: 3 },
    { day: 'Mo', hours: 5 },
    { day: 'Tu', hours: 2 },
    { day: 'We', hours: 8 },
    { day: 'Th', hours: 6 },
    { day: 'Fr', hours: 4 },
    { day: 'Sa', hours: 7 },
  ];

  const maxHours = Math.max(...data.map(d => d.hours));

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">Hours Activity</h3>
        <select className="bg-white/20 border border-white/20 rounded-lg px-3 py-1 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-fit">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      
      <div className="flex items-center space-x-2 mb-4 sm:mb-6">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
        <span className="text-green-500 font-semibold text-sm sm:text-base">+3%</span>
        <span className="text-slate-600 text-sm sm:text-base">Increase than last week</span>
      </div>

      <div className="flex items-end justify-between h-24 sm:h-32 space-x-1 sm:space-x-2">
        {data.map((item, index) => (
          <div key={item.day} className="flex-1 flex flex-col items-center max-w-[40px]">
            <div
              className={`w-full rounded-t-lg transition-all duration-500 ${
                index === 3 ? 'bg-lime-400' : 'bg-slate-300'
              }`}
              style={{
                height: `${(item.hours / maxHours) * 100}%`,
                minHeight: '8px'
              }}
            />
            <span className="text-xs text-slate-600 mt-2">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <span className="text-sm text-slate-600">6h 45 min</span>
        <br />
        <span className="text-xs text-slate-500">5 Jan 2023</span>
      </div>
    </div>
  );
};

export default ActivityChart;