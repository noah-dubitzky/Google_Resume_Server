$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contact_info = $("#contact_info");
    $content = $("#content");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right, "transform": "translate(-100%, 20%)"});

    var content_position = $content.position();

    $Main_Pic.animate({
        top: content_position.top,
        width: "10%",
        left: content_position.left,
    }, 1000);

    $contact_info.animate({

        opacity: "1",

    }, 1000);

});