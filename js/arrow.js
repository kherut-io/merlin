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
});