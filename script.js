// Selectare elemente pentru Meniul Mobil
const hamburger = document.querySelector('.hamburger-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Funcție toggle pentru meniu mobil
function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    if (mobileOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

hamburger.addEventListener('click', toggleMenu);

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

// SYSTEM LOGIC FOR LANGUAGE SWITCHER (EN / RO)
const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
const translatableElements = document.querySelectorAll('[data-en]');

function switchLanguage(lang) {
    // Schimbă textul pentru toate elementele marcate
    translatableElements.forEach(el => {
        if (lang === 'ro') {
            el.innerHTML = el.getAttribute('data-ro');
        } else {
            el.innerHTML = el.getAttribute('data-en');
        }
    });

    // Actualizează starea vizuală a butoanelor pe desktop și mobil
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Schimbă atributul global lang al paginii
    document.documentElement.lang = lang;
}

// Atașare eveniment click pentru selectorii de limbă
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        switchLanguage(selectedLang);
    });
});
