const fs = require('fs');

let code = fs.readFileSync('src/components/Services.jsx', 'utf8');

const pricingSection = `
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
                        <span className="text-4xl font-black text-gray-900">$499</span>
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
                        <span className="text-4xl font-black text-white">$1,499</span>
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
`;

code = code.replace('{/* CTA Section */}', pricingSection + '\n      {/* CTA Section */}');
fs.writeFileSync('src/components/Services.jsx', code);
