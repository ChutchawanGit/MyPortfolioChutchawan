import React from 'react';
import SnowBackground from '../common/SnowBackground';

const Hero: React.FC = () => {
  return (
    <>
      <section 
        id="hero-section" 
        className="relative text-white"
        style={{
          background: 'linear-gradient(180deg, #3b82f6 0%, #4338ca 70%)',
          paddingTop: '5rem',
          paddingBottom: '10rem',
        }}
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
                    target.src = "https://via.placeholder.com/400x400?text=Your+Photo";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Smooth Wave Transition */}
      <div 
        className="w-full h-32 -mt-32 relative z-10"
        style={{
          background: 'linear-gradient(to bottom, #4338ca, rgba(255,255,255,0))',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      ></div>
    </>
  );
};

export default Hero;