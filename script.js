// Simple JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to player cards
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click event to match cards
    const matchCards = document.querySelectorAll('.match-card');
    
    matchCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Match details: ' + this.querySelector('p:first-child').textContent);
        });
    });
    
    // Console log when page is fully loaded
    console.log('Cricket World website loaded successfully!');
});
