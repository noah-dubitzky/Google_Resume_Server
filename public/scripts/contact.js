$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contacts = $(".contact");

    $contacts.each(function(){

        $(this).on("mouseenter", function(){

            $(this).animate({
                
                width: "45%"
        
            }, 500);

        });

        $(this).on("mouseleave", function(){

            $(this).animate({
                
                width: "40%",

            }, 500);

        });

        $(this).click(function(){
            var elementId = $(this).attr("id"); // Get the ID of the clicked element
            var newUrl = "https://" + elementId; // Construct the new URL
            window.location.href = newUrl; // Redirect to the new URL
          });

    });

    $Main_Pic.on("mouseenter", function(){

        $(this).animate({

            width: "53%",

        }, 700);

    });

    $Main_Pic.on("mouseleave", function(){

        $(this).animate({

            width: "50%",

        }, 500);

    });

});