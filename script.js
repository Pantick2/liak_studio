// Selectare elemente pentru Meniul Mobil
const hamburger = document.querySelector('.hamburger-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Funcție toggle pentru meniu
function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    if (mobileOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Eveniment click pe hamburger
hamburger.addEventListener('click', toggleMenu);

// Închide meniul când se dă click pe un link din interiorul lui
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scroll fluid pentru legăturile interne
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
