$(document).ready(function() {
    $(".arrow_down").on("click", function() {
        console.log("click");

        $('html, body').animate({
            scrollTop: $(this).parent().next().offset().top
        }, 500);
    });
    
    $(".arrow_up").on("click", function() {
        console.log("click");

        $('html, body').animate({
            scrollTop: $(this).parent().prev().offset().top
        }, 500);
    });
    
    $(window).on('scroll', function() {
        var scrolled = $(document).scrollTop().valueOf();
        
        console.log("S:" + scrolled);
        console.log("S-H:" + ($(window).height() - scrolled));
        
        if(scrolled >= 75) {
            $("#home .arrow_down").fadeOut(300);
            $("#description .arrow_up").fadeIn(300);
        }
        
        //Something's wrong here
        else if($(window).height() - scrolled >= 75) {
            $("#home .arrow_down").fadeIn(300);
            $("#description .arrow_up").fadeOut(300);
        }
    });
});