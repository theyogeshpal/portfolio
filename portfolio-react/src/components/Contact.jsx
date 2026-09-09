import React from 'react';
 // Make sure to use proper icons

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
                <p className="mt-6 text-gray-400">Reach Out to me! I am available in Bareilly, Uttar Pradesh.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a href="https://wa.me/917817095043" target="_blank" className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all group flex flex-col items-center text-center hover:-translate-y-1 shadow-lg cursor-pointer">
                    <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-green-500 group-hover:text-white">
                        <i data-lucide="message-circle" className="w-7 h-7"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <p className="text-gray-400 text-sm">+91 7817095043</p>
                </a>
                <a href="tel:+917817095043" className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all group flex flex-col items-center text-center hover:-translate-y-1 shadow-lg cursor-pointer">
                    <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-500 group-hover:text-white">
                        <i data-lucide="phone" className="w-7 h-7"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-1">Phone Call</h3>
                    <p className="text-gray-400 text-sm">+91 7817095043</p>
                </a>
                <a href="mailto:yogeshpal1309@gmail.com" className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all group flex flex-col items-center text-center hover:-translate-y-1 shadow-lg cursor-pointer">
                    <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-orange-500 group-hover:text-white">
                        <i data-lucide="mail" className="w-7 h-7"></i>
                    </div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">yogeshpal1309@gmail.com</p>
                </a>
            </div>

            <div className="bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700">
                <form className="space-y-6" netlify name="Contact">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input type="text" name="Name" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input type="email" name="Email" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                        <input type="text" name="Subject" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Enter subject" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea rows="4" name="Message" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                        Send Message
                        <i data-lucide="send" className="w-5 h-5"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}
