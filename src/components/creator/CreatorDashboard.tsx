import React from 'react';
import {
  BookOpen,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Clock,
  Award,
  ArrowUp,
  ArrowDown,
  MoreVertical
} from 'lucide-react';

const CreatorDashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹1,25,450',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Total Students',
      value: '847',
      change: '+8.2%',
      isPositive: true,
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Active Courses',
      value: '12',
      change: '+2',
      isPositive: true,
      icon: BookOpen,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Avg. Rating',
      value: '4.8',
      change: '-0.1',
      isPositive: false,
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      students: 234,
      revenue: '₹45,600',
      views: 1234,
      rating: 4.9,
      status: 'published'
    },
    {
      id: 2,
      title: 'Advanced React & TypeScript',
      students: 189,
      revenue: '₹38,900',
      views: 987,
      rating: 4.7,
      status: 'published'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      students: 156,
      revenue: '₹31,200',
      views: 756,
      rating: 4.8,
      status: 'published'
    },
    {
      id: 4,
      title: 'Digital Marketing Masterclass',
      students: 98,
      revenue: '₹19,600',
      views: 543,
      rating: 4.6,
      status: 'draft'
    }
  ];

  const recentEnrollments = [
    {
      id: 1,
      student: 'Rahul Kumar',
      course: 'Complete Web Development',
      date: '2 hours ago',
      amount: '₹1,999'
    },
    {
      id: 2,
      student: 'Priya Sharma',
      course: 'Advanced React',
      date: '5 hours ago',
      amount: '₹2,499'
    },
    {
      id: 3,
      student: 'Amit Patel',
      course: 'Data Science',
      date: '1 day ago',
      amount: '₹1,799'
    },
    {
      id: 4,
      student: 'Sneha Reddy',
      course: 'Digital Marketing',
      date: '1 day ago',
      amount: '₹1,499'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Creator Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your courses.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Your Courses</h2>
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          course.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {course.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{course.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{course.revenue}</p>
                      <p className="text-xs text-gray-500">Total revenue</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Enrollments</h2>
            </div>
            <div className="space-y-4">
              {recentEnrollments.map((enrollment) => (
                <div key={enrollment.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{enrollment.student}</h4>
                      <p className="text-xs text-gray-600">{enrollment.course}</p>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{enrollment.amount}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {enrollment.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">This Month</span>
                <span className="text-xl font-bold text-gray-900">₹45,250</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Last Month</p>
                  <p className="text-lg font-bold text-gray-900">₹40,200</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Growth</p>
                  <p className="text-lg font-bold text-green-600">+12.5%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg. Course Rating</p>
                    <p className="text-lg font-bold text-gray-900">4.8/5.0</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Completion Rate</p>
                    <p className="text-lg font-bold text-gray-900">68%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Views</p>
                    <p className="text-lg font-bold text-gray-900">12,543</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
