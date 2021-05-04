import $ from "jquery";

// --- // Header buttons smooth scroll // --- //

$(".header-buttons").on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// --- // Scroll to top // --- //

// Hide and show S2T button 
$(window).on('scroll', function() {
    if ($(this).scrollTop() > $('header').height()){
        $('.scroll-top').fadeIn('750');
    } 
    else{
        $('.scroll-top').fadeOut('750');
    }
});

// S2T
$('.scroll-top').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 750);
    return false;
});