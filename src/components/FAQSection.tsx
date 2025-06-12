import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How quickly will I see results from the Gym Referral Booster?",
    answer: "Most fitness center owners start seeing new referrals within the first 2-3 weeks. The system is designed to create momentum fast. You'll implement the foundation in week one, activate your first referral campaigns in week two, and typically see your first wave of new members by week three."
  },
  {
    question: "What if my current members aren't the type to make referrals?",
    answer: "This is actually the most common concern we hear. Here's the thing: your members aren't making referrals because of Referral Resistance Syndrome, not because they don't want to help. Our Neural Reframing approach removes those mental blocks. Even the quietest, most reserved members start making referrals when you eliminate their psychological barriers."
  },
  {
    question: "Do I need expensive software or complicated systems to make this work?",
    answer: "Not at all. The beauty of this system is its simplicity. You'll use basic tracking tools that most gyms already have or can get for free. We provide templates and checklists that work with simple spreadsheets or basic CRM systems. No fancy tech required."
  },
  {
    question: "How much time will this take away from running my gym?",
    answer: "The initial setup takes about 2-3 hours per week for the first month. After that, the system runs mostly on autopilot. Most owners spend just 30 minutes per week monitoring and adjusting. The time investment pays back quickly when you're getting 20+ new members monthly."
  },
  {
    question: "What if I've tried referral programs before and they failed?",
    answer: "Past failures usually happen because of three missing pieces: proper member psychology, systematic follow-up, and compelling incentives. Our system addresses all three. Plus, we show you exactly why previous attempts failed so you avoid those mistakes."
  },
  {
    question: "Will this work for my specific type of fitness center?",
    answer: "The system works for CrossFit boxes, traditional gyms, boutique studios, martial arts schools, and specialty fitness centers. We've tested it across different demographics and price points. The core psychology of referrals remains the same regardless of your specific niche."
  },
  {
    question: "How do I know my staff will actually implement this?",
    answer: "We provide complete staff training materials, including scripts, role-playing exercises, and clear job responsibilities. Most importantly, we show your team how referrals make their jobs easier by bringing in pre-qualified, motivated members who are easier to work with."
  },
  {
    question: "What's included in my investment and are there hidden costs?",
    answer: "Your investment includes the complete 6-module video course, all templates and checklists, private community access, and valuable bonuses worth over $800. There are no hidden costs or upsells. Everything you need is included."
  },
  {
    question: "How is this different from generic marketing advice?",
    answer: "This system is built specifically for fitness centers. Generic marketing ignores the unique psychology of gym members and the specific challenges of fitness businesses. Our approach addresses the exact referral barriers that fitness members face, using language and incentives that work in your industry."
  },
  {
    question: "Can I implement this if I'm not tech-savvy?",
    answer: "Absolutely. The system is designed for busy gym owners, not tech experts. Everything is explained in simple, step-by-step instructions. If you can send an email and use basic spreadsheets, you can implement this system successfully."
  },
  {
    question: "What happens after the 90 days?",
    answer: "The system becomes a permanent part of your business operations. You'll have a referral machine that continues generating new members month after month. Many owners see their referral numbers continue growing even after the initial 90-day period as word spreads and momentum builds."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-medium text-lg focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-gray-900">{item.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={20} /> : 
                    <ChevronDown className="text-gray-600 flex-shrink-0" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;