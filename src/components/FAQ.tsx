import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I set up my online courses?",
      answer: "You can have your first course live within 24 hours! Our intuitive course builder, pre-designed templates, and bulk upload features make it incredibly fast. Most educators publish their first course on the same day they sign up."
    },
    {
      question: "What payment methods do you support for Indian users?",
      answer: "We support all major Indian payment methods including UPI (Google Pay, PhonePe, Paytm), all major credit/debit cards, net banking, and digital wallets. We're integrated with Razorpay and PayU for secure, instant payments with automatic GST handling."
    },
    {
      question: "Can I teach in Hindi and regional languages?",
      answer: "Absolutely! ShikshaFlow supports Hindi, English, and 15+ Indian regional languages including Tamil, Telugu, Bengali, Marathi, Gujarati, and more. You can create multilingual courses and even use our AI translation tools."
    },
    {
      question: "Is there a limit on the number of students or courses?",
      answer: "It depends on your plan. Our Starter plan supports up to 100 students and 3 courses. Professional plan offers unlimited courses with 1000 students. Enterprise plan has no limits. You can upgrade anytime as you grow."
    },
    {
      question: "How does the mobile experience work?",
      answer: "Our platform is mobile-first! Students get native mobile apps for iOS and Android with offline content access, push notifications, and optimized for low-bandwidth connections common in India. 80% of our usage happens on mobile."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support in both Hindi and English through chat, email, and phone. Professional and Enterprise plans get dedicated account managers. We also provide free onboarding sessions and marketing guidance."
    },
    {
      question: "Can I customize the look and feel of my course portal?",
      answer: "Yes! You can fully customize your learning portal with your branding, colors, logo, and domain name. Our white-label solution lets you create a completely branded experience for your students."
    },
    {
      question: "How do you ensure video quality and streaming in India?",
      answer: "We use CDN servers located in India for faster loading times and adaptive streaming technology that adjusts quality based on internet speed. Videos are optimized for Indian internet conditions with options for offline download."
    },
    {
      question: "What analytics and insights do I get?",
      answer: "Comprehensive analytics including student progress, engagement rates, completion rates, revenue tracking, geographical distribution of students, peak learning times, and detailed performance metrics for each course and module."
    },
    {
      question: "Is there a free trial? What's included?",
      answer: "Yes! We offer a 14-day free trial with full access to all features (no credit card required). You can create courses, invite students, test payments, and explore all premium features before deciding."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about building your online education business
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="h-5 w-5 text-orange-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our team is here to help you succeed. Get in touch!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
                Talk to Sales
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all">
                Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;