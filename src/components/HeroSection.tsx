import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
      <div className="absolute inset-0 bg-[url(https://cdn.properties.emaar.com/wp-content/uploads/2024/08/VEO.jpg)] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-7 leading-tight">
            Turn Your Gym Into a <span className="text-accent-300">Referral Machine</span>
          </h1>
          <p className="text-x0,5 sm:text-2xl lg:text-2xl mb-5 font-light">
            Get 20+ New Members Every Month Without Spending a Dime on Ads
          </p>

          {/* YouTube Video Container - JAVÍTOTT IFRAME */}
          <div className="mb-8 w-full sm:w-11/12 md:w-4/5 lg:w-11/12 xl:w-11/12 mx-auto aspect-video bg-black bg-opacity-30 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/__y1YduwCCo?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-12">
            <a
              href="https://whop.com/gym-referral-booster/gym-referral-booster/?utm_source=store_page"
              className="inline-block bg-accent-300 hover:bg-accent-300 text-primary-900 font-bold py-4 px-16 rounded-full text-lg sm:text-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              target="_blank" // Új lapon nyitja meg a linket
              rel="noopener noreferrer" // Biztonsági javaslat külső linkekhez
            >
              GET INSTANT ACCESS
            </a>
          </div>

          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
              Stop watching your competitors steal your members while you struggle with empty classes and rising costs.
            </p>
            <p className="mb-8 text-lg">
              The Gym Referral Booster shows fitness center owners exactly how to transform happy members into your best sales team.
            </p>
            <p className="font-medium text-lg">
              No fancy software. No pushy tactics. Just a proven method that works.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,56C1248,48,1344,32,1392,24L1440,16L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
