import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  useEffect(() => {
    if(window.lucide) setTimeout(window.lucide.createIcons, 100);
  }, []);

  return (
    <footer className="bg-[#050505] text-gray-400 pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand Section */}
                <div className="lg:col-span-1">
                    <Link to="/#home" className="text-3xl font-bold text-white tracking-tight flex items-center gap-1 mb-6">
                        <span className="text-orange-600">Yogesh</span>Pal
                    </Link>
                    <p className="text-sm leading-relaxed mb-8 text-gray-500">
                        A full-stack development agency dedicated to building high-performance, scalable, and user-centric digital products for modern businesses.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <i data-lucide="github" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <i data-lucide="linkedin" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <i data-lucide="twitter" className="w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                    <ul className="space-y-4">
                        <li><Link to="/#about" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> About Us</Link></li>
                        <li><Link to="/#projects" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> Our Work</Link></li>
                        <li><Link to="/gallery" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> Gallery</Link></li>
                        <li><Link to="/#contact" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                    <ul className="space-y-4">
                        <li><Link to="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> Web Development</Link></li>
                        <li><Link to="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> Mobile Apps</Link></li>
                        <li><Link to="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> UI/UX Design</Link></li>
                        <li><Link to="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2"><i data-lucide="chevron-right" className="w-4 h-4"></i> E-Commerce</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
                    <p className="text-sm text-gray-500 mb-4">Subscribe to get the latest insights and updates.</p>
                    <form className="flex flex-col gap-3">
                        <input type="email" placeholder="Email address" className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-white" />
                        <button type="button" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Yogesh Pal. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
