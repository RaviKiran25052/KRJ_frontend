import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const HeroSection = () => {
  const location = useLocation();
  const isProductsPage = location.pathname === '/elevators';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    model: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const states = [
    'Select State',
    'Andhra Pradesh',
    'Karnataka',
    'Tamil Nadu',
    'Kerala',
    'Maharashtra',
    'Gujarat',
    'Delhi',
    'Mumbai'
  ];

  const models = [
    'Select Model',
    'Home Elevator',
    'Commercial Elevator',
    'Passenger Lift',
    'Goods Lift',
    'Hospital Elevator'
  ];

  return (
    <div className="relative bg-black overflow-hidden"> {/* Changed to bg-black to match About section */}
      {/* Hero Section with Background Video */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0">
          {/* Background Video Element */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://www.eliteelevators.com/wp-content/uploads/2025/03/x300.mp4 " type="video/mp4" />
            {/* Fallback for unsupported video */}
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          {/* Elevator Visual Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="relative">
              {/* Main Elevator Structure */}
              <div className="w-80 h-96 relative">
                {/* Elevator Shaft */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-lg shadow-2xl">
                  {/* Inner Elevator Car */}
                  <div className="absolute top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-md shadow-inner">
                    {/* Elevator Interior Lighting */}
                    <div className="absolute inset-2 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded opacity-90"></div>
                    
                    {/* Elevator Control Panel */}
                    <div className="absolute top-4 left-4 w-16 h-8 bg-gray-700 rounded-sm"></div>
                    
                    {/* Elevator Floor Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-700 rounded-sm"></div>
                  </div>
                  
                  {/* Elevator Door Frame */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 border-4 border-gray-600 rounded-md"></div>
                </div>
                
                {/* Reflection Effect */}
                <div className="absolute -bottom-4 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent opacity-50 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {isProductsPage ? (
            <>
              <p className="text-sm md:text-base mb-2 opacity-90 font-light">
                Elite Elevators
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl uppercase">
                PRODUCTS
              </h1>
              <p className="text-lg md:text-2xl lg:text-3xl mb-8 opacity-90 drop-shadow-lg font-light">
                We Offer A Diverse Range of Home Elevator Models
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
                <Link to="/" className="text-white hover:text-yellow-300 transition-colors">
                  Home
                </Link>
                <span>»</span>
                <span className="text-yellow-300">Products</span>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
                Elite Elevators
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-lg font-light">
                Introducing The World's No.1 Home Elevators and Stairlifts in India
              </p>
            </>
          )}
        </div>
      </div>

      {/* Form Section - Only show on homepage */}
      {!isProductsPage && (
        <div className="relative z-20 -mt-32 mx-4 md:mx-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl p-6 border border-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                  {/* Name Field */}
                  <div className="lg:col-span-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="lg:col-span-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="lg:col-span-1">
                    <div className="flex">
                      <div className="flex-shrink-0 flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                        <span className="text-orange-500 font-bold mr-2">🇮🇳</span>
                        <span className="text-gray-700 font-medium">+91</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="min-w-0 flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* State Dropdown */}
                  <div className="lg:col-span-1">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none bg-white transition-colors"
                      required
                    >
                      {states.map((state, index) => (
                        <option key={index} value={state} disabled={index === 0}>
                          {state} {index === 0 ? '*' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Model Dropdown and Submit Button */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col md:flex-row gap-3">
                      <select
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none bg-white transition-colors"
                        required
                      >
                        {models.map((model, index) => (
                          <option key={index} value={model} disabled={index === 0}>
                            {model} {index === 0 ? '*' : ''}
                          </option>
                        ))}
                      </select>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium transition-colors whitespace-nowrap shadow-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Extended background to fill gap */}
    </div>
  );
};

export default HeroSection;