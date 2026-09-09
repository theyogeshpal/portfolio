import React from 'react';

export default function Nav() {
  return (
    <>
      <nav id="navbar" className="fixed w-full z-50 transition-all duration-300 top-0">
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <div id="scroll-progress" className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 w-0 transition-all duration-150 shadow-lg shadow-orange-500/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center">
                    <a href="/#" className="text-2xl font-bold text-gray-900 group">
                        <span className="text-orange-600">Yogesh</span>Pal
                    </a>
                </div>
                
                
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="/#home" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">Home<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/#about" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">About<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/#experience" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">Experience<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/#projects" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">Projects<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/services" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">Services<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/gallery" className="nav-link text-gray-700 hover:text-orange-600 font-semibold relative group py-1">Gallery<span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full w-0 group-hover:w-full transition-all duration-300"></span></a>
                    <a href="/#contact" className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-[15px] flex items-center gap-2 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all">
                        Let's Talk
                        <i data-lucide="message-circle" className="w-4 h-4"></i>
                    </a>
                </div>

                
                <div className="md:hidden flex items-center">
                    <button id="mobile-menu-btn" className="text-gray-700 hover:text-orange-600 focus:outline-none p-1">
                        <i data-lucide="menu" id="menu-icon"></i>
                    </button>
                </div>
            </div>
        </div>

        
        <div id="mobile-menu" className="hidden md:hidden bg-[#0a0a0a] border-t border-gray-800 absolute w-full shadow-2xl h-screen overflow-y-auto pb-20">
            <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="/#home" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">Home</a>
                <a href="/#about" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">About</a>
                <a href="/#experience" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">Experience</a>
                <a href="/#projects" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">Projects</a>
                <a href="/services" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">Services</a>
                <a href="/gallery" className="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-300 hover:text-orange-600 hover:bg-[#1a1a1a]">Gallery</a>

                <a href="/#contact" className="flex mt-4 justify-center items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-full font-semibold">
                    Let's Talk
                    <i data-lucide="message-circle" className="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </nav>
    </>
  );
}
