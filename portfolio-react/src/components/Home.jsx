import React from 'react';
 // Make sure to use proper icons

export default function Home() {
  return (
    <>
      <section id="home" className="relative pt-20 pb-28 md:pt-36 md:pb-36 px-4 bg-[#0a0a0a] overflow-hidden min-h-[95vh] flex items-center">
        
        <div className="absolute bottom-0 right-0 h-[85%] md:h-[95%] w-full flex justify-end items-end z-0 translate-x-[25%] md:translate-x-[25%] opacity-60 md:opacity-100 pointer-events-none">
            <img src="assets/hero-image.png" alt="Yogesh Pal" className="h-full w-auto object-contain object-bottom grayscale opacity-90 mix-blend-luminosity scale-[1.4] sm:scale-[1.2] md:scale-100 origin-bottom-right" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="w-full md:w-[65%] lg:w-[60%] text-center md:text-left mx-auto md:mx-0">
                <div className="text-2xl text-gray-400 mb-6" style="font-family: 'Caveat', cursive;">
                    Yogesh Pal
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 font-mono leading-tight">
                    I am a<br />
                    <span className="type-text text-gray-300 block mt-4">DotNet developer.</span>
                </h1>
                <p className="text-lg text-gray-400 text-justify mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-semibold">
                    Bringing your ideas to life with clean, efficient, and scalable code. Whether it's building robust web apps, optimizing backend performance, or solving complex technical challenges.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <a href="assets/YogeshPalCV.pdf" download className="text-white px-8 py-3 hover:text-gray-300 transition-all font-semibold text-sm flex items-center gap-2">
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </a>
                    <a href="#contact" className="bg-[#2a2a2a] text-white px-8 py-3 rounded hover:bg-[#3a3a3a] transition-all font-semibold text-sm">
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
