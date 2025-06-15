import React from 'react';
import SnowBackground from '../common/SnowBackground';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section" 
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 relative overflow-hidden"
    >
      {/* Snow Animation Background */}
      <SnowBackground count={500} color="#ffffff" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Hi, I'm</span> 
              <span className="text-yellow-300">Chutchawan Meesrimatupoj(drink)</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Java & Golang Developer</h2>
            <p className="text-xl mb-8 text-blue-100">
              With 11 months of experience building robust backend services and APIs.
              Passionate about clean code and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white p-1 rounded-full shadow-xl transform hover:rotate-2 transition-transform duration-300">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Profile" 
                className="w-full rounded-full"
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://zxgzckhxyhexdvhgvxie.supabase.co/storage/v1/object/sign/myimage/Screenshot%202025-04-27%20184834.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NTI5N2EzMC1jM2Y5LTRmMzEtOGY4OC01MzgxMTA1MjBlZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteWltYWdlL1NjcmVlbnNob3QgMjAyNS0wNC0yNyAxODQ4MzQucG5nIiwiaWF0IjoxNzQ5OTk1NDc2LCJleHAiOjE3ODE1MzE0NzZ9.YsasKpy9gIqTYpHNfHIQExn41nYPDMajoKD5Yldfalo";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;