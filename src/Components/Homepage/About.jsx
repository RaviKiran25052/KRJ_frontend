import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Cylindrical Image */}
          <div className={`relative w-full lg:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            {/* Main cylindrical container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Cylindrical background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-2xl overflow-hidden">
                {/* Interior elevator shaft image */}
                <div className="absolute inset-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full overflow-hidden">
                  {/* Elevator shaft interior */}
                  <div className="relative w-full h-full bg-gradient-to-b from-blue-50 to-blue-100">
                    {/* Glass elevator */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-blue-200/80 to-blue-300/80 rounded-lg border border-blue-300/50 backdrop-blur-sm">
                      {/* Elevator details */}
                      <div className="absolute top-2 left-2 right-2 h-1 bg-blue-400/60 rounded"></div>
                      <div className="absolute top-4 left-2 right-2 h-8 bg-gradient-to-b from-blue-100/40 to-transparent rounded"></div>
                    </div>
                    
                    {/* Stairs */}
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/4">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-12 h-2 bg-gray-400 mb-1 shadow-sm"
                          style={{ 
                            marginLeft: `${i * 2}px`,
                            opacity: 0.7 - i * 0.1 
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Building floors indicator */}
                    <div className="absolute left-1/4 top-1/3 space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400/60 rounded-sm"></div>
                          <div className="w-2 h-2 bg-gray-400/60 rounded-sm"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Price tag */}
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-10">
                <div className="text-sm font-medium">Starts from</div>
                <div className="text-lg font-bold">₹16.50 Lakhs</div>
                <div className="text-sm">Onwards</div>
              </div>
              
              {/* Small circular detail */}
              <div className="absolute bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <div className="relative w-full h-full bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-gradient-to-b from-blue-200/80 to-blue-300/80 rounded border border-blue-300/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`w-full lg:w-1/2 space-y-6 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <div className={`transform transition-all duration-800 ease-out delay-500 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}>
              <h3 className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-2">
                ABOUT US
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Elite Elevators – India's Most Trusted Home Elevator Company
              </h2>
            </div>
            
            <div className={`space-y-4 text-gray-300 text-base md:text-lg leading-relaxed transform transition-all duration-800 ease-out delay-700 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}>
              <p>
                Elite Elevators is the most reputed home elevator company in India. Headquartered in 
                Chennai, we provide home elevators, stairlifts, and platform lifts for residential spaces 
                all over India. From small houses, villas, bungalows, residential buildings and luxury 
                homes, our elevators will provide the best solution for vertical transit.
              </p>
              
              <p>
                Our home elevators include the X Series (in-house models X300 & X300 Plus) and E 
                Series (imported from Italy, like E200 & E300), all meeting global safety standards. 
                Tailor-made, pitless, and shaft-free, our lifts suit both new and existing homes, 
                ensuring seamless installation and unmatched convenience for vertical transit.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-800 ease-out delay-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-16 opacity-0'
            }`}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                Learn More →
              </button>
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Contact →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;