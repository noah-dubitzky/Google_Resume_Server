$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contact_info = $("#contact_info");
    $title = $("#title");
    $content = $(".content");

    //src="https://www.youtube.com/embed/7XkP2nq6CYI"

    var windowHeight;
    var windowCenter;

    var closestElement = null;
    var previousClosestElement = null;
    var minDistance = Infinity;

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    //  $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});

    //var content_position = $content.position();

    $Main_Pic.animate({
       // width: "30%"
    }, 1000);

    $title.animate({

        opacity: "1",

    }, 1000);

    /*
    $content.each(function() {

        $(this).on('mouseenter', function() {
            // Your mouseover event logic here
            $(this).animate({
                width: "75%",
                height: "auto",
                'font-size': "135%"
             }, 500);
        });

        $(this).on('mouseleave', function() {
            // Your mouseover event logic here
            $(this).animate({
                width: "70%",
                height: "auto",
                'font-size': "120%"
             }, 500);
        });

    });
    */

    $(window).on('scroll', function() {

        findClosestToCenter();

        var previousOffset = 0;
        var currentOffset = closestElement.offset().top;

        if(previousClosestElement)
        {
            previousOffset = previousClosestElement.offset().top
        }

        if (closestElement && previousOffset != currentOffset) {

            if(previousClosestElement)
            {
                previousClosestElement.animate({
                    width: "70%",
                    height: "auto",
                    'font-size': "120%"
                }, 500);
            }

            closestElement.animate({
                width: "75%",
                height: "auto",
                'font-size': "135%"
            }, 500);

            previousClosestElement = closestElement;

        }
        
    });

    function findClosestToCenter() {

        windowHeight = $(window).height();
        windowCenter = windowHeight / 2 + $(window).scrollTop();

        closestElement = null;
        minDistance = Infinity;

        $content.each(function() {

            var elementTop = $(this).offset().top;
            var elementHeight = $(this).outerHeight();
            var elementCenter = elementTop + elementHeight / 2;

            // Calculate the distance between element center and window center
            var distance = Math.abs(windowCenter - elementCenter);

            // Update the closest element if this one is closer
            if (distance < minDistance) {
                minDistance = distance;
                closestElement = $(this);
            }

        });
    }

});

