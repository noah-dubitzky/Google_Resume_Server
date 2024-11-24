$(document).ready(function(){

    localStorage.setItem("logged_in", false);

    $Main_Pic = $("#main_pic");
    $Content = $("#content");

    localStorage.setItem('page', "index");

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

            fontSize: "1.1vw",
            width: "45%",

        }, 500);

    });

    $Content.on("mouseleave", function(){

        $(this).animate({

            fontSize: "1vw",
            width: "40%"

        }, 500);

    });

});