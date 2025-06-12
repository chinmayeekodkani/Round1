import { useState, useEffect } from 'react';
import { PenTool, Users, Camera } from 'lucide-react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import CourseCard from './component/CourseCard';
import ActivityChart from './component/ActivityChart';
import DailySchedule from './component/DailySchedule';
import Calendar from './component/Calender';
import Assignments from './component/Assignments';
import CurrentCourses from './component/CurrentCourses';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const newCourses = [
    {
      title: 'Content Writing',
      lessons: 12,
      rating: 4.8,
      type: 'Data Research',
      bgColor: 'bg-orange-100',
      iconBg: 'bg-orange-200',
      icon: <PenTool className="w-6 h-6 text-orange-700" />
    },
    {
      title: 'Usability Testing',
      lessons: 15,
      rating: 5.0,
      type: 'UI/UX Design',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-200',
      icon: <Users className="w-6 h-6 text-green-700" />
    },
    {
      title: 'Photography',
      lessons: 8,
      rating: 4.6,
      type: 'Art and Design',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-200',
      icon: <Camera className="w-6 h-6 text-blue-700" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100">
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {!isSidebarCollapsed && isMobile && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setIsSidebarCollapsed(true)} 
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out
          ${isSidebarCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-20' : 'translate-x-0 lg:w-64'}
          ${isMobile ? 'w-64' : ''}
        `}>
          <Sidebar 
            activeItem={activeItem} 
            onItemClick={setActiveItem}
            isCollapsed={!isMobile && isSidebarCollapsed}
          />
        </div>

        {/* Main Content */}
        <div className={`
          flex-1 transition-all duration-300 ease-in-out`}>
          <Header 
            isCollapsed={isSidebarCollapsed}
            onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            isMobile={isMobile}
          />
          
          <main className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
            {/* New Courses Section */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">New Courses</h2>
                <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors self-start sm:self-auto">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {newCourses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </section>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Column - Main Content */}
              <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <ActivityChart />
                  </div>
                  <div className="lg:col-span-2">
                    <CurrentCourses />
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                  <Calendar />
                  <DailySchedule />
                </div>
                <Assignments />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;