$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contact_info = $("#contact_info");
    $title = $("#title");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    //  $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});

    //var content_position = $content.position();

    $Main_Pic.animate({
       // width: "30%"
    }, 1000);

    $title.animate({

        opacity: "1",

    }, 1000);

});