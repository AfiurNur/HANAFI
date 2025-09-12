
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set initial state for animated elements
    gsap.set(['.order-hero-title', '.order-hero-subtitle'], {
        opacity: 0,
        y: 30
    });

    gsap.set('.step-card', {
        opacity: 0,
        y: 50
    });

    gsap.set(['.notice-title', '.notice-content'], {
        opacity: 0,
        y: 30
    });

    // Create the master timeline
    const masterTL = gsap.timeline();

    // Hero text animation
    masterTL.to('.order-hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
    });

    masterTL.to('.order-hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
    }, '-=0.8');

    // Step cards animation with scroll trigger
    gsap.to('.step-card', {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.ordering-steps',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    // Delivery notice animation with scroll trigger
    gsap.to('.notice-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.delivery-notice',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    gsap.to('.notice-content', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.delivery-notice',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    // Hover animation for step cards
    document.querySelectorAll('.step-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
    });

    // Continuous rotation for decorative elements
    gsap.to('.decorative-circle', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none'
    });
});
