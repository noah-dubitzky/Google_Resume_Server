$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contacts = $(".contact");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    $Main_Pic.animate({
        top: "20%",
        width: "30%",
        right: "60%",

    }, 1000);

    $contacts.each(function(){

        $(this).on("mouseenter", function(){

            $(this).children("img").animate({
                
                width: "50%",
                height: "50%",

            });

        });

        $(this).on("mouseleave", function(){

            $(this).children("img").animate({
                
                width: "30%",
                height: "30%",

            });

        });

    });

});