import React from 'react';
import { Star } from 'lucide-react';

const ProofSection: React.FC = () => {
  return (
    <section id="proof" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
            REAL RESULTS FROM <span className="text-primary-600">REAL GYM OWNERS</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "We went from 12 referrals last year to 47 referrals in just 3 months. My members actually ask me how they can refer more people now."
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">Sarah Martinez</p>
                <p className="text-gray-600">FitLife Gym</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "I was spending $3,000 monthly on Facebook ads with terrible results. Now I spend $500 on referral rewards and get better members who stay longer."
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">Mike Chen</p>
                <p className="text-gray-600">Iron Core Fitness</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "The system paid for itself in the first month. We added 23 new members through referrals alone."
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">Lisa Thompson</p>
                <p className="text-gray-600">Peak Performance Center</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-8 border border-primary-100 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary-800">
              THE NUMBERS DON'T LIE
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">89%</p>
                <p className="text-gray-700">of our clients see results within 30 days</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">340%</p>
                <p className="text-gray-700">average increase in monthly referrals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">65%</p>
                <p className="text-gray-700">longer retention for referred members</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-bold text-primary-600 mb-1">$127</p>
                <p className="text-gray-700">average drop in cost per acquisition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;