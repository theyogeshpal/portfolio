import React, { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    if(window.lucide) setTimeout(window.lucide.createIcons, 100);
  }, []);

  const services = [
    {
      id: "01",
      title: "Custom Web Application Development",
      description: "End-to-end web solutions built with modern frameworks. We deliver scalable, secure, and lightning-fast web apps tailored to your business needs.",
      techStack: "React.js • Next.js • Tailwind CSS • Vite",
      icon: "layout",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "02",
      title: "Mobile App Development",
      description: "High-performance native and cross-platform mobile applications for iOS and Android that provide seamless user experiences and robust functionality.",
      techStack: "React Native • Flutter • iOS • Android",
      icon: "smartphone",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: "03",
      title: "Backend & API Architecture",
      description: "Robust, secure, and scalable backend systems and REST/GraphQL APIs that power your applications and handle thousands of concurrent users.",
      techStack: "Node.js • ASP.NET Core • Express • MongoDB • SQL",
      icon: "server",
      color: "from-emerald-500 to-teal-700"
    },
    {
      id: "04",
      title: "E-Commerce Solutions",
      description: "Conversion-optimized online stores and digital marketplaces with secure payment gateways, inventory management, and intuitive admin dashboards.",
      techStack: "MERN Stack • Shopify • Stripe Integration",
      icon: "shopping-bag",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "05",
      title: "UI/UX Design & Prototyping",
      description: "User-centric interface designs that captivate audiences. We turn complex ideas into beautiful, intuitive, and pixel-perfect digital experiences.",
      techStack: "Figma • Adobe XD • Wireframing • User Research",
      icon: "pen-tool",
      color: "from-rose-500 to-red-700"
    },
    {
      id: "06",
      title: "Cloud Deployment & DevOps",
      description: "Automated CI/CD pipelines, secure cloud hosting, and infrastructure setup to ensure your applications have 99.9% uptime and scale effortlessly.",
      techStack: "AWS • Azure • Vercel • Docker • GitHub Actions",
      icon: "cloud",
      color: "from-cyan-500 to-blue-700"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Transforming your ideas into scalable, high-performance web and mobile applications that drive real business growth.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all">
                Start a Project <i data-lucide="arrow-right" className="w-5 h-5"></i>
            </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Development Services</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                    <i data-lucide={service.icon} className="w-7 h-7"></i>
                                </div>
                                <div className="text-gray-200 font-black text-5xl opacity-40">{service.id}</div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            
                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tech Stack</p>
                                <p className="text-sm font-semibold text-gray-800">{service.techStack}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      
      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                <p className="text-lg text-gray-600 mb-6">Choose the perfect plan for your next digital project.</p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                    <p className="text-gray-500 mb-6">Perfect for small businesses and personal portfolios.</p>
                    <div className="mb-8">
                        <span className="text-4xl font-black text-gray-900">$99</span>
                        <span className="text-gray-500 font-medium">/project</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Up to 5 Pages
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Responsive Design
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Basic SEO Optimization
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> 1 Month Support
                        </li>
                    </ul>
                    <a href="/#contact" className="block w-full text-center bg-gray-100 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">Get Started</a>
                </div>

                {/* Professional Plan - Highlighted */}
                <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800 transform md:-translate-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                    <p className="text-gray-400 mb-6">Ideal for growing companies and e-commerce stores.</p>
                    <div className="mb-8">
                        <span className="text-4xl font-black text-white">$499</span>
                        <span className="text-gray-400 font-medium">/project</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-300">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-orange-500"></i> Custom Web/App Solution
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-orange-500"></i> Frontend + Backend (MERN/.NET)
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-orange-500"></i> Payment Gateway Integration
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-orange-500"></i> Advanced UI/UX & Animations
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-orange-500"></i> 3 Months Support
                        </li>
                    </ul>
                    <a href="/#contact" className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all">Get Started</a>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-gray-500 mb-6">For large scale systems and cloud architecture.</p>
                    <div className="mb-8">
                        <span className="text-4xl font-black text-gray-900">Custom</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Microservices Architecture
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Cloud Infrastructure (AWS/Azure)
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> DevOps & CI/CD
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                            <i data-lucide="check-circle-2" className="w-5 h-5 text-emerald-500"></i> Dedicated Team
                        </li>
                    </ul>
                    <a href="/#contact" className="block w-full text-center bg-gray-100 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">Contact Us</a>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 text-center px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your business?</h2>
            <p className="text-gray-400 text-lg mb-10">Let's collaborate to build digital products that leave a lasting impact. Whether you need a simple website or a complex enterprise app, we've got you covered.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                Let's Talk <i data-lucide="message-square" className="w-5 h-5"></i>
            </a>
        </div>
      </section>
    </div>
  );
}
