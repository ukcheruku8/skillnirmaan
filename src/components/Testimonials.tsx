import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Yoga Instructor, Mumbai",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "ShikshaFlow transformed my yoga teaching from local classes to a global audience. I now earn ₹2 lakhs monthly and have students from 15+ countries!"
    },
    {
      name: "Rajesh Kumar",
      role: "Digital Marketing Expert, Bangalore",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The analytics and payment integration are game-changers. My course completion rates increased by 40% and student satisfaction is at an all-time high."
    },
    {
      name: "Dr. Meera Patel",
      role: "Medical Educator, Ahmedabad",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Teaching medical courses online seemed impossible until ShikshaFlow. Their video quality and interactive tools make complex topics easy to understand."
    },
    {
      name: "Amit Singh",
      role: "Coding Bootcamp Founder, Delhi",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From 50 students to 5000+ in just 8 months! The community features and live coding sessions have revolutionized how I teach programming."
    },
    {
      name: "Kavya Reddy",
      role: "Language Teacher, Hyderabad",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Multi-language support helped me create courses in Telugu, Hindi, and English. My student base tripled and engagement is through the roof!"
    },
    {
      name: "Suresh Gupta",
      role: "Finance Coach, Pune",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The automated certificate generation and progress tracking saved me 20+ hours weekly. Now I can focus on creating better content!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Indian Educators</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful creators who've built thriving online education businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-200 group-hover:text-orange-300 transition-colors" />
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Them?</h3>
            <p className="text-gray-600 mb-6">Start your free trial today and become the next success story</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
              Start Your Success Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;