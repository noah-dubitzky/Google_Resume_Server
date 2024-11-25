$(document).ready(function(){

    $Top_Clickables = $(".top_clickables");
    
    $Top_Clickables.each(function(){

        $(this).on("click", function(){

            window.location.href = $(this).attr("id") + ".html";
        });

    });

});