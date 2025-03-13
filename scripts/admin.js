// Admin password - hashed for security
const ADMIN_PASSWORD_HASH = '3e717afc7cefe7157fb90832cfd727428b02992b5b00224f4ca5c427cea4babe';  // Hash of CyberSec2024!@#

// Helper function to hash password
async function hashPassword(password) {
    console.log('Input password:', password);
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    console.log('Encoded data:', data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    console.log('Generated hash:', hashHex);
    console.log('Stored hash:', ADMIN_PASSWORD_HASH);
    console.log('Hash matches:', hashHex === ADMIN_PASSWORD_HASH);
    return hashHex;
}

// Helper function to get base path
function getBasePath() {
    // Check if we're in the admin directory
    if (window.location.pathname.includes('/admin/')) {
        return '../';
    }
    return './';
}

// Check if logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const currentPath = window.location.pathname;
    
    if (!isLoggedIn && !currentPath.includes('/admin/index.html')) {
        window.location.href = getBasePath() + 'admin/index.html';
    } else if (isLoggedIn && currentPath.includes('/admin/index.html')) {
        window.location.href = 'dashboard.html';
    }
}

// Login function
async function login(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const hashedPassword = await hashPassword(password);
    
    if (hashedPassword === ADMIN_PASSWORD_HASH) {
        // Set session expiry to 2 hours
        const expiryTime = Date.now() + (2 * 60 * 60 * 1000);
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('sessionExpiry', expiryTime);
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password');
        // Clear the password field
        document.getElementById('password').value = '';
    }
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('sessionExpiry');
    window.location.href = 'index.html';
}

// Session check function
function checkSession() {
    const expiryTime = localStorage.getItem('sessionExpiry');
    if (expiryTime && Date.now() > parseInt(expiryTime)) {
        logout();
        return;
    }
}

// Check session every minute
setInterval(checkSession, 60000);

// Content Management
let currentEditId = null;

// Show/Hide Sections
function showSection(section) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    
    // Load content for the section
    loadContent(section);
}

// Load content from localStorage
function loadContent(type) {
    const contentList = document.getElementById(`${type}List`);
    const items = JSON.parse(localStorage.getItem(type) || '[]');
    
    contentList.innerHTML = items.map((item, index) => `
        <div class="content-item">
            <div class="content-item-title">
                <h3>${item.title}</h3>
                <span class="date">${item.date}</span>
            </div>
            <div class="content-item-actions">
                <button onclick="editItem('${type}', ${index})" class="btn secondary">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button onclick="deleteItem('${type}', ${index})" class="btn secondary">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Show Add/Edit Form
function showAddForm(type) {
    currentEditId = null;
    document.getElementById(`${type}Form`).classList.remove('hidden');
    document.getElementById('editBlogForm').reset();
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
}

// Hide Form
function hideForm(type) {
    document.getElementById(`${type}Form`).classList.add('hidden');
    document.querySelector('.overlay').remove();
}

// Save Blog Post
function saveBlogPost(event) {
    event.preventDefault();
    
    const post = {
        title: document.getElementById('blogTitle').value,
        tag: document.getElementById('blogTag').value,
        date: document.getElementById('blogDate').value,
        summary: document.getElementById('blogSummary').value,
        content: document.getElementById('blogContent').value
    };
    
    let posts = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    if (currentEditId !== null) {
        posts[currentEditId] = post;
    } else {
        posts.push(post);
    }
    
    localStorage.setItem('blogs', JSON.stringify(posts));
    
    // Update the blog.html file content
    updateBlogPage(posts);
    
    hideForm('blog');
    loadContent('blogs');
    return false;
}

// Edit Item
function editItem(type, index) {
    const items = JSON.parse(localStorage.getItem(type) || '[]');
    const item = items[index];
    currentEditId = index;
    
    document.getElementById(`${type}Title`).value = item.title;
    document.getElementById(`${type}Tag`).value = item.tag;
    document.getElementById(`${type}Date`).value = item.date;
    document.getElementById(`${type}Summary`).value = item.summary;
    document.getElementById(`${type}Content`).value = item.content;
    
    showAddForm(type);
}

// Delete Item
function deleteItem(type, index) {
    if (confirm('Are you sure you want to delete this item?')) {
        let items = JSON.parse(localStorage.getItem(type) || '[]');
        items.splice(index, 1);
        localStorage.setItem(type, JSON.stringify(items));
        loadContent(type);
        
        // Update the corresponding page
        if (type === 'blogs') updateBlogPage(items);
        else if (type === 'projects') updateProjectsPage(items);
        else if (type === 'memes') updateMemesPage(items);
    }
}

// Update Blog Page
function updateBlogPage(posts) {
    const blogContent = posts.map(post => `
        <article class="blog-card">
            <div class="blog-card-header">
                <span class="tag">${post.tag}</span>
                <h2>${post.title}</h2>
                <span class="date">${post.date}</span>
            </div>
            <p>${post.summary}</p>
            <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </article>
    `).join('');
    
    // Here you would typically make an API call to update the blog.html file
    // For now, we'll just store in localStorage
    localStorage.setItem('blogPageContent', blogContent);
}

// Save Project Post
function saveProjectPost(event) {
    event.preventDefault();
    
    const project = {
        title: document.getElementById('projectTitle').value,
        tag: document.getElementById('projectTag').value,
        date: document.getElementById('projectDate').value,
        summary: document.getElementById('projectSummary').value,
        link: document.getElementById('projectLink').value,
        github: document.getElementById('projectGithub').value
    };
    
    let projects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    if (currentEditId !== null) {
        projects[currentEditId] = project;
    } else {
        projects.push(project);
    }
    
    localStorage.setItem('projects', JSON.stringify(projects));
    
    // Update the projects.html file content
    updateProjectsPage(projects);
    
    hideForm('project');
    loadContent('projects');
    return false;
}

// Save Meme Post
function saveMemePost(event) {
    event.preventDefault();
    
    const meme = {
        title: document.getElementById('memeTitle').value,
        tag: document.getElementById('memeTag').value,
        date: document.getElementById('memeDate').value,
        description: document.getElementById('memeDescription').value,
        imageUrl: document.getElementById('memeImageUrl').value
    };
    
    let memes = JSON.parse(localStorage.getItem('memes') || '[]');
    
    if (currentEditId !== null) {
        memes[currentEditId] = meme;
    } else {
        memes.push(meme);
    }
    
    localStorage.setItem('memes', JSON.stringify(memes));
    
    // Update the memes.html file content
    updateMemesPage(memes);
    
    hideForm('meme');
    loadContent('memes');
    return false;
}

// Update Projects Page
function updateProjectsPage(projects) {
    const projectsContent = projects.map(project => `
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
    
    // Store in localStorage for now
    localStorage.setItem('projectsPageContent', projectsContent);
}

// Update Memes Page
function updateMemesPage(memes) {
    const memesContent = memes.map(meme => `
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
    
    // Store in localStorage for now
    localStorage.setItem('memesPageContent', memesContent);
}

// Initialize
checkAuth();
if (window.location.pathname.includes('dashboard.html')) {
    showSection('blogs');
} 