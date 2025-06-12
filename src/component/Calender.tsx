import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 7)); // August 2023
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const getDaysInMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };
  
  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction));
  };
  
  const calendarDays = getDaysInMonth(currentDate);

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <button 
          onClick={() => navigateMonth(-1)}
          className="p-1 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 text-center">
          <span className="hidden sm:inline">{months[currentDate.getMonth()]}, {currentDate.getFullYear()}</span>
          <span className="sm:hidden">{months[currentDate.getMonth()].slice(0, 3)} {currentDate.getFullYear()}</span>
        </h3>
        <button 
          onClick={() => navigateMonth(1)}
          className="p-1 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map(day => (
          <div key={day} className="text-center py-1 sm:py-2 text-xs sm:text-sm font-medium text-slate-600">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          const isCurrentMonth = day.getMonth() === currentDate.getMonth();
          const isToday = day.getDate() === 17 && isCurrentMonth; // Highlighting 17th as shown in design
          
          return (
            <button
              key={index}
              className={`
                aspect-square flex items-center justify-center text-xs sm:text-sm rounded-lg transition-all duration-200 min-h-[32px] sm:min-h-[36px]
                ${isCurrentMonth ? 'text-slate-800' : 'text-slate-400'}
                ${isToday ? 'bg-lime-400 text-slate-800 font-bold' : 'hover:bg-white/20'}
              `}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;