import React from 'react';
import { SearchCheck, PenSquare, Layers, Rocket, BarChart3 } from 'lucide-react';

const ProductBreakdownSection: React.FC = () => {
  return (
    <section id="product-breakdown" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              What Makes the <span className="text-primary-600">Gym Referral Booster</span> Different
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              Most gym owners try to fix their referral problem with basic reward programs or generic software.
            </p>
            <p className="text-xl font-medium text-red-600 mt-2">
              That's like trying to fix a broken engine with duct tape.
            </p>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-lg border border-primary-100 mb-16">
            <p className="text-lg text-gray-800 mb-6">
              The Gym Referral Booster works because it targets the real problem: Referral Resistance Syndrome.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              See, your members aren't making referrals because their brain puts up invisible walls. Even when they love your gym.
            </p>
            <p className="text-lg text-gray-800 italic">
              It's like having a car with a full tank but a broken starter motor.
            </p>
            <p className="text-xl font-semibold text-primary-800 mt-6">
              Our Neural Reframing method removes those mental blocks. Turns your happiest members into natural referral machines.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            The R.E.F.E.R. Method Breakdown
          </h3>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary-600 text-white p-4 rounded-full flex items-center justify-center md:mt-0">
                <SearchCheck size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Review: Identify Your Hidden Referral Blockers
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Discover which members should be referring but aren't
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Find the exact psychological barriers stopping them
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Use our Member Mindset Assessment Tool
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Get clear data on what's really happening
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary-600 text-white p-4 rounded-full flex items-center justify-center md:mt-0">
                <PenSquare size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Engineer: Design Your Custom Referral Flow
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Create member-specific referral pathways
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Build trust-based conversation starters
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Design rewards that actually motivate action
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Map out the perfect referral journey
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary-600 text-white p-4 rounded-full flex items-center justify-center md:mt-0">
                <Layers size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Framework: Install the Automated System
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Set up tracking that works without complex software
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Create simple processes your staff can follow
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Build member communication sequences
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Establish clear success metrics
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary-600 text-white p-4 rounded-full flex items-center justify-center md:mt-0">
                <Rocket size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Execute: Launch and Monitor Performance
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Roll out with proven implementation timeline
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Train your team using our ready-made materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Monitor key performance indicators daily
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Make real-time adjustments for maximum results
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary-600 text-white p-4 rounded-full flex items-center justify-center md:mt-0">
                <BarChart3 size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary-800 mb-3">
                  Refine: Optimize for Continuous Growth
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Analyze what's working and what isn\'t
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Scale successful referral channels
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Eliminate low-performing elements
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    Create predictable monthly growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
              What's Included in Your System
            </h3>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h4 className="text-xl font-bold text-primary-700 mb-3">6 Core Video Modules</h4>
                <p className="text-gray-700">Each module builds on the last. No fluff. Just proven strategies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-bold text-primary-700 mb-3">Done-for-You Template Library</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Member conversation scripts</li>
                  <li>• Referral tracking spreadsheets</li>
                  <li>• Staff training materials</li>
                  <li>• Email sequences that convert</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <h4 className="text-xl font-bold text-primary-700 mb-3">Implementation Checklist System</h4>
                <p className="text-gray-700">Never wonder what to do next. Clear steps from day one to day ninety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBreakdownSection;