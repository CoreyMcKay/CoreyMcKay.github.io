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

// Load and display content from JSON files
async function loadContent(type) {
    try {
        const response = await fetch(`data/${type}.json`);
        const data = await response.json();
        const container = document.getElementById(`${type}Container`);
        
        if (!container) return;
        
        if (type === 'blogs') {
            container.innerHTML = data.posts.map(post => `
                <article class="blog-card">
                    <div class="blog-card-header">
                        <span class="tag">${post.tag}</span>
                        <h2>${post.title}</h2>
                        <span class="date">${post.date}</span>
                    </div>
                    <p>${post.summary}</p>
                    <a href="#" class="read-more" onclick="showBlogPost('${encodeURIComponent(JSON.stringify(post))}')">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </article>
            `).join('');
        } else if (type === 'projects') {
            container.innerHTML = data.projects.map(project => `
                <article class="project-card">
                    <div class="project-card-header">
                        <span class="tag">${project.tag}</span>
                        <h2>${project.title}</h2>
                        <span class="date">${project.date}</span>
                    </div>
                    <p>${project.summary}</p>
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" class="btn primary">View Project</a>
                        <a href="${project.github}" target="_blank" class="btn secondary">GitHub</a>
                    </div>
                </article>
            `).join('');
        } else if (type === 'memes') {
            container.innerHTML = data.memes.map(meme => `
                <article class="meme-card">
                    <div class="meme-card-header">
                        <span class="tag">${meme.tag}</span>
                        <h2>${meme.title}</h2>
                        <span class="date">${meme.date}</span>
                    </div>
                    <img src="${meme.imageUrl}" alt="${meme.title}" class="meme-image">
                    <p>${meme.description}</p>
                </article>
            `).join('');
        }
    } catch (error) {
        console.error(`Error loading ${type}:`, error);
    }
}

// Show full blog post
function showBlogPost(postData) {
    const post = JSON.parse(decodeURIComponent(postData));
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="tag">${post.tag}</span>
                <h2>${post.title}</h2>
                <span class="date">${post.date}</span>
            </div>
            <div class="modal-body">
                ${post.content}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="btn secondary">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Initialize content loading
document.addEventListener('DOMContentLoaded', () => {
    loadContent('blogs');
    loadContent('projects');
    loadContent('memes');
}); 