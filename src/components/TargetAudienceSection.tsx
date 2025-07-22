import React from 'react';
import { Check } from 'lucide-react';

const TargetAudienceSection: React.FC = () => {
  return (
    <section id="who-is-this-for" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
            This system works <span className="text-primary-600">best for:</span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gym Owners & Managers</h3>
              <p className="text-gray-700">
                Running mid-sized facilities (100-500 members) who know their service is great but struggle to grow consistently through word-of-mouth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fitness Entrepreneurs</h3>
              <p className="text-gray-700">
                Business-minded owners who want predictable growth without relying on expensive advertising or gimmicky promotions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth-Focused Operators</h3>
              <p className="text-gray-700">
                Center managers tired of watching competitors succeed while their referral efforts fall flat, ready to implement proven systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven Leaders</h3>
              <p className="text-gray-700">
                Owners who measure success by member satisfaction and sustainable growth, not just quick wins or flashy marketing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-all hover:shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation-Ready Teams</h3>
              <p className="text-gray-700">
                Fitness businesses with staff willing to follow step-by-step processes and track simple metrics for continuous improvement.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <a 
                href="#pricing" 
                className="inline-flex items-center text-white bg-accent-500 hover:bg-accent-500 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>See if you qualify</span>
                <Check className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;