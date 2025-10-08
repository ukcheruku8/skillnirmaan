import React, { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Mail,
  MoreVertical,
  TrendingUp,
  Clock,
  Award,
  BookOpen,
  CheckCircle,
  XCircle
} from 'lucide-react';

const EnrolledUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: '1', name: 'Complete Web Development' },
    { id: '2', name: 'Advanced React' },
    { id: '3', name: 'Data Science with Python' },
    { id: '4', name: 'Digital Marketing' }
  ];

  const students = [
    {
      id: 1,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      course: 'Complete Web Development',
      enrolledDate: '2024-09-15',
      progress: 75,
      status: 'active',
      lastActive: '2 hours ago',
      completedLessons: 30,
      totalLessons: 40,
      certificateIssued: false
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      course: 'Advanced React',
      enrolledDate: '2024-09-12',
      progress: 100,
      status: 'completed',
      lastActive: '1 day ago',
      completedLessons: 25,
      totalLessons: 25,
      certificateIssued: true
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@email.com',
      course: 'Data Science with Python',
      enrolledDate: '2024-09-10',
      progress: 45,
      status: 'active',
      lastActive: '5 hours ago',
      completedLessons: 18,
      totalLessons: 40,
      certificateIssued: false
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@email.com',
      course: 'Digital Marketing',
      enrolledDate: '2024-09-08',
      progress: 30,
      status: 'active',
      lastActive: '1 day ago',
      completedLessons: 9,
      totalLessons: 30,
      certificateIssued: false
    },
    {
      id: 5,
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      course: 'Complete Web Development',
      enrolledDate: '2024-09-05',
      progress: 100,
      status: 'completed',
      lastActive: '3 days ago',
      completedLessons: 40,
      totalLessons: 40,
      certificateIssued: true
    },
    {
      id: 6,
      name: 'Anjali Verma',
      email: 'anjali.verma@email.com',
      course: 'Advanced React',
      enrolledDate: '2024-09-03',
      progress: 60,
      status: 'active',
      lastActive: '4 hours ago',
      completedLessons: 15,
      totalLessons: 25,
      certificateIssued: false
    },
    {
      id: 7,
      name: 'Karan Mehta',
      email: 'karan.mehta@email.com',
      course: 'Data Science with Python',
      enrolledDate: '2024-08-28',
      progress: 15,
      status: 'inactive',
      lastActive: '2 weeks ago',
      completedLessons: 6,
      totalLessons: 40,
      certificateIssued: false
    },
    {
      id: 8,
      name: 'Pooja Nair',
      email: 'pooja.nair@email.com',
      course: 'Digital Marketing',
      enrolledDate: '2024-08-25',
      progress: 85,
      status: 'active',
      lastActive: '1 hour ago',
      completedLessons: 25,
      totalLessons: 30,
      certificateIssued: false
    }
  ];

  const stats = [
    {
      label: 'Total Students',
      value: '847',
      change: '+12',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Active Students',
      value: '623',
      change: '+8',
      icon: TrendingUp,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Completed',
      value: '156',
      change: '+23',
      icon: CheckCircle,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      label: 'Avg. Progress',
      value: '68%',
      change: '+5%',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || student.course === courses.find(c => c.id === selectedCourse)?.name;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Enrolled Students</h1>
          <p className="text-gray-600">Manage and track your students' progress</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search students by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-semibold">
                          {student.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{student.course}</div>
                      <div className="text-xs text-gray-500">
                        Enrolled: {new Date(student.enrolledDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{student.progress}%</span>
                            <span className="text-xs text-gray-500">
                              {student.completedLessons}/{student.totalLessons}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          student.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : student.status === 'active'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {student.status}
                      </span>
                      {student.certificateIssued && (
                        <div className="flex items-center mt-1">
                          <Award className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-600">Certificate</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {student.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-orange-600 hover:text-orange-900 p-2 hover:bg-orange-50 rounded-lg transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}

          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {filteredStudents.length} of {students.length} students
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledUsers;
