import React from 'react';
 // Make sure to use proper icons

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">My Recent Works</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            
            
            <div className="flex justify-center gap-4 mb-12">
                <button className="project-tab-btn active px-8 py-2.5 rounded-full font-semibold text-sm transition-all bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-lg shadow-orange-500/30" data-target="all">All</button>
                <button className="project-tab-btn px-8 py-2.5 rounded-full font-semibold text-sm transition-all bg-white text-gray-700 hover:bg-gray-50 border border-gray-200" data-target="web">Web</button>
                <button className="project-tab-btn px-8 py-2.5 rounded-full font-semibold text-sm transition-all bg-white text-gray-700 hover:bg-gray-50 border border-gray-200" data-target="app">App</button>
            </div>
            
            
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=safedrivetag'">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/safedrivetag.png" onerror="this.src='./assets/fullstack.png'" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="shield" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Tailwind CSS</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Node.js</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">SafeDriveTag</h3>
                        <p className="text-gray-600 mb-4 text-sm">An e-commerce platform for smart QR emergency contact safety tags.</p>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" onClick="event.preventDefault(); event.stopPropagation(); showPrivacyModal();" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>
                
                <div data-category="app" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=syncattend'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/syncAttend.jpeg" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="award" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Flutter</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Node</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Express</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MongoDB</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">SyncAttend</h3>
                        <p className="text-gray-600 mb-4 text-sm">Attendance management App</p>
                        <div className="flex gap-4">
                            <a href="#" onClick="event.preventDefault(); event.stopPropagation(); showPrivacyModal();" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>
                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=inaamify'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/Inaamify.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="award" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Node</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Express</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MongoDB</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Inaamify WebApp</h3>
                        <p className="text-gray-600 mb-4 text-sm">Software (SAAS)</p>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" onClick="event.preventDefault(); event.stopPropagation(); showPrivacyModal();" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=cspartner'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/CSPartner.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="users" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Node</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Express</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MongoDB</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">CS Partner</h3>
                        <p className="text-gray-600 mb-4 text-sm">Web Development platform connecting partners seamlessly.</p>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" onClick="event.preventDefault(); event.stopPropagation(); showPrivacyModal();" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=aayansh'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/aayansh.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="briefcase" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Node</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Express</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MongoDB</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Aayansh 360 Services</h3>
                        <p className="text-gray-600 mb-4 text-sm">Web Development portal for 360-degree service solutions.</p>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" onClick="event.preventDefault(); event.stopPropagation(); showPrivacyModal();" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>
                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=aurapark'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/Aurapark.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="car" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">ASP.NET Core</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">C#</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MSSQL</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Bootstrap</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">AuraPark</h3>
                        <p className="text-gray-600 mb-4 text-sm">Parking Management System (Website + Admin + Super Admin).</p>
                        <div className="flex gap-4">
                            <a href="https://aurapark-v2.vercel.app/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=amber'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/amber-archive.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="shopping-cart" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React.js</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Tailwind CSS</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Amber Archives</h3>
                        <p className="text-gray-600 mb-4 text-sm">E-Commerce Website.</p>
                        <div className="flex gap-4">
                            <a href="https://amber-ecommerce.netlify.app/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=corearchive'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/core-archive.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="library" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">React</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Express</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MongoDB</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">NodeJS</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Core Archive</h3>
                        <p className="text-gray-600 mb-4 text-sm">Digital Library (Website + Admin Panel).</p>
                        <div className="flex gap-4">
                            <a href="https://core-archive.netlify.app/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=syntax'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/Syntax-academy.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="graduation-cap" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">ASP.NET Core</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">C#</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Entity Framework</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Syntax Academy</h3>
                        <p className="text-gray-600 mb-4 text-sm">Student Management System (Website + Admin Panel).</p>
                        <div className="flex gap-4">
                            <a href="https://syntax-academy.runasp.net/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=riskflight'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/risk-flight.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="book-open" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">ASP.NET Core</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">C#</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">MSSQL</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">RiskFlight</h3>
                        <p className="text-gray-600 mb-4 text-sm">Library Management System.</p>
                        <div className="flex gap-4">
                            <a href="https://library-vijy.onrender.com/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=nurture'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/nurture.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="heart" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">HTML</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">CSS</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">JavaScript</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Nurture Nest</h3>
                        <p className="text-gray-600 mb-4 text-sm">Non Government Organization Website.</p>
                        <div className="flex gap-4">
                            <a href="https://nurture-nest-foundation.netlify.app/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>

                
                

                
                <div data-category="web" className="project-card block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer" onClick="window.location.href='project-detail.html?id=portfolio'">

                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img src="./assets/fullstack.png" alt="Project Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/40 transition-all flex items-center justify-center">
                            <i data-lucide="user" className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></i>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">HTML</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">CSS</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">JS</span>
                            <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-md">Bootstrap</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Er. Yogesh Pal</h3>
                        <p className="text-gray-600 mb-4 text-sm">Personal Portfolio Website.</p>
                        <div className="flex gap-4">
                            <a href="https://yogesh-pal.netlify.app/" target="_blank" onClick="event.stopPropagation()" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 relative z-10"><i data-lucide="external-link" className="w-4 h-4"></i> View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <button id="view-more-projects-btn" className="px-8 py-3 rounded-full font-bold text-sm transition-all bg-white text-gray-800 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-500 shadow-sm hover:shadow-md flex items-center gap-2 mx-auto">
                    View More Projects <i data-lucide="chevron-down" className="w-4 h-4"></i>
                </button>
            </div>
        </div>
    </section>
    </>
  );
}
