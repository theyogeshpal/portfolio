import React from 'react';
 // Make sure to use proper icons

export default function Services() {
  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Crafting Digital Excellence</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Star-Performing Full Stack Solutions That Drive Business Growth</p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full mt-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                    <div className="text-orange-600 font-black text-4xl mb-4 opacity-30">01</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Full-Stack Web Solutions</h3>
                    <p className="text-gray-600 mb-4">Enterprise-grade applications built with ASP.NET Core & Spring Boot. Scalable architecture designed for growing businesses with seamless performance.</p>
                    <p className="text-sm font-semibold text-gray-800">Built with: ASP.NET Core • Spring Boot • Entity Framework • MySQL</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                    <div className="text-orange-600 font-black text-4xl mb-4 opacity-30">02</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Frontend & Animations</h3>
                    <p className="text-gray-600 mb-4">Stunning React.js interfaces with GSAP-powered animations. Visual excellence that captivates users and elevates brand perception instantly.</p>
                    <p className="text-sm font-semibold text-gray-800">Built with: React.js • GSAP • AOS • JavaScript ES6+</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                    <div className="text-orange-600 font-black text-4xl mb-4 opacity-30">03</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Robust Backend & API Architecture</h3>
                    <p className="text-gray-600 mb-4">High-performance REST APIs with optimized database design. Secure, scalable backend systems that handle millions of requests effortlessly.</p>
                    <p className="text-sm font-semibold text-gray-800">Built with: REST APIs • MSSQL • MySQL • Postman • JWT</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                    <div className="text-orange-600 font-black text-4xl mb-4 opacity-30">04</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">UI/UX & Responsive Design</h3>
                    <p className="text-gray-600 mb-4">Pixel-perfect, mobile-first layouts that work flawlessly across all devices. User-centric design that converts visitors into loyal customers.</p>
                    <p className="text-sm font-semibold text-gray-800">Built with: Tailwind CSS • Bootstrap 5 • Responsive Grid • Flexbox</p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
