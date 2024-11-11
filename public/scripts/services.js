$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $services = $(".service");
    $content = $("#content");

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