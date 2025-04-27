import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
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
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white p-1 rounded-full shadow-xl">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Profile" 
                className="w-full rounded-full"
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://plus.unsplash.com/premium_photo-1672582776474-fc85ebaa1b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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