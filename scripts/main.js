// Theme switching
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Matrix background effect
const matrixBg = document.querySelector('.matrix-bg');
let matrix = '';
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

function createMatrix() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const columns = Math.floor(width / 20);
    const rows = Math.floor(height / 20);
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix += chars[Math.floor(Math.random() * chars.length)];
        }
        matrix += '\n';
    }
    
    matrixBg.textContent = matrix;
}

// Glitch effect for title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        const originalText = glitchText.getAttribute('data-text');
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchedText = '';
        
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.1) {
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += originalText[i];
            }
        }
        
        glitchText.textContent = glitchedText;
        setTimeout(() => {
            glitchText.textContent = originalText;
        }, 100);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 