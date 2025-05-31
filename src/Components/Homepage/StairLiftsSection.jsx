import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function StairLiftsSection() {
  const e50Features = [
    '11 Customisable Colour Options',
    'Advanced Joystick Controls with Alarm',
    'Adjustable to Four Positions: 515-585 mm (Floor to Top of Seat)'
  ];

  const supraFeatures = [
    '11 Customisable Colour Options',
    'Advanced Joystick Controls with Alarm',
    'Adjustable to Four Positions: 515-585 mm (Floor to Top of Seat)'
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Stair Lifts
        </h1>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        {/* E50 Stairlifts Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                E50 Stairlifts
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                The E50 stairlift is a compact and efficient mobility solution designed for single-
                person use, offering a seamless way to navigate between floors without relying on 
                the staircase.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Personalized Experience Options
              </h3>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {e50Features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                    <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                Explore More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern curved stairlift installed on residential staircase"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* SUPRA Stairlifts Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="White modern stairlift on straight staircase in bright interior"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                SUPRA Stairlifts
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                The SUPRA stairlift is an advanced, high-performance mobility solution designed for 
                both straight and curved staircases. Engineered with precision and elegance, it 
                delivers effortless floor-to-floor movement with enhanced safety and comfort for 
                residential and commercial settings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Personalized Experience Options
              </h3>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {supraFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                    <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                Explore More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}