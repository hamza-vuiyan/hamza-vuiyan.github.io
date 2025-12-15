// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('.nav-links a, .footer-links a, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            if (this.classList.contains('nav-links')) {
                this.classList.add('active');
            }
            
            // Smooth scroll to section
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Email Button Functionality =====
document.querySelector('.email-btn').addEventListener('click', function() {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// ===== Floating Cards Animation on Scroll =====
const floatingCards = document.querySelectorAll('.floating-card');

function animateCards() {
    floatingCards.forEach((card, index) => {
        const scrollPosition = window.scrollY;
        const movement = Math.sin(scrollPosition * 0.01 + index) * 10;
        card.style.transform = `translateY(${movement}px)`;
    });
}

window.addEventListener('scroll', animateCards);

// ===== Copy to Clipboard Functionality =====
const copyBtn = document.querySelector('.copy-btn');

if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const codeLines = document.querySelectorAll('.code-line');
        let codeText = '';
        
        codeLines.forEach(line => {
            codeText += line.textContent.trim() + '\n';
        });
        
        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied! ✓';
            this.style.background = '#48bb78';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
}

// ===== Text Link Click Handlers =====
const textLinks = document.querySelectorAll('.text-link');

textLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent.toLowerCase();
        
        if (linkText.includes('collaborate')) {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe hero content
const heroContent = document.querySelector('.hero-content');
const heroImageContainer = document.querySelector('.hero-image-container');

if (heroContent) observer.observe(heroContent);
if (heroImageContainer) observer.observe(heroImageContainer);

// ===== Parallax Effect for Background Shapes =====
const shapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Active Navigation on Scroll =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    // Update navbar background
    const navbar = document.querySelector('.navbar');
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== Social Icons Hover Effect =====
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// ===== Image Loading Animation =====
const heroImage = document.querySelector('.hero-image');

if (heroImage) {
    heroImage.addEventListener('load', function() {
        this.style.opacity = '1';
    });
}

// ===== Prevent Animation on Page Load =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Console Message =====
console.log('%c👋 Hello! Welcome to my portfolio', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cInterested in working together? Let\'s talk!', 'font-size: 14px; color: #4a5568;');

// ===== Skills Progress Animation =====
const skillsSection = document.querySelector('.skills-section');
let skillsAnimated = false;

const animateSkills = () => {
    if (!skillsAnimated) {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 100);
        });
        skillsAnimated = true;
    }
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, {
    threshold: 0.3
});

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===== Stats Counter Animation =====
const statsSection = document.querySelector('.stats-counter');
let statsAnimated = false;

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsAnimated = true;
        }
    });
}, {
    threshold: 0.5
});

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== Achievement Cards Animation =====
const achievementCards = document.querySelectorAll('.achievement-card');

const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

achievementCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    achievementObserver.observe(card);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:amir.hamza@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message (you can customize this)
        alert('Thank you for reaching out! Your email client should open now.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Project Cards Animation =====
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// ===== Smooth Scroll Offset for Fixed Navbar =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});