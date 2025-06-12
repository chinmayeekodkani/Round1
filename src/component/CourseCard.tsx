import React from 'react';
import { Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  lessons: number;
  rating: number;
  type: string;
  bgColor: string;
  iconBg: string;
  icon: React.ReactNode;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  lessons,
  rating,
  type,
  bgColor,
  iconBg,
  icon
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl w-full`}>
      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${iconBg} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 line-clamp-2">{title}</h3>
      <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">{lessons} Lessons</p>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-1">
          <span className="text-xs sm:text-sm font-medium text-slate-700">Rate</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-slate-800 text-sm sm:text-base">{rating}</span>
        </div>
      </div>
      
      <div className="pt-3 border-t border-white/30">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-slate-600">Type</span>
          <span className="text-xs sm:text-sm font-medium text-slate-800 text-right">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;