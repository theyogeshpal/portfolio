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
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
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
