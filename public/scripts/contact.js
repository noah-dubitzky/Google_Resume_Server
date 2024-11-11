$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contacts = $(".contact");

    $contacts.each(function(){

        $(this).on("mouseenter", function(){

            $(this).animate({
                
                width: "45%",
        
            }, 500);

        });

        $(this).on("mouseleave", function(){

            $(this).animate({
                
                width: "40%",

            }, 500);

        });

    });

    $Main_Pic.on("mouseenter", function(){

        $(this).animate({

            width: "33%",

        }, 700);

    });

    $Main_Pic.on("mouseleave", function(){

        $(this).animate({

            width: "30%",

        }, 500);

    });

});