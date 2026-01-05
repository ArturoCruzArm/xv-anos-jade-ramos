// ===============================================
// XV AÑOS DE JADE RAMOS - JAVASCRIPT
// 14 de Febrero, 2025
// ===============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initParticles();
    initCountdown();
    initMusicPlayer();
    initScrollAnimation();
});

// ===============================================
// PARTICLES.JS CONFIGURATION
// ===============================================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ffffff', '#ffc0cb', '#ff69b4']
                },
                shape: {
                    type: ['circle', 'heart'],
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        size: 8,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===============================================
// COUNTDOWN TIMER
// ===============================================
function initCountdown() {
    // Fecha del evento: 14 de Febrero, 2026 a las 18:00 (6:00 PM) - Zona horaria de México Central
    const eventDate = new Date('2026-02-14T18:00:00-06:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Elementos del DOM
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Verificar que los elementos existen
        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            console.error('Countdown elements not found in DOM');
            return;
        }

        if (distance < 0) {
            // Si el evento ya pasó
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===============================================
// MUSIC PLAYER
// ===============================================
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    console.log('🎵 Inicializando reproductor de música...');
    console.log('Botón:', musicToggle);
    console.log('Audio:', backgroundMusic);

    if (!backgroundMusic) {
        // Si no hay audio configurado, ocultar el botón
        console.warn('⚠️ No se encontró el elemento de audio');
        if (musicToggle) {
            musicToggle.style.display = 'none';
        }
        return;
    }

    console.log('✅ Reproductor de música listo');

    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        console.log('🎵 Click en botón de música. isPlaying:', isPlaying);
        if (isPlaying) {
            backgroundMusic.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            console.log('⏸️ Música pausada');
        } else {
            backgroundMusic.play().catch(error => {
                console.error('❌ Error al reproducir audio:', error);
            });
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            console.log('▶️ Música reproduciendo');
        }
        isPlaying = !isPlaying;
    });

    // Handle audio end
    backgroundMusic.addEventListener('ended', function() {
        isPlaying = false;
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        console.log('🔚 Audio terminado');
    });

    // Log cuando el audio se carga correctamente
    backgroundMusic.addEventListener('canplay', function() {
        console.log('✅ Audio cargado y listo para reproducir');
    });

    // Log si hay error al cargar el audio
    backgroundMusic.addEventListener('error', function(e) {
        console.error('❌ Error al cargar el audio:', e);
        console.error('Ruta del audio:', backgroundMusic.querySelector('source').src);
    });
}

// ===============================================
// SCROLL ANIMATIONS
// ===============================================
function initScrollAnimation() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.invitation-message');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');

        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===============================================
// SMOOTH SCROLL FOR ALL LINKS
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================================
// GALLERY LIGHTBOX (si hay fotos)
// ===============================================
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            // Crear lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);

            // Cerrar lightbox
            lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
                lightbox.remove();
            });

            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
}

// Initialize gallery lightbox if images exist
if (document.querySelectorAll('.gallery-item img').length > 0) {
    initGalleryLightbox();
}

// ===============================================
// LOADING ANIMATION
// ===============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ===============================================
// PREVENT CONTEXT MENU ON IMAGES (Protección)
// ===============================================
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// ===============================================
// CONSOLE MESSAGE
// ===============================================
console.log('%c💕 XV Años de Jade Ramos 💕', 'color: #c41e3a; font-size: 24px; font-weight: bold;');
console.log('%c14 de Febrero, 2026', 'color: #ff69b4; font-size: 16px;');
console.log('%cProducciones Foro 7', 'color: #666; font-size: 12px;');

// ===============================================
// SAFE STORAGE ACCESS (Evitar errores de Tracking Prevention)
// ===============================================
window.safeLocalStorage = {
    getItem: function(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('LocalStorage blocked:', e);
            return null;
        }
    },
    setItem: function(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn('LocalStorage blocked:', e);
        }
    },
    removeItem: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('LocalStorage blocked:', e);
        }
    }
};
