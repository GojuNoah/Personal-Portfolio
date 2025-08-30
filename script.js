
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const formBtn = document.getElementById('form-btn');
const formContainer = document.getElementById('form-container');
const contactForm = document.getElementById('contact-form');
const closeBtn = document.getElementById('close-btn');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

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

// hide contact form
closeBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

async function onSubmit(e) {
    e.preventDefault();
    
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    
    // Validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Submission (only if validation passed)
    try {
        const res = await fetch('https://api.postcatch.io/submit/9fad523e-6dca-4623-8e73-7805446f134c', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        
        if (res.ok) {
            alert('Thank you for your message!');
            contactForm.reset();
            formContainer.style.display = 'none';
        } else {
            alert('Something went wrong. Please try again later.');
        }
    } catch (err) {
        alert('Error sending message: ' + err.message);
    }
}

// Hook up the handler
contactForm.addEventListener('submit', onSubmit);