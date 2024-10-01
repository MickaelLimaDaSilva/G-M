// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Countdown
    const eventDate = new Date('2026-08-08T11:00:00').getTime();
    const countdownElement = document.getElementById('countdown');
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Langue de la page
        const lang = document.documentElement.lang;

        let countdownText;
        if (lang === 'fr') {
            countdownText = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
        } else if (lang === 'pt') {
            countdownText = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
        } else {
            countdownText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        }
        
        countdownElement.innerHTML = countdownText;
        
        if (distance < 0) {
            countdownElement.innerHTML = lang === 'fr' ? "L'événement est arrivé!" : "O evento chegou!";
        }
    }
    
    setInterval(updateCountdown, 1000);

    // Language switcher
    const languageLinks = document.querySelectorAll('.language');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.id;
            if (lang === 'fr') {
                window.location.href = 'index_fr.html'; // Redirige vers la version française
            } else if (lang === 'pt') {
                window.location.href = 'index_pt.html'; // Redirige vers la version portugaise
            }
        });
    });
});
