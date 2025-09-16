import React from 'react';
import { UserPlus, BookOpen, Users, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Sign Up & Setup",
      description: "Create your account in 2 minutes. Choose your teaching niche and customize your branded learning portal.",
      color: "bg-orange-500"
    },
    {
      step: 2,
      icon: BookOpen,
      title: "Create Content",
      description: "Upload videos, create quizzes, and design engaging courses using our AI-powered content creation tools.",
      color: "bg-blue-500"
    },
    {
      step: 3,
      icon: Users,
      title: "Launch & Promote",
      description: "Launch your courses and reach students through our marketing tools and affiliate program network.",
      color: "bg-green-500"
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Scale & Earn",
      description: "Track analytics, engage with students, and scale your educational business to 6-figure revenue.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Teaching Journey in
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> 4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to income in less than a week. Join thousands of successful Indian educators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center group">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className={`${step.color} w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-sm font-bold -mt-10 ml-12 shadow-lg`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2" style={{ width: 'calc(100% - 2rem)' }}>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
            Start Building Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;