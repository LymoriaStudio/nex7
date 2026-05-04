document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.clientes-carousel-wrapper');
    const carousel = document.getElementById('clientes-carousel');

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let isHovering = false;

    // ── MOUSE ──
    wrapper.addEventListener('mouseenter', () => {
        isHovering = true;
        if (!isDragging) carousel.style.animationPlayState = 'paused';
    });

    wrapper.addEventListener('mouseleave', () => {
        isHovering = false;
        isDragging = false;
        wrapper.style.cursor = 'pointer';
        carousel.style.animationPlayState = 'running';
    });

    wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        wrapper.style.cursor = 'grabbing';
        carousel.style.animationPlayState = 'paused';
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener('mouseup', () => {
        isDragging = false;
        wrapper.style.cursor = 'pointer';
        if (isHovering) {
            carousel.style.animationPlayState = 'paused';
        } else {
            setTimeout(() => {
                carousel.style.animationPlayState = 'running';
            }, 800);
        }
    });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        wrapper.scrollLeft = scrollLeft - walk;
    });

    // ── TOUCH ──
    wrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        carousel.style.animationPlayState = 'paused';
        startX = e.touches[0].pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
        isDragging = false;
        setTimeout(() => {
            carousel.style.animationPlayState = 'running';
        }, 800);
    });

    wrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        wrapper.scrollLeft = scrollLeft - walk;
    }, { passive: true });
});