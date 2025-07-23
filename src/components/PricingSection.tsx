import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Investment Options
            </h2>
            <p className="text-xl text-gray-700">
              Complete Gym Referral Booster System
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="bg-primary-400 p-8 text-white text-center">
              <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full text-sm mb-4">
                LAUNCH SPECIAL
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Complete Gym Referral Booster</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-lg line-through opacity-70">$597</span>
                <span className="text-4xl sm:text-5xl font-bold ml-3">$297</span>
              </div>
              <p className="text-sm opacity-90">One-time payment. No recurring fees.</p>
            </div>
            
            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2 mb-8">
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p>Complete 6-module video course</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p>Done-for-You template library</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p>Implementation checklist system</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p>Lifetime access to all materials</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://whop.com/gym-referral-booster/?store=true"
                  className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-7 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YES! TRANSFORM MY GYM'S REFERRAL SYSTEM NOW
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Secure payment. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;