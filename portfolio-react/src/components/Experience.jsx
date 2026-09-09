import React from 'react';
 // Make sure to use proper icons

export default function Experience() {
  return (
    <>
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            
            
            <div className="max-w-3xl mx-auto space-y-8">
                
                <a href="experience-detail.html" className="block bg-gray-50 p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 relative hover:shadow-lg transition-all group cursor-pointer">
                    <div className="flex flex-col md:flex-row gap-5 mb-4 items-start md:items-center">
                        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img src="assets/digicoders-logo-circle.png" alt="Digicoders Technologies" className="w-16 h-16 object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Dot Net Developer</h3>
                                <span className="text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full text-sm inline-block mt-2 md:mt-0">2025 - Present</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-700">Digicoders Technologies Pvt. Ltd. | Lucknow, UP</h4>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4">Working on ASP.NET Core MVC projects, developing REST APIs, and creating responsive web applications.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">ASP.NET Core</span>
                        <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">C#</span>
                        <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">MSSQL</span>
                        <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">Entity Framework</span>
                        <span className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-md">Bootstrap</span>
                    </div>
                </a>
            </div>

            <div className="text-center mb-10 mt-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Training & Certifications</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-all flex flex-col items-center text-center">
                    <div className="bg-gray-50 p-3 rounded-xl shadow-sm border border-gray-100 mb-4 cursor-pointer overflow-hidden inline-block">
                        <img src="assets/summer-training.jpeg" alt="Summer Training Certificate" className="w-32 h-24 object-contain hover:scale-110 transition-transform duration-500" onClick="openImageModal(this.src)" />
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-between">
                        <div>
                            <span className="text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full text-xs mb-3 inline-block">2025</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Summer Training (45 Days)</h3>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Digicoders Technologies Pvt. Ltd.</h4>
                            <p className="text-gray-600 text-sm mb-4">Completed intensive training specializing in Dot Net Core development and earned the "Star Performance Award".</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-all flex flex-col items-center text-center">
                    <div className="bg-gray-50 p-3 rounded-xl shadow-sm border border-gray-100 mb-4 cursor-pointer overflow-hidden inline-block">
                        <img src="assets/ADIT.jpeg" alt="ADIT Certificate" className="w-32 h-24 object-contain hover:scale-110 transition-transform duration-500" onClick="openImageModal(this.src)" />
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-between">
                        <div>
                            <span className="text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full text-xs mb-3 inline-block">2023</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Advanced Diploma in IT</h3>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Institute of Computer Education</h4>
                            <p className="text-gray-600 text-sm mb-4">Successfully completed 15 months Advanced diploma in Information Technology, gaining deep knowledge in software development and IT infrastructure.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-all flex flex-col items-center text-center">
                    <div className="bg-gray-50 p-3 rounded-xl shadow-sm border border-gray-100 mb-4 cursor-pointer overflow-hidden inline-block">
                        <img src="assets/li-fi&wi-fi.jpeg" alt="Workshop Certificate" className="w-32 h-24 object-contain hover:scale-110 transition-transform duration-500" onClick="openImageModal(this.src)" />
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-between">
                        <div>
                            <span className="text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full text-xs mb-3 inline-block">2023</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Li-Fi & Wi-Fi Workshop</h3>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Institute of Computer Education, Bareilly</h4>
                            <p className="text-gray-600 text-sm mb-4">Received Certificate of Appreciation in Li-Fi & Wi-Fi Workshop organized by the Institute of Computer Education, Bareilly.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  );
}
