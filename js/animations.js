// GSAP Premium Animations for Portfolio
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Initial Hero Animation
    const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

    heroTimeline
        .from("header", { y: -100, opacity: 0, duration: 1.2 })
        .from("aside", { x: -100, opacity: 0, duration: 1.2 }, "-=1")
        .from(".reveal-text span", { 
            y: 20, 
            opacity: 0, 
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .from(".reveal-text h1", { 
            y: 50, 
            opacity: 0, 
            duration: 1.5, 
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.8")
        .from(".reveal-text p", { 
            x: 50, 
            opacity: 0, 
            duration: 1.2,
            ease: "power2.out"
        }, "-=1.2")
        .from("#hero-visual", { 
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1.5");

    // About Me / Philosophy Reveal
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-me",
            start: "top 60%",
        }
    });

    aboutTl
        .from("#about-me h2", { 
            y: 100, 
            opacity: 0, 
            duration: 2, 
            ease: "power4.out" 
        })
        .from("#about-me img", { 
            x: 100, 
            opacity: 0, 
            duration: 1.5, 
            ease: "power2.out" 
        }, "-=1.5")
        .from("#about-me h3", { 
            y: 50, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out" 
        }, "-=1")
        .from("#about-me p", { 
            y: 30, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out" 
        }, "-=0.8")
        .from("#about-me .grid div", { 
            y: 20, 
            opacity: 0, 
            stagger: 0.2, 
            duration: 0.8 
        }, "-=0.5");

    // Toolkit Card Reveal (Dynamic for any number of cards)
    gsap.utils.toArray(".skill-card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: (index % 4) * 0.1, // Stagger based on column position
            ease: "power3.out"
        });
    });

    // Education Reveal (Staggered Lines and Massive Years)
    gsap.utils.toArray(".education-item").forEach((item) => {
        const year = item.querySelector(".edu-year");
        const details = item.querySelector(".edu-details");
        const line = item.querySelector(".edu-line");

        gsap.from(year, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            },
            x: -50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out"
        });

        if (line) {
            gsap.from(line, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%"
                },
                scaleX: 0,
                duration: 1.5,
                ease: "power2.inOut"
            });
        }
    });

    // Journal/Blog Row Reveal
    gsap.utils.toArray(".journal-row").forEach((row) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 90%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            borderBottomColor: "rgba(0,0,0,0)"
        });
    });

    // Parallax Effect for the Visual Divider
    gsap.to(".parallax-img", {
        scrollTrigger: {
            trigger: ".parallax-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: "20%",
        ease: "none"
    });

    // Hero Mouse Parallax (Interactive Text Only)
    const heroSection = document.querySelector('#hero-blueprint');
    const textLayer = document.querySelector('#hero-text-parallax');

    if (heroSection && textLayer) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            // Text-only movement
            const moveX = (clientX - centerX) / 40;
            const moveY = (clientY - centerY) / 40;

            gsap.to(textLayer, {
                x: moveX,
                y: moveY,
                duration: 1.2,
                ease: "power2.out",
                overwrite: true
            });
        });

        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            gsap.to(textLayer, {
                x: 0,
                y: 0,
                duration: 1.5,
                ease: "power3.out"
            });
        });
    }
});
