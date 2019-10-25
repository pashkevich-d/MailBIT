$(document).ready(function() {
    $('[data-modal=call]').on('click', function() {
        $('.overlay, #registration').fadeIn('slow');
    });
    $('.link').on('click', function() {
        $('.overlay, #registration').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #registration').fadeOut('fast');
    });
    $('input[name=phone]').mask("+1 (999) 999-99-99");
});