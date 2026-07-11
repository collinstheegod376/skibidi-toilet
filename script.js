// Add subtle mouse movement effect to the banner and pfp to make it feel "premium"
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner-container');
    const pfp = document.querySelector('.pfp-ring-border');
    const heroSection = document.querySelector('.hero-section');
    
    // Mouse movement parallax effect
    heroSection.addEventListener('mousemove', (e) => {
        if(!banner || !pfp) return;
        
        const rect = heroSection.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the hero section
        // range roughly -1 to 1
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        
        // Apply transform with a slight multiplier for subtlety
        banner.style.transform = `translate(${x * -10}px, ${y * -5}px) rotateY(${x * 2}deg)`;
        pfp.style.transform = `translate(${x * 15}px, ${y * 10}px)`;
    });
    
    // Reset transforms on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        if(!banner || !pfp) return;
        banner.style.transform = `translate(0, 0) rotateY(0)`;
        pfp.style.transform = `translate(0, 0) scale(1)`; // reset to default
    });
    
    // Add glitch hover effect to title
    const glitch = document.querySelector('.glitch');
    setInterval(() => {
        if(Math.random() > 0.9) {
            glitch.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                glitch.style.transform = 'translate(0,0)';
            }, 50);
        }
    }, 2000);
    // Add mobile menu toggle functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            navMenu.classList.remove('active');
        }));
    }

    // CA Copy Functionality
    const copyBtn = document.getElementById('copy-btn');
    const tooltip = document.getElementById('tooltip');
    const caText = document.getElementById('ca-text');
    
    if (copyBtn && tooltip && caText) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(caText.textContent).then(() => {
                tooltip.classList.add('show');
                
                // Show checkmark icon
                const originalSvg = copyBtn.innerHTML;
                copyBtn.innerHTML = '<svg xmlns="http://www.2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                
                setTimeout(() => {
                    tooltip.classList.remove('show');
                    copyBtn.innerHTML = originalSvg;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy CA', err);
            });
        });
    }

    // Gallery Slider Functionality
    const track = document.getElementById('meme-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = () => track.clientWidth;

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });
    }
});
