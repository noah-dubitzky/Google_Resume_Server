$(document).ready(function(){

    $Top_Clickables = $(".top_clickables");
    $Profile_Pic = $("#profile_pic");
    $Main_Pic = $("#main_pic");

    $resume = $("#resume");
    $home = $("#home");
    $contact = $("#contact");
    $services = $("#services");
    $education= $("#education");

    $Top_Clickables.on("mouseenter", function(){

        $(this).animate({

            color: "red",

        });

    });

    $Top_Clickables.on("mouseleave", function(){

        $(this).animate({

            color: "white",

        }, 200);

    });

    $Profile_Pic.on("mouseenter", function(){

        $(this).animate({

            width: "100px",
            height: "100px",

        }, 500);

    });

    $Profile_Pic.on("mouseleave", function(){

        $(this).animate({

            width: "60px",
            height: "60px",

        }, 500);

    });

    $Top_Clickables.each(function(){

        $(this).on("click", function(){

            GetPicMetrics($Main_Pic);

            window.location.href = $(this).attr("id") + ".html";

        });

    });

});

function GetPicMetrics($Main_Pic){

    pic_width = $Main_Pic.css("width");
    pic_top = $Main_Pic.css("top");
    pic_right = $Main_Pic.css("right");

    pic_metrics = {
        width: pic_width, 
        top: pic_top, 
        right: pic_right
    };

    localStorage.setItem("pic_width", pic_metrics.width);
    localStorage.setItem("pic_top", pic_metrics.top);
    localStorage.setItem("pic_right", pic_metrics.right);

}