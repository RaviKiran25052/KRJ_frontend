import { Play } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ms. Shashi P. Agarwal from Bangalore",
      thumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop&crop=faces",
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Customer Testimonial 2",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center",
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Customer Testimonial 3", 
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop&crop=center",
      videoUrl: "#"
    }
  ];

  const handleVideoPlay = (videoUrl) => {
    // Handle video play functionality
    console.log("Playing video:", videoUrl);
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Video Testimonials
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoPlay(testimonial.videoUrl)}
            >
              {/* Video Thumbnail Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* Thumbnail Image */}
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 shadow-lg">
                    <Play className="w-8 h-8 text-gray-800 fill-current ml-1" />
                  </div>
                </div>

                {/* Elite Reward Badge (for first testimonial) */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Elite Reward
                  </div>
                )}

                {/* Elite Reward Badge (for third testimonial) */}
                {index === 2 && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Elite Reward
                  </div>
                )}
              </div>

              {/* Customer Name */}
              {index === 0 && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 text-white p-3 rounded">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;