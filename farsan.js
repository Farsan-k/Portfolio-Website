// Mobile Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.NavOne');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active Navigation on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.NavOne a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                `.NavOne a[href*="${id}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close Mobile Menu When Scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.HomePage1, .Head', {
    origin: 'top'
});

ScrollReveal().reveal(
    '.img1, .Skill, .ProjectBox, .ContactPage form',
    {
        origin: 'bottom'
    }
);

ScrollReveal().reveal('.HomePage1 h1, .img2', {
    origin: 'left'
});

// Typed JS
const typed = new Typed('.text', {
    strings: [
        'Data Scientist...!',
        'AI and ML Engineer...!',
        'Data Analyst...!'
        
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// EmailJS
function sendMail() {

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#Phone').value.trim();
    const subject = document.querySelector('#Subject').value.trim();
    const message = document.querySelector('#Message').value.trim();

    // Empty Field Validation
    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill all fields.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation (10 digits only)
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const params = {
        name,
        email,
        phone,
        subject,
        message
    };

    emailjs
        .send(
            "service_0rvyrya",
            "template_0ej8lbj",
            params
        )
        .then(() => {
            alert("Message sent successfully!");

            // Clear Form
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#Phone').value = '';
            document.querySelector('#Subject').value = '';
            document.querySelector('#Message').value = '';
        })
        .catch((error) => {
            console.error(error);
            alert("Email not sent.");
        });
}