import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Pratiksha Mukherjee",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      testimonial: "Elite Elevators provided answers to all my questions and more. I had an excellent experience from sales to installation. Special thanks to Rakesh (sales), Veena (CRM head), Giridhar (CRM), and Veeramani (technician). Giridhar expertly handled logistics and coordination, while Veeramani's product knowledge and problem-solving skills were invaluable."
    },
    {
      id: 2,
      name: "Mr. Mohammad Azeez",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      testimonial: "Appreciate the prompt response from Ms. Aditya - CRM. She followed up my case with the technical team and resolved the issue. Had continuous contact with me until the issue got resolved. Thank you Ms. Aditya"
    },
    {
      id: 3,
      name: "Mr. Ramakrishna Chowdappa",
      image: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      testimonial: "Good maintenance services after installation provided by Elite Elevators Ltd"
    },
    {
      id: 4,
      name: "Mr. Karthikeyan Lakshmanan",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      testimonial: "I have purchased a Stair Lift from Elite Elevators in 2019 and it has been a wonderful experience right from the initial meeting. I am happy with the highly professional and courteous way in which everything is handled. To top it all I am very much impressed by their proactive and timely service. My sincere thanks to the entire team. Keep it up and my best wishes to everyone!"
    },
    {
      id: 5,
      name: "Mr. Harmandeep Singh",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      testimonial: "My experience with this company was very good. The lift service of this company is very good and long-lasting. A lift was installed in my house about 2 years ago, which is still working well. Not only me, but my wife and children are also very happy. Now they do not have any problem going anywhere in the house, and they can comfortably come and go anywhere in the house without any problem."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Testimonials (Aggregate Rating: 4.6/5)
          </h1>
          
          {/* Google Rating */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">G</span>
              </div>
              <span className="text-lg text-gray-300">Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4.6</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= 4.6 ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6">
          {/* Top Row - 3 testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 testimonials (centered) */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(3, 5).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div>
                    <h3 className="font-bold text-white text-sm md:text-base">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Read More Reviews
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
    </div>
  );
}