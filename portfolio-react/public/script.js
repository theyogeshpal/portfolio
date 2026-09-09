let scrollHandler, clickHandler, typeInterval;

window.initPortfolioScript = () => {
    // Clean up old listeners
    if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
    if (clickHandler) document.removeEventListener('click', clickHandler);
    if (typeInterval) clearInterval(typeInterval);

    scrollHandler = () => {
        const navbar = document.getElementById('navbar');
        const scrollProgress = document.getElementById('scroll-progress');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLogoText = document.querySelector('#navbar a.text-2xl');
        const desktopLinks = document.querySelectorAll('.nav-link');
        const mobileLinksList = document.querySelectorAll('.mobile-nav-link');
        
        const scrollThreshold = window.innerWidth >= 768 ? 700 : 550;
        const isScrolled = window.scrollY > scrollThreshold;
        const baseColor = isScrolled ? 'text-gray-700' : 'text-white';
        
        if (navbar) {
            if (isScrolled) {
                navbar.classList.add('bg-white/98', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-100');
                navbar.classList.remove('bg-transparent');
                if(navLogoText) { navLogoText.classList.remove('text-white'); navLogoText.classList.add('text-gray-900'); }
                if(mobileMenuBtn) { mobileMenuBtn.classList.remove('text-white'); mobileMenuBtn.classList.add('text-gray-900'); }
            } else {
                navbar.classList.remove('bg-white/98', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-100');
                navbar.classList.add('bg-transparent');
                if(navLogoText) { navLogoText.classList.remove('text-gray-900'); navLogoText.classList.add('text-white'); }
                if(mobileMenuBtn) { mobileMenuBtn.classList.remove('text-gray-900'); mobileMenuBtn.classList.add('text-white'); }
            }
        }
        
        if (scrollProgress) {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            scrollProgress.style.width = `${progress}%`;
        }
        
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        desktopLinks.forEach(link => {
            link.classList.remove('text-orange-600', 'text-gray-700', 'text-white');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-orange-600');
                const span = link.querySelector('span');
                if(span) { span.classList.add('w-full'); span.classList.remove('w-0'); }
            } else {
                link.classList.add(baseColor);
                const span = link.querySelector('span');
                if(span) { span.classList.remove('w-full'); span.classList.add('w-0'); }
            }
        });

        mobileLinksList.forEach(link => {
            link.classList.remove('text-orange-600', 'text-gray-700', 'text-white');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-orange-600');
            } else {
                link.classList.add('text-gray-700');
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    // Global Click Handler for dynamic elements
    clickHandler = (e) => {
        // Mobile Menu
        const mobileBtn = e.target.closest('#mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        
        if (mobileBtn && mobileMenu) {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                if(menuIcon) menuIcon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.classList.add('hidden');
                if(menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
            }
            if(window.lucide) window.lucide.createIcons();
        }

        if (e.target.closest('.mobile-nav-link') && mobileMenu) {
            mobileMenu.classList.add('hidden');
            if(menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
            if(window.lucide) window.lucide.createIcons();
        }

        // Project Tabs
        const tabBtn = e.target.closest('.project-tab-btn');
        if (tabBtn) {
            document.querySelectorAll('.project-tab-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            tabBtn.classList.remove('bg-white', 'text-gray-700');
            tabBtn.classList.add('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
            
            const target = tabBtn.getAttribute('data-target');
            document.querySelectorAll('.project-card').forEach(card => {
                if (target === 'all' || card.getAttribute('data-category') === target) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        }
    };
    
    document.addEventListener('click', clickHandler);

    // Typing effect
    const typeTextElement = document.querySelector('.type-text');
    if (typeTextElement) {
        const roles = ["dotnet developer.", "MERN developer.", "Full Stack Developer"];
        let roleIndex = 0;
        typeInterval = setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typeTextElement.style.animation = 'none';
            typeTextElement.offsetHeight; /* trigger reflow */
            typeTextElement.style.animation = null; 
            typeTextElement.textContent = roles[roleIndex];
        }, 4000);
    }
};

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
