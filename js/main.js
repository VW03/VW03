// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Current Year
function setTheCurrentYear() {
    var footerYearElement = document.getElementById("footer-year");
    if (footerYearElement) footerYearElement.innerHTML = new Date().getFullYear();
}

setTheCurrentYear();

// Language translations

// Language cycling
const languages = ['nl', 'fr', 'en'];
let currentLangIndex = 0;

function changeLanguage() {
    currentLangIndex = (currentLangIndex + 1) % languages.length;


    const lang = languages[currentLangIndex];
    localStorage.setItem('language', lang);
    document.getElementById('language').textContent = lang.toUpperCase();
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[lang][key];
    });
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    currentLangIndex = languages.indexOf(savedLang);
    document.getElementById('language').textContent = savedLang.toUpperCase();
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[savedLang][key];
    });
});


// Starfield animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    stars = [];
    const numStars = Math.floor(window.innerWidth * 0.15);
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.5,
            speed: Math.random() * 0.02 + 0.01
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
        if (star.alpha > 1) star.alpha = 1;
        if (star.alpha < 0.3) star.alpha = 0.3;
    });
    requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();