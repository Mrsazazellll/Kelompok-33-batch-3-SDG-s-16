document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('nav');
    var logo = document.querySelector('.logo');
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > 100) { 
            if (!nav.classList.contains('fixed')) {
                nav.classList.add('fixed');
                logo.style.opacity = '0'; // Memperhalus transisi logo
                logo.style.transition = 'opacity 0.5s ease-in-out'; // Penyesuaian transisi logo
            }
        } else {
            if (currentScroll < lastScrollTop && currentScroll > 50) {
                if (!nav.classList.contains('fixed')) {
                    nav.classList.add('fixed');
                    logo.style.opacity = '0'; // Pertahankan logo hilang dengan transisi yang halus
                    logo.style.transition = 'opacity 0.5s ease-in-out';
                }
            } else if (currentScroll <= 50) {
                nav.classList.remove('fixed');
                logo.style.opacity = '1'; // Smoothly fade in the logo
                logo.style.transition = 'opacity 0.5s ease-in-out';
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});
