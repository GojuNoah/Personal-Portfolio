
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const formBtn = document.getElementById('form-btn');
const formContainer = document.getElementById('form-container');
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
    formContainer.style.display = 'flex';
});

// Contact form validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Thank you for your message!');
    contactForm.reset();
    formContainer.style.display = 'none';
});

// Close contact form
closeBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
});


