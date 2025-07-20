import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 mb-16">
                        <div className="md:col-span-1 lg:col-span-1">
                            <h3 className="text-xl font-bold mb-4">Gym Referral Booster</h3>
                            <p className="text-gray-400 mb-6">
                                Helping fitness center owners transform happy members into their best sales team.
                            </p>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                    <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright section */}
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        © {currentYear} Gym Referral Booster. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;