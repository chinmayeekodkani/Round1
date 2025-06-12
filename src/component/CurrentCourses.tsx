import React from 'react';
import { Plus } from 'lucide-react';

const CurrentCourses: React.FC = () => {
  const courses = [
    {
      title: '3D Design Course',
      instructor: 'Micheal Andrew',
      timeRemaining: '8h 45 min',
      progress: 45,
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-200',
      icon: '🎨'
    },
    {
      title: 'Development Basics',
      instructor: 'Natalia Varman',
      timeRemaining: '18h 12 min',
      progress: 75,
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-200',
      icon: '💻'
    },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800">Course You're Taking</h3>
        </div>
        <div className="flex items-center space-x-2">
          <select className="bg-white/20 border border-white/20 rounded-lg px-3 py-1 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50">
            <option>Active</option>
            <option>Completed</option>
            <option>Paused</option>
          </select>
          <button className="w-7 h-7 sm:w-8 sm:h-8 bg-lime-400 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-slate-800" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className={`${course.bgColor} rounded-xl p-4`}>
            <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 mb-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${course.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <span className="text-lg sm:text-xl">{course.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">{course.title}</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-slate-600 truncate">{course.instructor}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xs text-slate-600 block">Remaining</span>
                <p className="font-semibold text-slate-800 text-xs sm:text-sm">{course.timeRemaining}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-base sm:text-lg font-bold text-slate-800 flex-shrink-0">{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;