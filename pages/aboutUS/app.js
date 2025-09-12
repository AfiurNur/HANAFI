document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state for all animated elements
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-para'], {
        opacity: 0,
        y: 30
    });

    gsap.set('.hero-image-inner', {
        scale: 1.1,
        filter: 'grayscale(100%)',
        opacity: 0.7
    });

    gsap.set('.decorative-element', {
        rotation: 45,
        scale: 0.8,
        opacity: 0
    });

    // Create the master timeline
    const masterTL = gsap.timeline();

    // Hero image animation
    masterTL.to('.hero-image-inner', {
        scale: 1,
        filter: 'grayscale(30%)',
        opacity: 0.8,
        duration: 2,
        ease: 'power2.out'
    });

    // Decorative element animation
    masterTL.to('.decorative-element', {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out'
    }, '-=1.5');

    // Text animations
    masterTL.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=1');

    masterTL.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8');

    // Paragraph animations with stagger
    masterTL.to('.hero-para', {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.5');

    // Scroll indicator animation (looping)
    gsap.to('.scroll-line', {
        height: 0,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Parallax effect on scroll
    gsap.to('.hero-image-inner', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Text fade out on scroll
    ScrollTrigger.create({
        trigger: ".hero-content",
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            gsap.to('.hero-para', {
                opacity: 0.3,
                duration: 0.5,
                stagger: 0.1
            });
        },
        onLeaveBack: () => {
            gsap.to('.hero-para', {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
            });
        }
    });
});