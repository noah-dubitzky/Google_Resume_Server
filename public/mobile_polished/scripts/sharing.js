$(document).ready(function () {


    $("#share").on("click", function(event){

        if(($("#sharing_tab").css('opacity') == 0)){

            event.stopPropagation();
            Animate_Sharing();

        }

    });

    $('body').on("click", function(){

        if( ($("#sharing_tab").css('opacity') == 1)){

            Reset_Sharing();

        }
    });
    
});

function Animate_Sharing(){

    // Calculate the center of the window view
    const centerY = ($(window).height() / 2);

    $('#sharing_tab').css("top", centerY + 'px');

    // Animate the div to the center of the visible window
    $('#sharing_tab').animate(
    {
        opacity: 1
    },
    1000, // Animation duration in milliseconds
    function () {
        console.log('Animation complete!');
    }
    );
}

function Reset_Sharing(){

    // Animate the div to the center of the visible window
    $('#sharing_tab').animate(
    {
        opacity: 0
    },
    300, // Animation duration in milliseconds
    'swing', // Easing function
    function () {
        console.log('Animation complete!');
    }
    );
}

