$(document).ready(function(){

    PopulateTopBar()

    $Top_Clickables = $(".top_clickables");
    $Profile_Pic = $("#profile_pic");
    $Main_Pic = $("#main_pic");
    $top_bar = $('#top_bar');

    $resume = $("#resume");
    $home = $("#home");
    $contact = $("#contact");
    $services = $("#services");
    $education= $("#education");

    $body = $("body");

    $body.animate({

        opacity: 1
    }, 500);

    $top_bar.css({
        'z-index': '10',
        'background-color': 'rgba(36, 36, 36, 1)',
        'font-family': 'Georgia, serif',
        'color': 'white',
        'padding': '10px',
        'font-size': '5vw'
    });

    // Add CSS to the top clickables
    $Top_Clickables.css({
        'display': 'block',
        'cursor': 'pointer',
        'color': 'white',
        'text-decoration': 'none',
        'background-color': 'rgb(14 36 96)',
        'text-align': 'center',
        'border-radius': '20px',
        'padding': '1%',
        'width': '90%',
        'margin': 'auto',
        'margin-top': '1%'
    });

    $Top_Clickables.each(function(){

        $(this).on("click", function(){

            window.location.href = $(this).attr("id") + ".html";
        });

    });

});

function PopulateTopBar(){
    // Define the HTML block
    var htmlBlock = `
    <div id="top_bar">
        <p class="top_clickables" id="admin">Admin</p>
        <p class="top_clickables" id="message_me">Message Me</p>
        <p class="top_clickables" id="projects">My Projects</p>
        <p class="top_clickables" id="education">Education</p>
        <p class="top_clickables" id="services">Services</p>
        <p class="top_clickables" id="resume">Resume</p>
        <p class="top_clickables" id="contact">Contact</p>
        <p class="top_clickables" id="index">Home</p>
    </div>`;

    //other pages to add
    //<p class="top_clickables" id="admin">Admin</p>
    //<p class="top_clickables" id="email_me">Email Me</p>

    // Insert the HTML block right after the <head> tag
    $('#content').after(htmlBlock);
    
}