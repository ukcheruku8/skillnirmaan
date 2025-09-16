import React, { useState } from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for new educators",
      icon: Zap,
      monthlyPrice: 999,
      yearlyPrice: 7999,
      features: [
        "Up to 3 courses",
        "100 students",
        "Basic video hosting (5GB)",
        "Email support",
        "Mobile app access",
        "Payment gateway (Indian)",
        "Basic analytics",
        "Community features"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      subtitle: "Most popular choice",
      icon: Star,
      monthlyPrice: 2999,
      yearlyPrice: 23999,
      features: [
        "Unlimited courses",
        "1000 students",
        "Advanced video hosting (50GB)",
        "Priority support (Hindi/English)",
        "Custom branding",
        "Advanced analytics",
        "Live webinars & classes",
        "Affiliate program",
        "Multi-language support",
        "AI-powered tools",
        "Certificate generation"
      ],
      popular: true,
      color: "border-orange-500"
    },
    {
      name: "Enterprise",
      subtitle: "For established businesses",
      icon: Crown,
      monthlyPrice: 7999,
      yearlyPrice: 63999,
      features: [
        "Everything in Professional",
        "Unlimited students",
        "Unlimited storage",
        "Dedicated account manager",
        "White-label solution",
        "API access",
        "Advanced integrations",
        "Custom development",
        "24/7 phone support",
        "On-premise deployment",
        "Advanced security features",
        "Bulk user management"
      ],
      popular: false,
      color: "border-purple-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free, scale fast. All plans include everything you need to succeed.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-orange-500' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Save 33%</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.color} border-2 ${plan.popular ? 'transform lg:scale-105 lg:-translate-y-4' : ''} transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  <plan.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isYearly && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ₹{(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
              }`}>
                {index === 2 ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">All plans include 14-day free trial • No credit card required • Cancel anytime</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Indian Payment Gateways</span>
            <span>✓ GST Compliant</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;