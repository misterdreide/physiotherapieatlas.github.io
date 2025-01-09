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

let debounceTimer;
window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(revealOnScroll, 100);
});


let swiperCards = new Swiper(".gallery-cards", {
    loop: false, // Deaktivieren des Loop-Modus
    effect: 'fade', // Fade-Effekt für den Haupt-Slider
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 500, // Zeit für den Bildwechsel (500 ms für einen flüssigen Übergang)
    on: {
        slideChange: function () {
            // Manuelle Aktualisierung der Thumbnails beim Bildwechsel
            const activeIndex = this.realIndex;
            // Verzögertes Setzen der Thumbnails für einen flüssigen Übergang
            setTimeout(() => {
                swiperThumbs.slideTo(activeIndex, 500); // Wechsel zu den Thumbnails mit Animation
            }, 500); // Verzögerung passend zur Haupt-Animation
        }
    }
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: false, // Deaktivieren des Loop-Modus
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true, // Thumbnail anklickbar
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    speed: 500, // Zeit für den Thumbnail-Wechsel
    on: {
        click: function () {
            const activeIndex = swiperThumbs.realIndex;
            // Verzögerung hinzufügen, damit das Bild im Haupt-Slider sanft wechselt
            setTimeout(() => {
                swiperCards.slideTo(activeIndex, 500); // Wechsel zu den Hauptbildern
            }, 500); // Verzögerung passend zur Thumbnail-Animation
        }
    }
});

// Synchronisierung beider Swiper
swiperCards.controller.control = swiperThumbs;
swiperThumbs.controller.control = swiperCards;
