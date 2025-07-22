import React from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const ValuePropositionSection: React.FC = () => {
  return (
    <section id="value-proposition" className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4">
              Stop watching competitors steal your members
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your gym has everything members want. Great equipment. Clean facilities. Friendly staff.
              But somehow... other gyms keep growing while yours stays the same.
            </p>
          </div>
          
          <p className="text-2xl font-semibold text-center mb-12">
            Here's what changes when you use our proven referral system:
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <Users className="text-yellow-300 mr-3" size={28} />
                <h3 className="text-xl font-bold uppercase">Turn happy members into your sales team</h3>
              </div>
              <p className="text-white/90">
                Your best members already love your gym. They just need the right push to tell their friends. 
                Our system gives them that push. No awkward conversations. No pushy sales tactics. 
                Just natural sharing that feels good for everyone.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-yellow-300 mr-3" size={28} />
                <h3 className="text-xl font-bold uppercase">Get 20+ new members every month</h3>
              </div>
              <p className="text-white/90">
                Stop hoping for growth. Start expecting it. Our clients see an average of 20-30 new referral 
                members monthly within 90 days. That's 240-360 new members per year. All from people your 
                current members already know and trust.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <DollarSign className="text-yellow-300 mr-3" size={28} />
                <h3 className="text-xl font-bold uppercase">Slash your marketing costs in half</h3>
              </div>
              <p className="text-white/90">
                Referred members cost 80% less than traditional advertising. They stay longer. They spend more. 
                And they refer others too. It's like having a money machine that keeps printing new 
                members while you sleep.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-300 mr-3" size={28} />
                <h3 className="text-xl font-bold uppercase">Become the gym everyone talks about</h3>
              </div>
              <p className="text-white/90">
                When members love referring friends, your reputation spreads fast. You become known as the 
                gym that gets results. The place where people actually want to work out. Soon, 
                you'll have a waiting list instead of empty equipment.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://whop.com/gym-referral-booster/?store=true"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-primary-900 font-bold py-4 px-10 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              I WANT THESE RESULTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;