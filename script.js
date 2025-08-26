
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const formBtn = document.getElementById('form-btn');
const contactForm = document.getElementById('contact-form');
const closeBtn = document.getElementById('close-btn');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Show contact form
formBtn.addEventListener('click', () => {
    contactForm.style.display = 'block';
});

// Hide contact form
closeBtn.addEventListener('click', () => {
    contactForm.style.display = 'none';
});

// Hide form when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === contactForm) {
        contactForm.style.display = 'none';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
    contactForm.style.display = 'none';
    contactForm.reset();
});
