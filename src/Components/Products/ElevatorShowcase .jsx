import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Zap, Shield, Star, Wrench } from 'lucide-react';
import HeroSection from '../Homepage/Hero'; // Add this import

const ElevatorShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy elevator images - using placeholder service
  const elevatorImages = [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=600&fit=crop'
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % elevatorImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [elevatorImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % elevatorImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? elevatorImages.length - 1 : prevIndex - 1
    );
  };

  const sections = [
    {
      id: 'x300',
      title: 'X300 Gearless Home Lifts',
      description: 'The X300 is our ultimate home elevator. Our core performance and safety haven\'t changed — they\'ve been enhanced. You still get the premium feeling and premium experience. The X300 gives you the best value for your money and is packed with exclusive features. It is the real home elevator and it is made just for you.',
      features: [
        'First-ever multi-mode performance',
        '2x faster performance',
        'Largest cabin size (up to 5 persons)',
        'Gearless belt drive',
        'Complete glass views',
        'No pit, machine room or headroom'
      ],
      icon: <Home className="w-8 h-8" />,
      images: elevatorImages
    },
    {
      id: 'x250',
      title: 'X250 Premium Home Lifts',
      description: 'Experience luxury redefined with the X250 series. Built with precision engineering and modern aesthetics, this elevator brings hotel-grade sophistication to your home. Every journey becomes a statement of elegance and comfort.',
      features: [
        'Premium cabin finishes',
        'Smart home integration',
        'Whisper-quiet operation',
        'Energy-efficient LED lighting',
        'Emergency backup system',
        'Customizable interior options'
      ],
      icon: <Star className="w-8 h-8" />,
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607688960-e095868d3c55?w=400&h=600&fit=crop'
      ]
    },
    {
      id: 'x200',
      title: 'X200 Compact Home Lifts',
      description: 'Perfect for smaller spaces without compromising on quality. The X200 delivers exceptional performance in a compact footprint. Smart engineering meets practical design to create the ideal solution for modern homes with space constraints.',
      features: [
        'Space-saving design',
        'Easy installation process',
        'Maintenance-friendly access',
        'Smooth acceleration technology',
        'Safety sensors throughout',
        'Flexible shaft requirements'
      ],
      icon: <Zap className="w-8 h-8" />,
      images: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop'
      ]
    },
    {
      id: 'x150',
      title: 'X150 Essential Home Lifts',
      description: 'Reliability meets affordability in the X150 series. Designed for everyday use with professional-grade components, this elevator provides dependable vertical transportation with all the essential safety features your family needs.',
      features: [
        'Proven reliability standards',
        'Cost-effective solution',
        'Standard safety compliance',
        'Durable construction materials',
        'Simple control systems',
        'Quick service accessibility'
      ],
      icon: <Shield className="w-8 h-8" />,
      images: [
        'https://images.unsplash.com/photo-1600585154084-4e2b8c0f0b0f?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607688644-7ac3c3eac7f4?w=400&h=600&fit=crop'
      ]
    },
    {
      id: 'x100',
      title: 'X100 Custom Home Lifts',
      description: 'Tailored to your unique vision and requirements. The X100 offers complete customization options, allowing you to create an elevator that perfectly matches your home\'s architecture and your personal style preferences.',
      features: [
        'Fully customizable design',
        'Architectural integration',
        'Premium material options',
        'Bespoke control panels',
        'Personalized cabin themes',
        'Professional design consultation'
      ],
      icon: <Wrench className="w-8 h-8" />,
      images: [
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=600&fit=crop'
      ]
    }
  ];

  const SectionCarousel = ({ images, sectionId }) => {
    const [sectionImageIndex, setSectionImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Reset auto-rotation when component mounts or when images change
    useEffect(() => {
      let intervalId;
      
      if (isAutoPlaying) {
        intervalId = setInterval(() => {
          setSectionImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
      }
      
      // Clean up interval on unmount or when dependencies change
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [images.length, isAutoPlaying, sectionId]);

    const nextSectionImage = () => {
      setSectionImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      // Temporarily pause auto-rotation when manually navigating
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
    };

    const prevSectionImage = () => {
      setSectionImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      // Temporarily pause auto-rotation when manually navigating
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
    };

    return (
      <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
        <div className="relative h-full">
          {/* Add key to force re-render when image changes */}
          <img
            key={`${sectionId}-${sectionImageIndex}`}
            src={images[sectionImageIndex]}
            alt={`Elevator ${sectionImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSectionImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSectionImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSectionImageIndex(index);
                // Temporarily pause auto-rotation when manually selecting
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === sectionImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black"> {/* Added bg-black class here */}
      <HeroSection /> {/* Add the HeroSection component here */}
      {sections.map((section, index) => (
        <section key={section.id} className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} h-[500px] lg:h-[600px]`}>
                <SectionCarousel images={section.images} sectionId={section.id} />
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-8`}>
                <div className="flex items-center space-x-4">
                  <div className="text-blue-400">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {section.title.split(' ')[0]} Features
                  </h3>
                  
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-semibold">
                    View More
                  </button>
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 rounded-lg font-semibold">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ElevatorShowcase;