import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Layout,
  Plus,
  Bell,
  Search,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import CreatorDashboard from './CreatorDashboard';
import EnrolledUsers from './EnrolledUsers';
import LandingPageBuilder from './LandingPageBuilder';
import CreatorSettings from './CreatorSettings';
import CourseCreationModal from './CourseCreationModal';

type PageType = 'dashboard' | 'courses' | 'students' | 'analytics' | 'pages' | 'settings';

const CreatorApp = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'pages', label: 'Landing Pages', icon: Layout },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleSaveCourse = (courseData: any) => {
    console.log('Course data:', courseData);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <CreatorDashboard />;
      case 'students':
        return <EnrolledUsers />;
      case 'pages':
        return <LandingPageBuilder />;
      case 'settings':
        return <CreatorSettings />;
      case 'courses':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
                  <p className="text-gray-600">Create and manage your courses</p>
                </div>
                <button
                  onClick={() => setIsCourseModalOpen(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create Course</span>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-orange-600" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Title {i}</h3>
                      <p className="text-sm text-gray-600 mb-4">Brief description of the course content...</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">50 students</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Published
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
                <p className="text-gray-600">Track your performance and insights</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Coming Soon</h3>
                  <p className="text-gray-600">Detailed analytics and insights will be available here</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <CreatorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:block text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">ShikshaFlow Creator</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
              />
            </div>
            <button className="relative text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-semibold text-sm">
                AK
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed top-16 left-0 bottom-0 bg-white border-r border-gray-200 z-30 transition-all duration-300 hidden lg:block ${isSidebarOpen ? 'w-64' : 'w-0'}`}>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as PageType)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as PageType);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <div className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}`}>
        {renderPage()}
      </div>

      <CourseCreationModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        onSave={handleSaveCourse}
      />
    </div>
  );
};

export default CreatorApp;
