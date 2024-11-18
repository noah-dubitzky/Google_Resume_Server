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
        'position': 'sticky',
        'top': '0',
        'z-index': '10',
        'background-color': 'rgba(36, 36, 36, 1)',
        'width': '100%',
        'height': '40px',
        'font-family': 'Georgia, serif',
        'align-items': 'center',
        'color': 'white',
        'padding': '10px'
    });

    // Add CSS to the top clickables
    $Top_Clickables.css({
        'float': 'right',
        'margin': '10px',
        'margin-right': '3%',
        'fontSize': '1vw',
        'cursor': 'pointer',
        'color': 'white',
        'text-decoration': 'none'
    });

    const pageID = localStorage.getItem("page");
    const pageSelected = "#" + pageID;
    $(pageSelected).css("color", "red");

    $Top_Clickables.on("mouseenter", function(){

        $(this).animate({

            color: "red",

        });

    });

    $Top_Clickables.on("mouseleave", function(){

        $(this).animate({

            color: "white",

        }, 200);

    });

    $Profile_Pic.on("mouseenter", function(){

        $(this).animate({

            width: "80px",
            height: "80px",

        }, 500);

    });

    $Profile_Pic.on("mouseleave", function(){

        $(this).animate({

            width: "60px",
            height: "60px",

        }, 500);

    });

    $Top_Clickables.each(function(){

        $(this).on("click", function(){

            localStorage.setItem('page', $(this).attr("id"));

            window.location.href = $(this).attr("id") + ".html";

        });

    });

});

function PopulateTopBar(){
    // Define the HTML block
    var htmlBlock = `
    <div id="top_bar">
        <img id="profile_pic" src="assets/Profile_Main.png" alt="^">
        <h3 style="position: absolute; float: left; margin-left: 90px;">MyBio</h3>
        <a class="top_clickables" id="admin">Admin</a>
        <a class="top_clickables" id="message_me">Message Me</a>
        <a class="top_clickables" id="projects">My Projects</a>
        <a class="top_clickables" id="education">Education</a>
        <a class="top_clickables" id="services">Services</a>
        <a class="top_clickables" id="resume">Resume</a>
        <a class="top_clickables" id="contact">Contact</a>
        <a class="top_clickables" id="index">Home</a>
    </div>`;

    //other pages to add
    //<a class="top_clickables" id="admin">Admin</a>
    //<a class="top_clickables" id="email_me">Email Me</a>

    // Insert the HTML block right after the <head> tag
    $('head').after(htmlBlock);
    
}