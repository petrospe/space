// Enhanced animations
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.transform = 'translateY(-3px)';
    });
    anchor.addEventListener('mouseleave', () => {
        anchor.style.transform = 'translateY(0)';
    });
});

// Scroll-triggered animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .card, table').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// Technical data tooltips
document.querySelectorAll('.data-highlight').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = 'rgba(187, 225, 250, 0.6)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = 'rgba(187, 225, 250, 0.3)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".modal-close");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.dataset.full;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});