import React, { useEffect, useRef, useState } from 'react';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTab, setSelectedTab] = useState('X300');
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

  const products = [
    {
      id: 'X300',
      name: 'X300',
      image: '/api/placeholder/300/400',
    },
    {
      id: 'E300',
      name: 'E300',
      image: '/api/placeholder/300/400',
    },
    {
      id: 'E200',
      name: 'E200',
      image: '/api/placeholder/300/400',
    }
  ];

  const productDetails = {
    'X300': {
      title: 'X300',
      description: 'The X 300 isn\'t just a home lift—it\'s an Xperience like never before! Designed for those who seek the perfect blend of speed, safety, and sophistication, the X 300 brings your dream home to life.',
      detailedDescription: 'With Xclusive features, Xtreme performance, and an Xtraordinary design, the X 300 stands out as the pinnacle of home lift innovation. Every aspect, from super-fast operation to cutting-edge safety features, has been meticulously crafted to offer you the smoothest and most seamless ride.',
      features: [
        'Xtreme Performance Technology',
        'Lifetime Motor Warranty',
        'Xclusively 4 Operating Modes',
        'Remote Monitoring with Smart Connectivity',
        'Advanced Error Notification System',
        'Ultra-Smooth Start and Stop'
      ],
      image: '/api/placeholder/400/600'
    },
    'E300': {
      title: 'E300',
      description: 'The E 300 represents the pinnacle of luxury and performance in home elevators. With its sleek design and powerful capabilities, it transforms your home into a modern masterpiece of convenience.',
      detailedDescription: 'Featuring state-of-the-art technology and premium materials, the E 300 delivers an unparalleled riding experience. Its whisper-quiet operation and smooth movement ensure comfort for all passengers.',
      features: [
        'Premium Cabin Design',
        'High-Speed Operation',
        'Energy-Efficient Technology',
        'Customizable Interior Options',
        'Advanced Safety Features',
        'Smart Home Integration'
      ],
      image: '/api/placeholder/400/600'
    },
    'E200': {
      title: 'E200',
      description: 'The E 200 is engineered for those who demand reliability, elegance, and efficiency in a home lift. Powered by proven hydraulic technology, it offers whisper-quiet operation, seamless comfort, and exceptional performance. Whether you\'re looking for a lift with sophisticated aesthetics or effortless accessibility, the E 200 delivers on all fronts.',
      detailedDescription: 'Designed with cutting-edge automation, the E 200 features a one-touch call reservation system, ensuring a hassle-free experience. Plus, with its battery-operated emergency lowering system, you\'re always assured of unmatched safety and peace of mind.',
      features: [
        'Elegance Cabin',
        'Speed Options from 0.15 m/s to 0.3 m/s',
        'High Capacity (Up to 400 kg)',
        'Extended Travel Height (12,600 mm – 13,100 mm)',
        '24V Control Voltage'
      ],
      image: '/api/placeholder/400/600'
    }
  };

  const tabData = {
    'X300': {
      title: 'X300',
      description: 'The X 300 isn\'t just a home lift—it\'s an Xperience like never before! Designed for those who seek the perfect blend of speed, safety, and sophistication, the X 300 brings your dream home to life.',
      detailedDescription: 'With Xclusive features, Xtreme performance, and an Xtraordinary design, the X 300 stands out as the pinnacle of home lift innovation. Every aspect, from super-fast operation to cutting-edge safety features, has been meticulously crafted to offer you the smoothest and most seamless ride.',
      features: [
        'Xtreme Performance Technology',
        'Lifetime Motor Warranty',
        'Xclusively 4 Operating Modes',
        'Remote Monitoring with Smart Connectivity',
        'Advanced Error Notification System',
        'Ultra-Smooth Start and Stop'
      ],
      specs: {
        height: 'Up to 21,000 mm',
        speed: 'Up to 1.0 m/s',
        weight: '440 kg'
      }
    },
    'X300 Plus': {
      title: 'X300 Plus',
      description: 'The X 300 Plus takes luxury to the next level with premium features and enhanced performance capabilities. Built for discerning homeowners who demand the absolute best in vertical transportation.',
      detailedDescription: 'Featuring advanced AI-powered systems, premium materials, and exclusive design options, the X 300 Plus represents the ultimate in home elevator luxury. Every detail has been refined to provide an unparalleled experience.',
      features: [
        'AI-Powered Smart Controls',
        'Premium Platinum Warranty',
        'Exclusive Design Customization',
        'Advanced Biometric Security',
        'Predictive Maintenance System',
        'Whisper-Quiet Operation'
      ],
      specs: {
        height: 'Up to 25,000 mm',
        speed: 'Up to 1.2 m/s',
        weight: '500 kg'
      }
    }
  };

  const currentTabData = tabData[selectedTab];

  // Handle mouse enter without refreshing
  const handleMouseEnter = (productId, e) => {
    // Prevent default browser behavior
    if (e) e.preventDefault();
    setHoveredCard(productId);
  };

  // Handle mouse leave
  const handleMouseLeave = (e) => {
    // Prevent default browser behavior
    if (e) e.preventDefault();
    setHoveredCard(null);
  };

  // Handle modal click to prevent event bubbling
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Products</h2>
        </div>

        {/* Product Cards and Details Container */}
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Cards Row */}
          <div className="relative mb-16">
            {/* Product Cards */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`relative cursor-pointer transition-all duration-500 ease-out transform ${
                    hoveredCard === product.id 
                      ? 'scale-110 z-30' 
                      : hoveredCard 
                        ? 'scale-90 opacity-40 blur-sm' 
                        : 'scale-100 opacity-100'
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(product.id, e)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => e.preventDefault()}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    zIndex: hoveredCard === product.id ? 30 : 10 - index
                  }}
                >
                  <div className="relative w-64 h-80 md:w-72 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-32 bg-gradient-to-b from-blue-200/40 to-blue-300/40 rounded-lg border border-blue-300/30 backdrop-blur-sm"></div>
                      </div>
                    </div>
                    
                    {/* Search icon overlay */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    {/* Product label */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                      <span className="font-semibold">{product.name}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-orange-500/20 transition-opacity duration-300 ${
                      hoveredCard === product.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Details (appears beside the hovered card) */}
            {hoveredCard && productDetails[hoveredCard] && (
              <div 
                className="fixed inset-0 z-40 flex items-center justify-center bg-black/50"
                onClick={handleMouseLeave}
              >
                <div 
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-gray-900/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700 mx-auto max-w-6xl"
                  onClick={handleModalClick}
                >
                  {/* Left - Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-400 text-sm font-semibold">Elite Elevators</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{productDetails[hoveredCard].title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {productDetails[hoveredCard].description}
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {productDetails[hoveredCard].detailedDescription}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {productDetails[hoveredCard].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Button */}
                    <div className="pt-6">
                      <button 
                        type="button"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                      >
                        Explore More →
                      </button>
                    </div>
                  </div>

                  {/* Right - Large Product Image */}
                  <div className="relative">
                    <div className="relative w-full max-w-md mx-auto h-96 md:h-[500px] bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Modern home interior background */}
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100">
                        {/* Elevator shaft */}
                        <div className="absolute right-8 top-8 bottom-8 w-20 bg-gray-800 rounded-lg shadow-inner">
                          {/* Elevator car */}
                          <div className="absolute top-1/3 left-2 right-2 h-24 bg-gradient-to-b from-gray-600 to-gray-700 rounded border border-gray-500">
                            <div className="absolute top-2 left-2 right-2 h-1 bg-gray-400 rounded"></div>
                            <div className="absolute bottom-2 left-2 right-2 h-8 bg-gradient-to-b from-gray-500/40 to-transparent rounded"></div>
                          </div>
                          
                          {/* Floor indicators */}
                          <div className="absolute left-1 top-4 space-y-4">
                            {[...Array(8)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Interior elements */}
                        <div className="absolute bottom-8 left-8 w-16 h-12 bg-gray-300 rounded shadow-md"></div>
                        <div className="absolute bottom-12 left-28 w-8 h-8 bg-green-400 rounded shadow-md"></div>
                      </div>
                      
                      {/* Product label */}
                      <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <span className="font-bold text-lg">{productDetails[hoveredCard].title}</span>
                      </div>

                      {/* Close button */}
                      <button 
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredCard(null);
                        }}
                        type="button"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className={`transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-1">
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedTab === tab
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-400 text-sm font-semibold">Elite Elevators</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{currentTabData.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {currentTabData.description}
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {currentTabData.detailedDescription}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {currentTabData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Specifications */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Travel Height</div>
                  <div className="text-gray-400 text-sm">{currentTabData.specs.height}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Speed</div>
                  <div className="text-gray-400 text-sm">{currentTabData.specs.speed}</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Weight Cap</div>
                  <div className="text-gray-400 text-sm">{currentTabData.specs.weight}</div>
                </div>
              </div>

              {/* Explore More Button */}
              <div className="pt-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                  Explore More →
                </button>
              </div>
            </div>

            {/* Right - Large Product Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto h-96 md:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-40 bg-gradient-to-b from-blue-200/40 to-blue-300/40 rounded-lg border border-blue-300/30 backdrop-blur-sm"></div>
                  </div>
                </div>
                
                {/* Product label */}
                <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg">{currentTabData.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;