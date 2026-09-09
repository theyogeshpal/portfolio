const fs = require('fs');
const path = require('path');

// --- GALLERY ---
let galleryHtml = fs.readFileSync('../gallery.html', 'utf8');

function extractTag(tag, html) {
    const regex = new RegExp(`<${tag}[\\s\\S]*?</${tag}>`, 'i');
    const match = html.match(regex);
    if (!match) return '';
    let content = match[0];
    content = content.replace(/class=/g, 'className=')
                     .replace(/onclick=/g, 'onClick=')
                     .replace(/autoplay/g, 'autoPlay')
                     .replace(/onmouseover=/g, 'onMouseOver=')
                     .replace(/onmouseout=/g, 'onMouseOut=')
                     .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
                     .replace(/<br>/g, '<br />')
                     .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
                     .replace(/<!--[\s\S]*?-->/g, '');
    return content;
}

let gallerySection = extractTag('section', galleryHtml);

// Build Gallery component manually to handle state
const galleryComponent = `import React, { useState } from 'react';

export default function GalleryPage() {
    const [modal, setModal] = useState({ isOpen: false, src: '', type: '' });

    const openModal = (src, type) => {
        setModal({ isOpen: true, src, type });
        if(window.lucide) setTimeout(window.lucide.createIcons, 100);
    };

    const closeModal = () => {
        setModal({ ...modal, isOpen: false });
    };

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <section id="gallery" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">My Gallery</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        
                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[3/4] cursor-pointer" onClick={() => openModal('/assets/gallary/img-1.png', 'image')}>
                            <img src="/assets/gallary/img-1.png" alt="Gallery Image 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2"><i data-lucide="image" className="w-4 h-4"></i> Photo</span>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[3/4] cursor-pointer" onClick={() => openModal('/assets/gallary/img-5.jpeg', 'image')}>
                            <img src="/assets/gallary/img-5.jpeg" alt="Gallery Image 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2"><i data-lucide="image" className="w-4 h-4"></i> Photo</span>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[3/4] cursor-pointer" onClick={() => openModal('/assets/gallary/img-6.jpeg', 'image')}>
                            <img src="/assets/gallary/img-6.jpeg" alt="Gallery Image 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2"><i data-lucide="image" className="w-4 h-4"></i> Photo</span>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[3/4] cursor-pointer" onClick={() => openModal('/assets/gallary/img-7.jpeg', 'image')}>
                            <img src="/assets/gallary/img-7.jpeg" alt="Gallery Image 7" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2"><i data-lucide="image" className="w-4 h-4"></i> Photo</span>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[3/4] cursor-pointer" onClick={() => openModal('https://ik.imagekit.io/typ1309/Video%20Project%2011.mp4', 'video')}>
                            <video autoPlay loop src="https://ik.imagekit.io/typ1309/Video%20Project%2011.mp4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" muted onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()}></video>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg">
                                    <i data-lucide="play" className="w-6 h-6 fill-white"></i>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                                <span className="text-white font-semibold flex items-center gap-2"><i data-lucide="video" className="w-4 h-4"></i> Video</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {modal.isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300" onClick={closeModal}>
                    <button onClick={closeModal} className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors z-[101]">
                        <i data-lucide="x" className="w-10 h-10"></i>
                    </button>
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
                        {modal.type === 'image' ? (
                            <img src={modal.src} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                        ) : (
                            <video src={modal.src} controls autoPlay className="max-w-full max-h-[85vh] rounded-lg shadow-2xl outline-none"></video>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
`;

fs.writeFileSync('./src/pages/GalleryPage.jsx', galleryComponent);

// --- PROJECT DETAIL ---
const projectDetailComponent = `import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch project from data.js
        if (id && portfolioData.projects[id]) {
            setProject(portfolioData.projects[id]);
        }
        window.scrollTo(0, 0);
        if(window.lucide) setTimeout(window.lucide.createIcons, 100);
    }, [id]);

    if (!project) {
        return (
            <div className="pt-32 min-h-screen text-center bg-gray-50 flex flex-col items-center justify-center">
                <i data-lucide="alert-circle" className="w-16 h-16 text-gray-400 mb-4"></i>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Not Found</h1>
                <p className="text-gray-600 mb-6">The project you are looking for does not exist or has been removed.</p>
                <Link to="/#projects" className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <section className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-8 transition-colors">
                        <i data-lucide="arrow-left" className="w-5 h-5"></i> Back to Projects
                    </Link>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                        <div className="h-64 md:h-96 bg-gray-900 relative overflow-hidden group">
                            <img src={"/" + project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-600 text-white p-2.5 rounded-xl shadow-lg">
                                        <i data-lucide={project.imageIcon} className="w-6 h-6"></i>
                                    </div>
                                    <span className="text-orange-400 font-semibold tracking-wider text-sm uppercase">{project.category}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm border border-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                    {project.description}
                                </p>
                            </div>

                            <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                <p className="text-gray-500 font-medium">Ready to see it in action?</p>
                                {project.link !== '#' ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                        Visit Live Site <i data-lucide="external-link" className="w-5 h-5"></i>
                                    </a>
                                ) : (
                                    <span className="w-full sm:w-auto bg-gray-300 text-gray-500 px-8 py-3.5 rounded-full font-bold cursor-not-allowed flex items-center justify-center gap-2">
                                        Link Not Available <i data-lucide="lock" className="w-5 h-5"></i>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
`;

fs.writeFileSync('./src/pages/ProjectDetailPage.jsx', projectDetailComponent);
console.log('Pages generated');
