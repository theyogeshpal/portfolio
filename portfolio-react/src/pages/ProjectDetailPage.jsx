import React, { useEffect, useState } from 'react';
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
