$(".next-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.removeClass('clearHeader').addClass("bg-purple fixed-top");
        } else {
            header.removeClass("bg-purple fixed-top").addClass('clearHeader');
        }
    });
});
