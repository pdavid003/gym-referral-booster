import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            Here's what <span className="text-primary-600">nobody talks about</span> in the fitness industry...
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Your members love your gym. They get results. They tell their friends how great you are.
            </p>
            
            <p className="text-xl font-semibold text-blue-800">
              But they never actually bring those friends in.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-2xl font-bold text-blue-900 mb-2">
                It's called Referral Resistance Syndrome.
              </p>
              <p className="italic text-blue-800">
                And it's not your fault.
              </p>
            </div>
            
            <p>
              See, your happiest members have invisible walls in their brain. They want to help you grow. They want their friends to succeed too.
            </p>
            
            <p className="font-medium">
              But something stops them every time.
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 my-8">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800">They worry about looking pushy.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800">They fear mixing friendship with business.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800">They stress about what happens if their friend doesn't like it.</p>
              </div>
            </div>
            
            <p className="font-medium">
              So they stay quiet.
            </p>
            
            <div className="my-8 p-6 bg-red-50 rounded-lg border border-red-100">
              <p>
                Meanwhile, you're spending thousands on ads that bring in tire-kickers who quit after two months.
              </p>
              <p className="mt-4">
                Your best members - the ones who would refer quality people just like them - sit there doing nothing.
              </p>
            </div>
            
            <p className="text-xl font-semibold text-red-600">
              It's frustrating. It's expensive. And it's completely backwards.
            </p>
            
            <p>
              The people who know your value best aren't sharing it. The people who could bring you the best new members stay silent.
            </p>
            
            <div className="mt-8 flex items-center space-x-2 text-blue-600 font-medium">
              <p>This happens in 9 out of 10 fitness centers. Even the successful ones.</p>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;