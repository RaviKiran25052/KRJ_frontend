import { Download, Facebook, Twitter, Instagram, Linkedin, Youtube, Pin } from "lucide-react";

const EliteElevatorsFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Brochure Section */}
      <div className="relative bg-black py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Our Home Lift Brochures
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Just like a car, you can take an Elite home lift for a test drive! Schedule an 
                appointment at any Elite Elevators Experience Centre nearest to you for a 
                personalised tour.
              </p>
              <button className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure →
              </button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop&crop=center"
                alt="Elite Home Lift Experience Centre"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Divider Line */}
          <div className="border-t border-gray-700 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-white rounded p-2 mr-3">
                  <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">E</span>
                  </div>
                </div>
                <span className="text-xl font-bold">Elite Elevators</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                We provide customers with residential elevators that help make day-to-day living 
                better. Every home elevator has an innovative design to create the ultimate 
                experience. Still, every elevator is available with a wide variety of customisation.
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <div className="text-gray-400 space-y-2 text-sm">
                <p className="font-semibold text-white">ELITE ELEVATORS PRIVATE LIMITED,</p>
                <p>NIBAV Building, 2nd Floor,</p>
                <p>No 11 L.B.Road, Adyar,</p>
                <p>Chennai 600020,INDIA.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">• E200 Hydraulic Lifts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">• E300 Home Lifts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">• X300 Gearless Elevators</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">• X300 Plus</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">• E50 Stairlifts</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">• Supra</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-400">Mobile :</span>
                  <span className="text-white ml-1">+91 93616 13131</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone :</span>
                  <span className="text-white ml-1">04424902828</span>
                </div>
                <div>
                  <span className="text-gray-400">Email :</span>
                  <span className="text-white ml-1">enquiry@eliteelevators.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-black p-2 rounded-full transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors duration-300">
                    <Pin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EliteElevatorsFooter;