let menuButton = document.getElementById('menuButton');
let navlist = document.querySelector('.navlist');

menuButton.addEventListener('click', () => {
    // Öffnen/Schließen des Menüs
    navlist.classList.toggle('open');
    
    // Das Hamburger-Icon in ein X verwandeln oder zurück
    menuButton.classList.toggle('menu-open');
});


// Elemente auswählen
const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');
const heroImg = document.querySelector('.hero-img');

// Animation beim Laden der Seite starten
document.addEventListener('DOMContentLoaded', () => {
  hero.classList.add('active'); // Aktiviert die Hero-Animation
  heroText.classList.add('active'); // Aktiviert die Hero-Text-Animation
  heroImg.classList.add('active'); // Aktiviert die Hero-Bild-Animation
});

document.querySelectorAll('.wrapper .card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Funktion: Elemente anzeigen, wenn sie sichtbar werden
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            el.classList.add('show'); // Animation starten
        } else {
            el.classList.remove('show'); // Zurücksetzen (optional)
        }
    });
}

// Event-Listener für das Scrollen
window.addEventListener('scroll', revealOnScroll);

// Initial aufrufen, damit Elemente auch ohne Scroll sichtbar werden
revealOnScroll();

