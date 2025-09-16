import React from 'react';
import { Video, Users, BarChart3, Smartphone, Shield, Headphones, Globe, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Live Classes & Webinars",
      description: "Host interactive live sessions with HD video, screen sharing, and real-time Q&A in Hindi and English",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Create engaged learning communities with discussion forums, study groups, and peer-to-peer learning",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track student progress, engagement metrics, and revenue analytics with detailed Indian market insights",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for Indian mobile users with offline content access and low-bandwidth streaming",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Secure Payment Gateway",
      description: "Integrated with UPI, Paytm, PhonePe, and all major Indian payment methods with secure transactions",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support in Hindi",
      description: "Round-the-clock customer support in Hindi and English with dedicated account managers",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create courses in Hindi, English, and 15+ Indian regional languages with auto-translations",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Smart content recommendations, automated assessments, and AI chatbot for student support",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Your
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Educational Empire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed specifically for Indian educators and learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;