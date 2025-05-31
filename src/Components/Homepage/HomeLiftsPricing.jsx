import React, { useState } from 'react';
import { Building, Home, DoorOpen, Move, ArrowUpDown } from 'lucide-react';

export default function HomeLiftsPricing() {
  const [activeTab, setActiveTab] = useState('X300-Plus');

  const productData = {
    'X300-Plus': {
      name: 'X300 - Plus',
      icon: <Building className="w-6 h-6" />,
      description: 'Premium elevator with advanced features and luxury finishes',
      prices: [
        { floors: 'G+1', price: '₹18.75 lakhs' },
        { floors: 'G+2', price: '₹20.75 lakhs' },
        { floors: 'G+3', price: '₹22.75 lakhs' },
        { floors: 'G+4', price: '₹24.75 lakhs' },
        { floors: 'G+5', price: '₹26.75 lakhs' }
      ]
    },
    'X300': {
      name: 'X300',
      icon: <Home className="w-6 h-6" />,
      description: 'Standard home elevator with reliable performance and modern design',
      prices: [
        { floors: 'G+1', price: '₹15.50 lakhs' },
        { floors: 'G+2', price: '₹17.25 lakhs' },
        { floors: 'G+3', price: '₹19.00 lakhs' },
        { floors: 'G+4', price: '₹20.75 lakhs' },
        { floors: 'G+5', price: '₹22.50 lakhs' }
      ]
    },
    'E300-Sliding': {
      name: 'E300 - Sliding Door',
      icon: <DoorOpen className="w-6 h-6" />,
      description: 'Compact elevator with space-saving sliding door mechanism',
      prices: [
        { floors: 'G+1', price: '₹14.25 lakhs' },
        { floors: 'G+2', price: '₹15.75 lakhs' },
        { floors: 'G+3', price: '₹17.25 lakhs' },
        { floors: 'G+4', price: '₹18.75 lakhs' },
        { floors: 'G+5', price: '₹20.25 lakhs' }
      ]
    },
    'E200-Swing': {
      name: 'E200 - Swing Door',
      icon: <Move className="w-6 h-6" />,
      description: 'Traditional swing door elevator with classic design and functionality',
      prices: [
        { floors: 'G+1', price: '₹12.50 lakhs' },
        { floors: 'G+2', price: '₹14.00 lakhs' },
        { floors: 'G+3', price: '₹15.50 lakhs' },
        { floors: 'G+4', price: '₹17.00 lakhs' },
        { floors: 'G+5', price: '₹18.50 lakhs' }
      ]
    },
    'E200-Sliding': {
      name: 'E200 - Sliding Door',
      icon: <DoorOpen className="w-6 h-6" />,
      description: 'Efficient sliding door elevator with optimal space utilization',
      prices: [
        { floors: 'G+1', price: '₹13.25 lakhs' },
        { floors: 'G+2', price: '₹14.50 lakhs' },
        { floors: 'G+3', price: '₹15.75 lakhs' },
        { floors: 'G+4', price: '₹17.00 lakhs' },
        { floors: 'G+5', price: '₹18.25 lakhs' }
      ]
    },
    'E50-Stairlift': {
      name: 'E50 - Stairlift',
      icon: <ArrowUpDown className="w-6 h-6" />,
      description: 'Curved stairlift solution for seamless mobility between floors',
      prices: [
        { floors: 'Straight Rail', price: '₹3.50 lakhs' },
        { floors: 'Curved Rail', price: '₹5.75 lakhs' },
        { floors: 'Outdoor Model', price: '₹4.25 lakhs' },
        { floors: 'Heavy Duty', price: '₹6.50 lakhs' },
        { floors: 'Premium Features', price: '₹7.25 lakhs' }
      ]
    }
  };

  const tabs = Object.keys(productData);
  const currentProduct = productData[activeTab];

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Find A Quick Way to Home lifts price in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-6xl mx-auto mb-8">
            The worth of investing in high-end home lifts in India, Consider the exclusive pricing crafted by Elite Elevators. Get the Price of Home Lifts in India to bring into your living space, 
            and appreciate the carefully curated pricing offered by Elite Elevators for a truly elevated experience.
          </p>
          <p className="text-sm md:text-base text-gray-400 italic">
            All prices quoted below are excluding taxes*
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Product Tabs */}
          <div className="lg:col-span-2 space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-lg transform scale-105'
                    : 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 hover:text-white'
                }`}
              >
                <div className="flex-shrink-0">
                  {productData[tab].icon}
                </div>
                <span className="font-medium text-base md:text-lg">
                  {productData[tab].name}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content - Product Details */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Product Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
                    {currentProduct.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {currentProduct.name}
                  </h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Price Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {currentProduct.prices.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-amber-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <div className="text-center">
                      <div className="text-lg md:text-xl font-semibold text-gray-300 mb-2">
                        {item.floors}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  What's Included:
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    Professional Installation & Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    1 Year Comprehensive Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    24/7 Customer Support & Maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    Safety Certifications & Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Get Custom Quote
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}