// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("UJJWAL Portfolio Initialized");

    // Smooth Scroll Implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Theme Toggle
    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    };
    window.toggleTheme = toggleTheme;

    // Contact Button Visual Response
    const contactBtn = document.querySelector('header button');
    contactBtn?.addEventListener('mouseenter', () => {
        gsap.to(contactBtn, {
            letterSpacing: '0.2rem',
            duration: 0.3,
            ease: "power2.out"
        });
    });

    contactBtn?.addEventListener('mouseleave', () => {
        gsap.to(contactBtn, {
            letterSpacing: '0.1rem',
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Terminal Logic - Interactive Hero Component
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    const termBody = document.getElementById('terminal-body');

    if (termInput && termOutput && termBody) {
        const commands = {
            'help': 'Available commands: [bio], [stack], [philosophy], [contact], [clear]',
            'bio': 'UJJWAL: Senior SEO Specialist & Full-Stack Developer based in Nepal. Expertise in search engine dominance and technical infrastructure since 2018.',
            'stack': 'V2.0: Next.js, SEO Strategy, AEO/GEO, Python, Tailwind CSS, GSAP, Database Architecture.',
            'philosophy': '"Data-driven visibility is the foundation of digital dominance. Code must be both high-performance and search-discoverable."',
            'contact': 'EMAIL: ujr.work@gmail.com | WHATSAPP: +977 9826304766 | SITE: ujjwalrupakheti.com.np',
            'clear': 'CLEAR'
        };

        termInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = termInput.value.toLowerCase().trim();
                
                // Add user query to output
                const userLine = document.createElement('div');
                userLine.innerHTML = `<span class="text-emerald-400 font-bold">> ${query}</span>`;
                termOutput.appendChild(userLine);

                // Handle commands
                if (query === 'clear') {
                    termOutput.innerHTML = '';
                } else if (commands[query]) {
                    const response = document.createElement('div');
                    response.className = "text-inverse-on-surface opacity-80 leading-relaxed";
                    response.innerText = commands[query];
                    termOutput.appendChild(response);
                } else if (query !== '') {
                    const error = document.createElement('div');
                    error.className = "text-red-400 opacity-80";
                    error.innerText = `Command not recognized: ${query}. Try 'help'.`;
                    termOutput.appendChild(error);
                }

                // Reset input and scroll
                termInput.value = '';
                termBody.scrollTo({
                    top: termBody.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Hero Blueprint Interactivity
    const blueprint = document.getElementById('hero-blueprint');
    const crossHairV = document.getElementById('crosshair-v');
    const crossHairH = document.getElementById('crosshair-h');
    const coordX = document.getElementById('coord-x');
    const coordY = document.getElementById('coord-y');
    const heroHeadline = document.getElementById('hero-headline');

    if (blueprint && crossHairV && crossHairH) {
        blueprint.addEventListener('mousemove', (e) => {
            const rect = blueprint.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update Crosshairs
            gsap.to(crossHairV, { x: x, duration: 0.1, ease: "power2.out" });
            gsap.to(crossHairH, { y: y, duration: 0.1, ease: "power2.out" });

            // Update Coordinates
            coordX.innerText = `X: ${(x / rect.width).toFixed(3)}`;
            coordY.innerText = `Y: ${(y / rect.height).toFixed(3)}`;

            // Interactive Headline Tilt
            const moveX = (x / rect.width - 0.5) * 20;
            const moveY = (y / rect.height - 0.5) * 20;
            gsap.to(heroHeadline, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuSpans = menuToggle?.querySelectorAll('span');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
            
            // Reset Hamburger Icon
            if (menuSpans) {
                gsap.to(menuSpans[0], { rotate: 0, y: 0, duration: 0.3 });
                gsap.to(menuSpans[1], { opacity: 1, duration: 0.3 });
                gsap.to(menuSpans[2], { rotate: 0, y: 0, duration: 0.3 });
            }
        } else {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            document.body.classList.add('overflow-hidden');
            
            // Transform to Close Icon
            if (menuSpans) {
                gsap.to(menuSpans[0], { rotate: 45, y: 7, duration: 0.3 });
                gsap.to(menuSpans[1], { opacity: 0, duration: 0.3 });
                gsap.to(menuSpans[2], { rotate: -45, y: -7, duration: 0.3 });
            }

            // Animate Links
            gsap.from(mobileLinks, {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.2
            });
        }
    };

    menuToggle?.addEventListener('click', toggleMenu);
    
    // Close menu when clicking links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('translate-x-0')) {
                toggleMenu();
            }
        });
    });
});
