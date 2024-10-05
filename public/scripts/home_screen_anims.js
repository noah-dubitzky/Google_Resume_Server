$(document).ready(function(){

    localStorage.setItem("logged_in", false);

    $Main_Pic = $("#main_pic");
    $Content = $("#content");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    if(pic_metrics != null)
    {
        $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});

        $Main_Pic.animate({
            top: "25%",
            right: "1%",
            width: "30%",
            
        }, 1000);

    }

    $Main_Pic.on("mouseenter", function(){

        $(this).animate({

            width: "35%",

        }, 500);

    });

    $Main_Pic.on("mouseleave", function(){

        $(this).animate({

            width: "30%",

        }, 500);

    });

    $Content.on("mouseenter", function(){

        $(this).animate({

            fontSize: "120%",

        }, 500);

    });

    $Content.on("mouseleave", function(){

        $(this).animate({

            fontSize: "100%",

        }, 500);

    });

});