document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const desktopLinks = document.querySelectorAll('.nav-link');
    const mobileLinksList = document.querySelectorAll('.mobile-nav-link');
    const navLogoText = document.querySelector('#navbar a.text-2xl');
    
    // Check if current page has dark theme or starts with dark hero
    const isDarkPage = document.body.classList.contains('bg-[#0a0a0a]') || 
                       document.body.classList.contains('bg-[#050505]') ||
                       document.getElementById('home') !== null;

    const isLightPage = !isDarkPage;

    // Navbar scroll effect and scroll progress bar
    window.addEventListener('scroll', () => {
        const scrollThreshold = window.innerWidth >= 768 ? 600 : 350;
        const isScrolled = window.scrollY > 50;
        
        if (navbar) {
            if (isLightPage) {
                // Light pages (projects.html, project-detail.html, experience-detail.html)
                navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-gray-100');
                navbar.classList.remove('bg-transparent');
                if (navLogoText) { navLogoText.classList.remove('text-white'); navLogoText.classList.add('text-gray-900'); }
                if (mobileMenuBtn) { mobileMenuBtn.classList.remove('text-white'); mobileMenuBtn.classList.add('text-gray-900'); }
                desktopLinks.forEach(link => {
                    if (!link.classList.contains('text-orange-600')) {
                        link.classList.remove('text-white');
                        link.classList.add('text-gray-700');
                    }
                });
            } else {
                // Dark pages or index.html with dark hero
                const isPastHero = window.scrollY > scrollThreshold;
                if (isPastHero && !document.body.classList.contains('bg-[#0a0a0a]') && !document.body.classList.contains('bg-[#050505]')) {
                    // On index.html when scrolled to white sections
                    navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-100');
                    navbar.classList.remove('bg-transparent', 'bg-[#0a0a0a]/90');
                    if (navLogoText) { navLogoText.classList.remove('text-white'); navLogoText.classList.add('text-gray-900'); }
                    if (mobileMenuBtn) { mobileMenuBtn.classList.remove('text-white'); mobileMenuBtn.classList.add('text-gray-900'); }
                } else if (isScrolled) {
                    // Dark page scrolled
                    navbar.classList.add('bg-[#0a0a0a]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-gray-800');
                    navbar.classList.remove('bg-transparent', 'bg-white/95');
                    if (navLogoText) { navLogoText.classList.remove('text-gray-900'); navLogoText.classList.add('text-white'); }
                    if (mobileMenuBtn) { mobileMenuBtn.classList.remove('text-gray-900'); mobileMenuBtn.classList.add('text-white'); }
                } else {
                    // At top of dark page
                    navbar.classList.remove('bg-white/95', 'bg-[#0a0a0a]/95', 'backdrop-blur-md', 'shadow-md', 'border-b');
                    navbar.classList.add('bg-transparent');
                    if (navLogoText) { navLogoText.classList.remove('text-gray-900'); navLogoText.classList.add('text-white'); }
                    if (mobileMenuBtn) { mobileMenuBtn.classList.remove('text-gray-900'); mobileMenuBtn.classList.add('text-white'); }
                }
            }
        }
        
        // Scroll progress
        if (scrollProgress) {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            scrollProgress.style.width = `${progress}%`;
        }
        
        // Active section highlighting for one-page navigation
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });
        
        const baseTextColor = (isLightPage || (window.scrollY > scrollThreshold && !document.body.classList.contains('bg-[#0a0a0a]') && !document.body.classList.contains('bg-[#050505]')))
            ? 'text-gray-700' : 'text-white';

        desktopLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}` || href === `index.html#${current}`) {
                link.classList.remove('text-gray-700', 'text-white');
                link.classList.add('text-orange-600');
                const span = link.querySelector('span');
                if (span) { span.classList.add('w-full'); span.classList.remove('w-0'); }
            } else if (!href.startsWith('services') && !href.startsWith('gallery')) {
                link.classList.remove('text-orange-600', 'text-gray-700', 'text-white');
                link.classList.add(baseTextColor);
                const span = link.querySelector('span');
                if (span) { span.classList.remove('w-full'); span.classList.add('w-0'); }
            }
        });

        // Mobile menu links - Always high-contrast readable
        mobileLinksList.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}` || href === `index.html#${current}`) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-orange-500', 'bg-[#1a1a1a]');
            } else {
                link.classList.remove('text-orange-500', 'bg-[#1a1a1a]');
                link.classList.add('text-gray-300');
            }
        });
    });
    
    // Initialize navbar colors on load
    window.dispatchEvent(new Event('scroll'));

    // Mobile menu toggle
    let isMenuOpen = false;
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            const currentIcon = document.getElementById('menu-icon');
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                if (currentIcon) currentIcon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.classList.add('hidden');
                if (currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
            }
            if (window.lucide) lucide.createIcons();
        });

        // Close on click outside mobile menu
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                isMenuOpen = false;
                const currentIcon = document.getElementById('menu-icon');
                if (currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
                if (window.lucide) lucide.createIcons();
            }
        });

        // Close on Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                mobileMenu.classList.add('hidden');
                isMenuOpen = false;
                const currentIcon = document.getElementById('menu-icon');
                if (currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
                if (window.lucide) lucide.createIcons();
            }
        });
    }

    // Close mobile menu when clicking a mobile link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            const currentIcon = document.getElementById('menu-icon');
            if (currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
            if (window.lucide) lucide.createIcons();
        });
    });

    // Hero typing effect
    const typeTextElement = document.querySelector('.type-text');
    const roles = [
        "Best Software Developer in Bareilly.",
        "Full Stack Web & .NET Expert.",
        "Mobile App & Cloud Architect.",
        "REST API & Database Specialist."
    ];
    let roleIndex = 0;

    if (typeTextElement) {
        setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typeTextElement.style.animation = 'none';
            typeTextElement.offsetHeight; // trigger reflow
            typeTextElement.style.animation = null; 
            typeTextElement.textContent = roles[roleIndex];
        }, 4000);
    }

    // Project Tabs & Filter Logic
    const tabBtns = document.querySelectorAll('.project-tab-btn');
    const projectCards = document.querySelectorAll('.project-card');
    let currentFilter = 'all';

    function updateProjectDisplay() {
        projectCards.forEach(card => {
            const matchesFilter = currentFilter === 'all' || card.getAttribute('data-category') === currentFilter;
            card.style.display = matchesFilter ? 'block' : 'none';
        });
    }

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
                    b.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-50', 'border', 'border-gray-200');
                });
                
                btn.classList.add('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
                btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-50', 'border', 'border-gray-200');
                
                currentFilter = btn.getAttribute('data-target') || 'all';
                updateProjectDisplay();
            });
        });
    }

    // Dynamic Project Detail Loader
    const projectDetailContainer = document.getElementById('project-detail-container');
    if (projectDetailContainer && typeof portfolioData !== 'undefined' && portfolioData.projects) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id') || 'safedrivetag';
        const project = portfolioData.projects[projectId] || portfolioData.projects['safedrivetag'];

        if (project) {
            document.title = `${project.title} - Best Software Developer in Bareilly | Yogesh Pal`;
            
            const techBadges = (project.techStack || []).map(t => 
                `<span class="text-xs sm:text-sm font-semibold bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1 rounded-full">${t}</span>`
            ).join(' ');

            projectDetailContainer.innerHTML = `
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div class="mb-8 flex items-center justify-between flex-wrap gap-4">
                        <a href="projects.html" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors">
                            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to All Projects
                        </a>
                        <span class="text-xs uppercase tracking-widest font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            ${project.category || 'Featured Work'}
                        </span>
                    </div>

                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        ${project.title}
                    </h1>

                    <div class="flex flex-wrap gap-2 mb-8">
                        ${techBadges}
                    </div>

                    <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-10 bg-gray-900 group">
                        <img src="${project.image}" alt="${project.title} Preview" onerror="this.src='./assets/fullstack.png'" class="w-full max-h-[550px] object-cover object-top hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 mb-12">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <i data-lucide="file-text" class="w-6 h-6 text-orange-500"></i> Project Overview
                        </h2>
                        <p class="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                            ${project.description}
                        </p>

                        <div class="pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                            <div class="flex items-center gap-2 text-sm text-gray-500">
                                <i data-lucide="shield-check" class="w-5 h-5 text-emerald-500"></i> Verified Production Quality
                            </div>
                            ${project.link && project.link !== '#' ? `
                                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
                                    Live Preview <i data-lucide="external-link" class="w-4 h-4"></i>
                                </a>
                            ` : `
                                <button onclick="showPrivacyModal()" class="inline-flex items-center gap-2 bg-gray-800 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-700 transition-all">
                                    Live Preview <i data-lucide="lock" class="w-4 h-4"></i>
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
        }
    }
});

// Privacy notice modal
window.showPrivacyModal = function() {
    alert("This client production project is protected by NDA / private client credentials. For a direct demonstration or codebase walkthrough, please contact Yogesh Pal.");
};

// Image Modal functionality
window.openImageModal = function(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalImg.classList.remove('scale-95');
            modalImg.classList.add('scale-100');
        }, 10);
    }
};

window.closeImageModal = function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    if (modal && modalImg) {
        modal.classList.add('opacity-0');
        modalImg.classList.remove('scale-100');
        modalImg.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }
};

// Close modal on click outside image
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });
    }
});

window.openModal = function(src, type) {
    const modal = document.getElementById('gallery-modal');
    const img = document.getElementById('modal-image');
    const vid = document.getElementById('modal-video');
    if (modal) {
        modal.classList.remove('hidden');
        if (type === 'image') {
            img.src = src;
            img.style.display = 'block';
            vid.style.display = 'none';
        } else {
            vid.src = src;
            vid.style.display = 'block';
            img.style.display = 'none';
        }
    }
};

window.closeModal = function() {
    const modal = document.getElementById('gallery-modal');
    const vid = document.getElementById('modal-video');
    if (modal) {
        modal.classList.add('hidden');
        if (vid) vid.pause();
    }
};
