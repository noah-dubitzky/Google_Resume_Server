$(document).ready(function(){

    $Main_Pic = $("#main_pic");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    $Main_Pic.animate({
        top: "20%",
        width: "17%",
        right: "73%",

    }, 1000);

});