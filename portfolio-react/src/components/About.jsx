import React from 'react';
 // Make sure to use proper icons

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6 text-lg text-gray-600 text-justify leading-relaxed">
                    <p>
                        Hello! I'm <strong>Yogesh Pal</strong>, a dedicated Full Stack Developer and CSE student with a passion for building high-performance web applications. My expertise spans across the entire development lifecycle, from architecting robust backends using ASP.NET Core and Spring Boot to crafting modern, responsive frontends with React.js, Tailwind CSS, and Bootstrap.
                    </p>
                    <p>
                        I specialize in creating seamless user experiences powered by efficient Rest APIs and SQL databases (MSSQL & MySQL). My technical toolkit is further enhanced by advanced animation libraries like GSAP and AOS, ensuring every project I deliver is not just functional, but visually exceptional.
                    </p>
                    <p>
                        Awarded the "Star Performance" honor at Digicoders Technologies, I bring a proven track record of dedication, logical problem-solving, and rapid skill acquisition to every challenge. I thrive on turning complex ideas into scalable, production-ready reality.
                    </p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-orange-500 pl-4">Strengths</h3>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li>Logical and Analytical ability for new project and application.</li>
                        <li>Good verbal and presentation skills.</li>
                        <li>A quick learner and eager to up to date in IT industry with Programming language Development tools.</li>
                        <li>Public Speaking and Presentation Skills.</li>
                    </ul>
                </div>
                
                <div className="flex-1 relative w-full md:pl-8">
                    <div className="absolute inset-0 bg-orange-100 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                        <img src="assets/P1119422.JPG" alt="About Yogesh Pal" className="w-full h-[750px] object-cover object-top hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
