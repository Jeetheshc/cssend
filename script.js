document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.checkbox');
    const body = document.body;

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav_links');
    const isExpanded = () => hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.addEventListener('click', function () {
        const isOpen = isExpanded();
        navLinks.classList.toggle('hidden', isOpen);
        navLinks.classList.toggle('visible', !isOpen);
        hamburger.setAttribute('aria-expanded', !isOpen);
    });
});
