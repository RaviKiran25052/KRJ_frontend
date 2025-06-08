import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ElevatorCardsSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const elevatorTypes = [
    {
      id: '02',
      title: 'Goods Elevators',
      description: 'Omega offers top-of-the-line goods lifts also often referred to as freight elevators for heavy cargo transport',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
    },
    {
        id: '03',
        title: 'Goods Elevators',
        description: 'Omega offers top-of-the-line goods lifts also often referred to as freight elevators for heavy cargo transport',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
      },
      {
        id: '04',
        title: 'Goods Elevators',
        description: 'Omega offers top-of-the-line goods lifts also often referred to as freight elevators for heavy cargo transport',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
      },
      {
        id: '05',
        title: 'Goods Elevators',
        description: 'Omega offers top-of-the-line goods lifts also often referred to as freight elevators for heavy cargo transport',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
      },
      {
        id: '06',
        title: 'Goods Elevators',
        description: 'Omega offers top-of-the-line goods lifts also often referred to as freight elevators for heavy cargo transport',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
      },
    {
      id: '07',
      title: 'Service Elevators',
      description: 'Efficient service elevators designed for maintenance and utility access',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop'
    },
    {
      id: '08',
      title: 'Escalators',
      description: 'Modern escalator systems for smooth vertical transportation in commercial spaces',
      image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=800&fit=crop'
    },
    {
      id: '09',
      title: 'Passenger Lifts',
      description: 'Comfortable and safe passenger elevators for residential and office buildings',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop'
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Elevator Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive range of elevator systems designed for every need
          </p>
        </div>

        {/* Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          {elevatorTypes.map((elevator, index) => (
            <div
              key={elevator.id}
              className={`
                relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer select-none
                ${hoveredCard === elevator.id 
                  ? 'w-96 h-[600px] scale-105 shadow-2xl' 
                  : 'w-80 h-[500px]'
                }
              `}
              onMouseEnter={() => setHoveredCard(elevator.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={elevator.image}
                  alt={elevator.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hoveredCard === elevator.id ? '' : 'filter grayscale'
                  }`}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`
                  text-6xl md:text-7xl font-bold transition-colors duration-300
                  ${hoveredCard === elevator.id 
                    ? 'text-red-500' 
                    : 'text-white/80'
                  }
                `}>
                  {elevator.id}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className={`
                  transition-all duration-500 ease-in-out
                  ${hoveredCard === elevator.id 
                    ? 'transform translate-y-0 opacity-100' 
                    : 'transform translate-y-4 opacity-90'
                  }
                `}>
                  {/* Content Background */}
                  <div className={`
                    p-6 rounded-xl transition-all duration-300
                    ${hoveredCard === elevator.id 
                      ? 'bg-red-600' 
                      : 'bg-black/60 backdrop-blur-sm'
                    }
                  `}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {elevator.title}
                      </h3>
                      <div className={`
                        p-2 rounded-full transition-all duration-300
                        ${hoveredCard === elevator.id 
                          ? 'bg-white/20 hover:bg-white/30' 
                          : 'bg-white/10 hover:bg-white/20'
                        }
                      `}>
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Description - only show on hover */}
                    <div className={`
                      transition-all duration-300 overflow-hidden
                      ${hoveredCard === elevator.id 
                        ? 'max-h-32 opacity-100' 
                        : 'max-h-0 opacity-0'
                      }
                    `}>
                      <p className="text-white/90 text-base leading-relaxed">
                        {elevator.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`
                absolute inset-0 transition-opacity duration-300
                ${hoveredCard === elevator.id 
                  ? 'bg-black/20 opacity-100' 
                  : 'opacity-0'
                }
              `}></div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {elevatorTypes.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ElevatorCardsSection;