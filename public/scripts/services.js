$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $services = $(".service");
    $content = $("#content");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    $Main_Pic.animate({
        top: "20%",
        width: "20%",
        right: "75%",
        
    }, 1000);

    $content.animate({

        opacity: 1
    }, 1500);

    $services.each(function() {
        $(this).data("originalHeight", $(this).height());
    });

    $services.on("mouseenter", function(){

        descriptionHeight = $(this).children(".description").outerHeight() + $(this).children(".title").outerHeight() + $(this).outerHeight();

        $(this).animate({
            height: descriptionHeight + "px"
          },
          {
            duration: 500,
            complete: function(){
                $(this).children(".description").css({"display": "block"}).animate({

                    opacity: "1"
                });
           }
       });

    });

    $services.on("mouseleave", function(){

        $(this).stop();
        $(this).children(".description").stop();        

        $(this).children(".description").animate({
            opacity: 0
          },
          {
            duration: 300,
            complete: function(){

                $(this).css({"display": "none"});

                $(this).parent().animate({

                    height: $(this).parent().data("originalHeight")
                });
           }
       });

    });


});