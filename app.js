// Wait for the page and all resources to load
window.addEventListener('load', () => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hide loading screen and reveal main content
    const loadingScreen = document.getElementById('loadingScreen');
    const contentWrapper = document.getElementById('contentWrapper');
    const tl = gsap.timeline();

    tl.to(loadingScreen, {
        opacity: 0,
        duration: 0.8,
        delay: 1, // Simulate a brief loading time
        ease: "power2.inOut",
        onComplete: () => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    })
        .fromTo(contentWrapper,
            { opacity: 0 },
            { opacity: 1, duration: 1.2, ease: "power2.out" },
            "-=0.5" // Overlap with the loading screen fade out
        );

    // Animate the hero section elements sequentially
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroCta = document.getElementById('heroCta');
    const heroImage = document.getElementById('heroImage');

    tl.fromTo(heroTitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
        .fromTo(heroSubtitle,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.7"
        )
        .fromTo(heroCta,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        )
        .fromTo(heroImage,
            { opacity: 0, clipPath: 'polygon(100px 0, 100px 0, 100px 100%, 0 100%)' },
            { opacity: 1, clipPath: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, ease: "power3.out" },
            "-=0.8"
        );

    // Animate product cards on scroll
    const productCards = gsap.utils.toArray('.product-card');
    productCards.forEach(card => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // When the top of the card hits 85% down the viewport
                    toggleActions: "play none none none",
                    // markers: true, // Uncomment for debug markers
                }
            }
        );
    });

    // Animate the about section on scroll
    gsap.fromTo('.about-image img',
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%",
                toggleActions: "play none none none",
            }
        }
    );

    gsap.fromTo('.about-content',
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%",
                toggleActions: "play none none none",
            }
        }
    );

    // Hamburger menu functionality for mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});