import React from 'react';
import { Plus } from 'lucide-react';

const Assignments: React.FC = () => {
  const assignments = [
    {
      title: 'Methods of data',
      date: '02 July, 10:30 AM',
      status: 'In progress',
      statusColor: 'bg-blue-100 text-blue-700',
      icon: '👥'
    },
    {
      title: 'Market Research',
      date: '14 June, 12:45 AM',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      icon: '©️'
    },
    {
      title: 'Data Collection',
      date: '12 May, 11:00 AM',
      status: 'Upcoming',
      statusColor: 'bg-orange-100 text-orange-700',
      icon: '💎'
    },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">Assignments</h3>
        <button className="w-7 h-7 sm:w-8 sm:h-8 bg-lime-400 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors">
          <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-slate-800" />
        </button>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-base sm:text-lg">{assignment.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">{assignment.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 truncate">{assignment.date}</p>
            </div>
            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${assignment.statusColor} whitespace-nowrap`}>
              {assignment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;