import React from 'react';

const OpportunitySection: React.FC = () => {
  return (
    <section id="opportunity" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
            But what if you could <span className="text-primary-600">flip that switch?</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p className="text-xl font-medium">
              What if your members became excited to bring friends instead of scared?
            </p>
            
            <div className="bg-primary-600 text-white p-6 rounded-lg my-8">
              <p className="text-2xl font-bold mb-2">
                That's exactly what Neural Reframing does.
              </p>
              <p>
                It's not about bribing people with free stuff. It's not about teaching them sales scripts.
              </p>
              <p className="mt-4 font-medium">
                Neural Reframing removes the mental blocks that stop referrals from happening naturally.
              </p>
            </div>
            
            <p>
              Think about it like this...
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 my-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-medium">When someone watches a great movie, they can't wait to tell their friends.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <p className="font-medium">When they find an amazing restaurant, they share it immediately.</p>
              </div>
            </div>
            
            <p className="text-xl font-medium text-red-600">
              But mention their gym? Suddenly they freeze up.
            </p>
            
            <p className="text-xl font-semibold text-primary-600">
              Neural Reframing fixes that broken connection.
            </p>
            
            <div className="mt-10 mb-12">
              <p className="font-semibold text-lg mb-4">
                We've tested this with over 47 fitness centers. The results speak for themselves:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-500">
                  <p className="text-3xl font-bold text-primary-600 mb-2">23+</p>
                  <p className="font-medium text-gray-700">new referrals per month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-500">
                  <p className="text-3xl font-bold text-primary-600 mb-2">67%</p>
                  <p className="font-medium text-gray-700">higher member retention rates</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-500">
                  <p className="text-3xl font-bold text-primary-600 mb-2">40%</p>
                  <p className="font-medium text-gray-700">lower cost per new member</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-500">
                  <p className="text-3xl font-bold text-primary-600 mb-2">100%</p>
                  <p className="font-medium text-gray-700">members who actually ask to bring friends</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 border-l-4 border-bg-pimary-600 p-6 my-8">
              <p className="mb-3">One gym owner in Texas went from 3 referrals in six months to 31 referrals in 30 days.</p>
              <p>Another in Florida doubled their membership in 90 days using only referrals.</p>
            </div>
            
            <p className="font-medium">
              The difference? They stopped fighting their members' psychology and started working with it.
            </p>
            
            <p>
              Your members want to help you succeed. They want their friends to get the same results they're getting.
            </p>
            
            <p className="text-xl font-semibold text-primary-600 mt-8">
              Neural Reframing just makes it feel natural again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;