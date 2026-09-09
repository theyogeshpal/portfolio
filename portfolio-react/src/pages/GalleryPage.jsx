import React, { useState } from 'react';

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
