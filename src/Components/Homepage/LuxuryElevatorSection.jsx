import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function LuxuryElevatorSection() {
  const features = [
    'Cabin Materials',
    'Finishing Touches',
    'Personalized Cabin Sizes',
    'Advanced Features',
    'Ride Quality'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 px-6 md:px-10 lg:px-16">
      {/* Header Section */}
      <div className="text-center py-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          BeSpoke by Elite Elevators
        </h1>
        <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
          Your Lift, Your Way – 100% Custom-Made to Suit Your Lifestyle
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern luxury elevator interior with glass walls and contemporary design"
                className="w-full h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <p className="text-xs md:text-sm text-white/90">Premium Materials & Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6 max-w-lg mx-auto lg:mx-0">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Luxury that Adapts To Your Lifestyle
              </h2>
              <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-6">
                Your home is your personal masterpiece—every element captures your sense of 
                style, taste, and lifestyle. So why should your elevator be any different? BeSpoke by 
                Elite Elevators is all about crafting home elevators that are more than just a mode 
                of transport—they are a splendid addition to your house that showcase both 
                advanced technology and unparalleled sophistication.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-6 text-center lg:text-left">
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto lg:mx-0">
                BeSpoke by Elite Elevators
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>
                  <span className="text-base text-blue-100 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}