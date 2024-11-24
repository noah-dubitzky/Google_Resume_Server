$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");
    $contacts = $(".contact");

    $contacts.each(function(){

        $(this).click(function(){
            var elementId = $(this).attr("id"); // Get the ID of the clicked element
            var newUrl = "https://" + elementId; // Construct the new URL
            window.location.href = newUrl; // Redirect to the new URL
          });

    });

});