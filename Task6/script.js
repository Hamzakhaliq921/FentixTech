// Background Slideshow
const winterImages = [
    "https://picsum.photos/id/1015/1920/1080",
    "https://picsum.photos/id/1016/1920/1080",
    "https://picsum.photos/id/1018/1920/1080",
    "https://picsum.photos/id/133/1920/1080",
    "https://picsum.photos/id/201/1920/1080",
    "https://picsum.photos/id/292/1920/1080"
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    currentIndex = (currentIndex + 1) % winterImages.length;
    hero.style.backgroundImage = `url('${winterImages[currentIndex]}')`;
}

// Gallery Data
const galleryItems = [
    { category: "landscape", img: "https://picsum.photos/id/1015/800/1000", title: "Mountain Peak" },
    { category: "decoration", img: "https://picsum.photos/id/201/800/1000", title: "Winter Greenery" },
    { category: "food", img: "https://picsum.photos/id/292/800/1000", title: "Hot Chocolate" },
    { category: "landscape", img: "https://picsum.photos/id/1018/800/1000", title: "Foggy Forest" },
    { category: "family", img: "https://picsum.photos/id/64/800/1000", title: "Friends by Fire" },
    { category: "decoration", img: "https://picsum.photos/id/133/800/1000", title: "Christmas Tree" },
    { category: "food", img: "https://picsum.photos/id/312/800/1000", title: "Donuts" },
    { category: "family", img: "https://picsum.photos/id/1005/800/1000", title: "Reading Together" }
];

// Render Gallery
function renderGallery(items) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
        div.onclick = () => showLightbox(item.img);
        grid.appendChild(div);
    });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        if (filter === 'all') {
            renderGallery(galleryItems);
        } else {
            const filtered = galleryItems.filter(item => item.category === filter);
            renderGallery(filtered);
        }
    });
});

// Lightbox
function showLightbox(src) {
    document.getElementById('lightbox-image').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Snowflakes
function createSnowflake() {
    const container = document.getElementById('snow-container');
    const snow = document.createElement('div');
    snow.style.position = 'absolute';
    snow.style.color = 'white';
    snow.style.fontSize = Math.random() * 25 + 15 + 'px';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.opacity = Math.random() * 0.7 + 0.4;
    snow.style.animation = `snowfall ${Math.random() * 8 + 8}s linear forwards`;
    snow.textContent = ['❄️', '❅', '❆'][Math.floor(Math.random() * 3)];
    container.appendChild(snow);

    setTimeout(() => snow.remove(), 20000);
}

// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been received.");
    this.reset();
});

// Initialize
window.onload = () => {
    hero.style.backgroundImage = `url('${winterImages[0]}')`;
    setInterval(changeBackground, 3000);

    renderGallery(galleryItems);
    setInterval(createSnowflake, 160);

    console.log('%cWinter Portfolio Loaded Successfully ❄️', 'color:#2c3e35; font-size:16px');
};