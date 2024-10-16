$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    $Main_Pic.animate({
        top: "10%",
        width: "10%",
        right: "1%",
        
    }, 1000);


});

function OpenContent(element){

    element.children(".content").css("display", "block");

    sectionHeight = element.get(0).scrollHeight;

    element.animate({
      height: sectionHeight,
      width: "50%",
      //backgroundColor: "hsla(30, 100%, 65%, 1)",
    }, 300);

    element.children('.content').animate({

        opacity: "1",

    }, 1000);

}

function CloseContent(element, default_height){

    element.children('.content').animate({

        opacity: "0",

    }, 100);

    element.animate({
        height: default_height,
        width: "20%",
    }, {

        duration: "300",
        complete: function(){
            element.children(".content").css("display", "none");
        }
    });
    
}