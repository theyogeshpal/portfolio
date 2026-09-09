import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    if(window.lucide) setTimeout(window.lucide.createIcons, 100);
  }, []);

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Let's Build Something Great</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ready to transform your digital presence? We are here to help you turn your vision into reality.
                </p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-6 md:p-10 border border-gray-100">
                {/* Left Contact Info */}
                <div className="lg:col-span-2 bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 mb-12">
                        <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
                        <p className="text-gray-400">Fill up the form and our team will get back to you within 24 hours.</p>
                    </div>

                    <div className="space-y-8 relative z-10 flex-grow">
                        <a href="tel:+917817095043" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <i data-lucide="phone" className="w-5 h-5"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Call Us Directly</p>
                                <p className="font-semibold">+91 7817095043</p>
                            </div>
                        </a>
                        
                        <a href="mailto:yogeshpal1309@gmail.com" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <i data-lucide="mail" className="w-5 h-5"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Email Address</p>
                                <p className="font-semibold">yogeshpal1309@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 group cursor-default">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <i data-lucide="map-pin" className="w-5 h-5"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Location</p>
                                <p className="font-semibold">Bareilly, Uttar Pradesh, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12 relative z-10">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                            <i data-lucide="github" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                            <i data-lucide="linkedin" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                            <i data-lucide="twitter" className="w-5 h-5"></i>
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-3 p-4 md:p-8">
                    <form className="space-y-6" name="Contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="Contact" />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input type="text" name="FirstName" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="John" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input type="text" name="LastName" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" name="Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="john@company.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" name="Phone" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Subject / Project Type</label>
                            <input type="text" name="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder="e.g. E-Commerce Website Development" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea rows="4" name="Message" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none" placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            Send Message
                            <i data-lucide="send" className="w-5 h-5"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
