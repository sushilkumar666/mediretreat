$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.nav').addClass('sticky')
    } else {
        $('.nav').removeClass('sticky')
    }
});