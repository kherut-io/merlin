function showPage() {
    var h = 0;

    $(".page").each(function() { h += $(".page").height(); });

    var index = Math.round(-1 * (h - $(window).scrollTop() - h) / $(".page").height());

    for(var i = 0; i < document.getElementsByClassName("page").length; i++) {
        if(i != index) {
            $(document.getElementsByClassName("page")[i]).addClass("invisible");
            $($(".menu li")[i]).removeClass("active");
        }
    }

    $(document.getElementsByClassName("page")[index]).removeClass("invisible");
    $($(".menu li")[index]).addClass("active");
}

$(document).ready(function() {
    showPage();

    $(".arrow_up").on("click", function() {
        $('html, body').animate({
            scrollTop: $(this).parent().prev().offset().top
        }, 500);
    });
    
    $(".arrow_down").on("click", function() {
        $('html, body').animate({
            scrollTop: $(this).parent().next().offset().top
        }, 500);
    });

    $(".menu li").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#" + $(this).attr("data-id")).offset().top
        }, 500);
    });

    $(window).on("scroll", function() {
        showPage();
    });
});
