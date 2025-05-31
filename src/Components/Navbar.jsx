import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-700 rounded flex items-center justify-center">
                <div className="w-3 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-purple-700">Elite Elevators</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-purple-700 transition-colors font-medium">
              About
            </a>
            
            <div className="relative group">
              <button type="button" className="flex items-center text-gray-800 hover:text-purple-700 transition-colors font-medium">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Products Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-white font-semibold border-b border-gray-700">Products</div>
                  <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    X300
                  </Link>
                  <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    X300 Plus
                  </Link>
                  <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    E300
                  </Link>
                  <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                    E200
                  </Link>
                  <div className="relative group/nested">
                    <div className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
                      <span>Stair Lifts</span>
                      <ChevronDown className="ml-1 w-3 h-3" />
                    </div>
                    <div className="absolute left-full top-0 w-36 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                      <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                        E50
                      </Link>
                      <Link to="/elevators" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                        Supra
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button type="button" className="flex items-center text-gray-800 hover:text-purple-700 transition-colors font-medium">
                Gallery <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button type="button" className="flex items-center text-gray-800 hover:text-purple-700 transition-colors font-medium">
                Price <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button type="button" className="flex items-center text-gray-800 hover:text-purple-700 transition-colors font-medium">
                Testimonial <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <a href="#" className="text-gray-800 hover:text-purple-700 transition-colors font-medium">
              Blog
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
              BeSpoke
            </button>
            <button type="button" className="border border-gray-400 hover:border-purple-700 text-gray-800 hover:text-purple-700 px-6 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-purple-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              About
            </a>
            <Link to="/elevators" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              Products
            </Link>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              Gallery
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              Price
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              Testimonial
            </a>
            <a href="#" className="block px-3 py-2 text-gray-800 hover:text-purple-700 font-medium">
              Blog
            </a>
            <div className="flex flex-col space-y-2 pt-4 pb-2">
              <button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                BeSpoke
              </button>
              <button type="button" className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;