// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function highlightNavLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.experience-item, .project-card, .skill-category, .education-item, .contact-item, .contact-form');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate text elements in sections (excluding hero which has its own animations)
    const sectionTextElements = document.querySelectorAll('#about p, #experience p, #projects p, #skills p, #education p, #contact p');
    const textObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    sectionTextElements.forEach(el => {
        if (!el.closest('.hero-content')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            textObserver.observe(el);
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    highlightNavLink();
    initEmailJS();
    initContactForm();
});

// Initialize EmailJS
function initEmailJS() {
    emailjs.init("Er8d7F75OxvpiW1mN"); // Replace with your EmailJS Public Key
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Show sending message
            formMessage.className = 'mt-3 text-center sending';
            formMessage.textContent = 'Sending your message...';
            formMessage.style.display = 'block';
            
            // EmailJS template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'zalakjoishar@gmail.com' // Your receiving email
            };
            
            // Send email using EmailJS
            emailjs.send('service_7r9paev', 'template_pi4ou85', templateParams)
                .then(function(response) {
                    // Success
                    formMessage.className = 'mt-3 text-center success';
                    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(function() {
                        formMessage.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    // Error
                    formMessage.className = 'mt-3 text-center error';
                    formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly at zalakjoishar@gmail.com';
                    console.error('EmailJS Error:', error);
                });
        });
    }
}

// Mobile menu close on link click
const navLinksMobile = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

