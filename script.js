document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Apply fixed class based on scroll position
        if (currentScroll > header.offsetHeight) {
            if (!nav.classList.contains('fixed')) {
                nav.classList.add('fixed');
                nav.style.opacity = '0'; // Initially hide when fixed
                setTimeout(function() {
                    nav.style.opacity = '1'; // Fade in smoothly
                }, 10); // Delay just a bit for CSS transition to kick in
            }
        } else {
            nav.classList.remove('fixed');
            nav.style.opacity = '1'; // Ensure full opacity when not fixed
        }

        // Logic to show/hide nav on scroll direction change
        if (currentScroll > lastScrollTop && currentScroll > nav.offsetHeight) {
            // Scrolling down
            if (nav.style.opacity !== '0') {
                nav.style.opacity = '0'; // Smooth fade out
            }
        } else if (currentScroll < lastScrollTop && currentScroll > nav.offsetHeight) {
            // Scrolling up
            if (nav.style.opacity !== '1') {
                nav.style.opacity = '1'; // Smooth fade in
            }
        }
        lastScrollTop = currentScroll;
    }, false);
});
