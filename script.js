document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const button = card.querySelector('.button');
        button.addEventListener('click', function() {
            const url = card.getAttribute('data-url');
            window.location.href = url; // Redirect to the game URL
        });
    });
});
