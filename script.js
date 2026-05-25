document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const desktopLinks = document.querySelectorAll('.nav-link');
    const mobileLinksList = document.querySelectorAll('.mobile-nav-link');
    
    // Navbar scroll effect and scroll progress bar
    const navLogoText = document.querySelector('#navbar a.text-2xl');
    
    window.addEventListener('scroll', () => {
        // Navbar background and text colors
        const scrollThreshold = window.innerWidth >= 768 ? 700 : 550;
        const isScrolled = window.scrollY > scrollThreshold;
        const baseColor = isScrolled ? 'text-gray-700' : 'text-white';
        
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
        
        // Scroll progress
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
        
        // Active link highlighting
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        desktopLinks.forEach(link => {
            link.classList.remove('text-orange-600', 'text-gray-700', 'text-white');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-orange-600');
                
                // Add full width to the active link's underline
                const span = link.querySelector('span');
                if(span) {
                    span.classList.add('w-full');
                    span.classList.remove('w-0');
                }
            } else {
                link.classList.add(baseColor);
                const span = link.querySelector('span');
                if(span) {
                    span.classList.remove('w-full');
                    span.classList.add('w-0');
                }
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
    });
    
    // Initialize navbar colors on load
    window.dispatchEvent(new Event('scroll'));

    // Mobile menu toggle
    let isMenuOpen = false;
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        const currentIcon = document.getElementById('menu-icon');
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            if(currentIcon) currentIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('hidden');
            if(currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            const currentIcon = document.getElementById('menu-icon');
            if(currentIcon) currentIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Typing effect array update (Optional functionality for dynamic text)
    const typeTextElement = document.querySelector('.type-text');
    const roles = ["dotnet developer.", "MERN developer.","Full Stack Developer"];
    let roleIndex = 0;
    
    // Simple reset animation hack
    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        typeTextElement.style.animation = 'none';
        typeTextElement.offsetHeight; /* trigger reflow */
        typeTextElement.style.animation = null; 
        typeTextElement.textContent = roles[roleIndex];
    }, 4000);

    // Project Tabs & Pagination Logic
    const tabBtns = document.querySelectorAll('.project-tab-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const viewMoreBtn = document.getElementById('view-more-projects-btn');
    const viewMoreContainer = viewMoreBtn ? viewMoreBtn.parentElement : null;
    
    let isViewMoreExpanded = false;
    let currentFilter = 'all';

    function updateProjectDisplay() {
        let visibleCount = 0;
        let totalMatching = 0;
        
        projectCards.forEach(card => {
            const matchesFilter = currentFilter === 'all' || card.getAttribute('data-category') === currentFilter;
            
            if (matchesFilter) {
                totalMatching++;
                if (isViewMoreExpanded || visibleCount < 6) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });

        if (viewMoreContainer) {
            if (totalMatching > 6 && !isViewMoreExpanded) {
                viewMoreContainer.style.display = 'block';
            } else {
                viewMoreContainer.style.display = 'none';
            }
        }
    }

    // Initialize display
    updateProjectDisplay();

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            isViewMoreExpanded = true;
            updateProjectDisplay();
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
                b.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-50', 'border', 'border-gray-200');
            });
            
            btn.classList.add('active', 'bg-gradient-to-r', 'from-orange-500', 'to-orange-700', 'text-white', 'shadow-lg', 'shadow-orange-500/30');
            btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-50', 'border', 'border-gray-200');
            
            currentFilter = btn.getAttribute('data-target');
            isViewMoreExpanded = false; // Reset view more when changing tabs
            updateProjectDisplay();
        });
    });
});

