document.addEventListener('DOMContentLoaded', () => {
    // Nav Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            const offset = document.querySelector('.nav-container').offsetHeight;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
            if (window.innerWidth <= 768) navLinks.classList.remove('active');
        });
    });

    // Typewriter Effect
    const typewriter = document.querySelector('.hero-typewriter');
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text[i];
            i++;
            setTimeout(type, 100);
        }
    }
    setTimeout(type, 200);

    // Skill Animation
    const skills = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width') + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    skills.forEach(skill => skillObserver.observe(skill));

    // Nav Highlight
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + document.querySelector('.nav-container').offsetHeight + 20;
        document.querySelectorAll('.section').forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
                const id = section.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    });

    // Education Ball
    const timeline = document.querySelector('.education-timeline');
    const ball = document.querySelector('.edu-ball');
    function updateBall() {
        const rect = timeline.getBoundingClientRect();
        const scrollY = window.scrollY;
        const top = rect.top + scrollY;
        const height = rect.height;
        const ratio = Math.min(Math.max((scrollY + window.innerHeight / 2 - top) / height, 0), 1);
        ball.style.top = `${40 + ratio * (height - 80)}px`;
    }
    window.addEventListener('scroll', updateBall);
    window.addEventListener('resize', updateBall);
    updateBall();

    // Scroll-to-Top
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = 'position: fixed; bottom: 30px; right: 30px; background: #00A1D6; color: #E8F1F2; border: none; padding: 12px; font-size: 1.2rem; cursor: pointer; opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease;';
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => btn.style.opacity = window.scrollY > 200 ? '1' : '0');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseover', () => btn.style.transform = 'scale(1.1)');
    btn.addEventListener('mouseout', () => btn.style.transform = 'scale(1)');
});