import React from 'react';
import { Play, ArrowRight, Users, BookOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-orange-50 to-red-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-2" />
                #1 LMS for Indian Creators
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Knowledge</span> Into
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Revenue</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create, manage, and sell courses, webinars, and workshops with India's most trusted learning management system. Join over 50,000+ educators building their digital empire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
                Start Your Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-orange-500" />
                50K+ Educators
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-orange-500" />
                1M+ Students Served
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Course Dashboard</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Live</div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 h-4 rounded-full">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress: 75%</span>
                    <span>₹45,000 earned</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">150</div>
                    <div className="text-sm text-gray-600">Active Students</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">4.9</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Monthly Revenue</div>
              <div className="text-2xl font-bold">₹1,25,000+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;